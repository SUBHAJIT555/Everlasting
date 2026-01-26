<?php

// API Key: 7zSEBDbzBeD22Tt5ISAJMm6ep9cevEauX98xi3vZwLM50124

// --- CORS ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = [
    'http://localhost:5173',
    'https://exhibitionstandsuae.ae',
    'https://exhibitionstandsuae.ae',
];
if ($origin && in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// --- Timezone ---
date_default_timezone_set('Asia/Kolkata');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=utf-8');

// --- Autoload ---
require __DIR__ . '/vendor/autoload.php';

// --- Helpers ---
function v(string $key, string $default = ''): string
{
    return isset($_POST[$key]) ? trim((string) $_POST[$key]) : $default;
}
function clean(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}
function required(array $arr): ?string
{
    foreach ($arr as $k => $label) {
        if (!isset($_POST[$k]) || $_POST[$k] === '')
            return "$label is required";
    }
    return null;
}

// --- Request validation ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST allowed.']);
    exit;
}

$formType = v('formType');
if (!in_array($formType, ['contact', 'cta', 'newsletter', 'marketing-modal', 'exit-intent-modal'], true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid formType.']);
    exit;
}

// --- Field validation ---
if ($formType === 'contact') {
    // ContactForm - require name, email, phone
    // interestedIn, startBy, additionalInfo are optional
    if (
        $msg = required([
            'name' => 'Name',
            'email' => 'Email',
            'phone' => 'Phone'
        ])
    ) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'cta') {
    // CTA form - require name, email, phone, subject, message
    if (
        $msg = required([
            'name' => 'Name',
            'email' => 'Email',
            'phone' => 'Phone',
            'subject' => 'Subject',
            'message' => 'Message'
        ])
    ) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'newsletter') {
    if ($msg = required(['email' => 'Email'])) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'marketing-modal' || $formType === 'exit-intent-modal') {
    if ($msg = required(['name' => 'Name', 'email' => 'Email', 'phone' => 'Phone'])) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
}

// --- Email validation ---
$email = v('email');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid email.']);
    exit;
}

// --- Capture values before Google Sheets ---
$name = v('name');
$phone = v('phone');
$message = v('message');
$service = v('interestedIn'); // OR v('service') depending on your form
$serverip = $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['HTTP_CLIENT_IP']
    ?? $_SERVER['REMOTE_ADDR']
    ?? '';

$utm_source = v('utm_source');
$utm_medium = v('utm_medium');
$utm_campaign = v('utm_campaign');
$utm_term = v('utm_term');
$utm_content = v('utm_content');

  // --- Google Sheet Integration (non-blocking) ---
  try {
    $client = new \Google_Client();
    $client->setApplicationName('Google Sheets API');
    $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
    $client->setAccessType('offline');
    $client->setAuthConfig(__DIR__ . '/credentials.json');

    $serviceSheets = new \Google_Service_Sheets($client);
    $spreadsheetId = '1H1sAcoiGjUfx8aFQQku2XS6Ifq3WEh_Zndcd8Ae1mNw';
    // $spreadsheetId = '1aoGrSEOVx4dfG7Z2Fsy9wkFUk2jMPyKxMedXF10yU1g';
    $range = 'ExhibitionLeads';


    $existingRows = $serviceSheets->spreadsheets_values->get($spreadsheetId, $range)->getValues();
    $srno = is_array($existingRows) ? count($existingRows) : 0;

    // Clean and keep phone as text in sheet
    $phoneCell = "'" . preg_replace("/[^0-9+\-\s()]/", '', $phone) . "'";

    $newRow = [
      $srno + 1,
      date('M d, Y h:i:s A'),
      $name,
      $email,
      $phoneCell,
      $message,
      $formType,
      $service,
      $serverip,
      $utm_source,
      $utm_medium,
      $utm_campaign,
      $utm_term,
      $utm_content
    ];

    $valueRange = new \Google_Service_Sheets_ValueRange(['values' => [$newRow]]);
    $options = ['valueInputOption' => 'USER_ENTERED'];
    $serviceSheets->spreadsheets_values->append($spreadsheetId, $range, $valueRange, $options);
    $sheetSynced = true;
  } catch (\Throwable $e) {
    error_log('Google Sheets sync failed: ' . $e->getMessage());
    $sheetSynced = false;
  }

// --- Email Configuration ---
$toAddresses = [['aditya@baharnani.com', 'Aditya']];
$ccAddresses = [['aditya@codcobble.com', 'Gaurav']];

// $ccAddresses = [['data@idigitalise.co.in', 'Idigitalise']];
$fromName = 'Exhibition Stands UAE';

// --- Brand styling ---
$brandName = 'Exhibition Stands UAE';
$tagline = 'Your Trusted Partner for Exhibition Stands in UAE.';
$brandColor = '#0a2540';
$muted = '#6b7280';
$bg = '#f9fafb';
$cardBg = '#ffffff';
$border = '#e5e7eb';

// --- Subject ---
switch ($formType) {
    case 'contact':
        // ContactForm - build subject from available fields
        $interestedIn = v('interestedIn');
        if ($interestedIn) {
            $subject = "New Contact Inquiry - in Exhibition Stands UAE" . clean(v('name')) . " (Interested in: " . clean($interestedIn) . ")";
        } else {
            $subject = "New Contact Inquiry - in Exhibition Stands UAE" . clean(v('name'));
        }
        break;
    case 'cta':
        // CTA form - use subject field
        $subject = clean(v('subject'));
        break;
    case 'newsletter':
        $subject = "New Newsletter Signup - in Exhibition Stands UAE" . $email;
        break;

    case 'marketing-modal' || 'exit-intent-modal':
        $subject = "New Lead Capture Submission - in Exhibition Stands UAE" . $name;
        break;


    default:
        $subject = "Form Submission";
        break;
}


// --- Dynamic content per form type ---
$mainContent = '';

if ($formType === 'contact') {
    // Build contact form content based on available fields
    $contactDetails = '';

    // Basic fields (always present)
    $contactDetails .= '<p><strong>Name:</strong> ' . clean(v('name')) . '</p>';
    $contactDetails .= '<p><strong>Email:</strong> ' . clean(v('email')) . '</p>';
    $contactDetails .= '<p><strong>Phone:</strong> ' . clean(v('phone')) . '</p>';

    // ContactForm fields (interestedIn, startBy, additionalInfo)
    $interestedIn = v('interestedIn');
    $startBy = v('startBy');
    $additionalInfo = v('additionalInfo');

    if ($interestedIn) {
        $contactDetails .= '<p><strong>Interested In:</strong> ' . clean($interestedIn) . '</p>';
    }
    if ($startBy) {
        // Parse ISO date string and format it
        try {
            $date = new DateTime($startBy);
            $contactDetails .= '<p><strong>Preferred Start Date:</strong> ' . clean($date->format('F d, Y')) . '</p>';
        } catch (Exception $e) {
            $contactDetails .= '<p><strong>Preferred Start Date:</strong> ' . clean($startBy) . '</p>';
        }
    }
    if ($additionalInfo) {
        $contactDetails .= '<p><strong>Additional Information:</strong><br>' . nl2br(clean($additionalInfo)) . '</p>';
    }

    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Contact Details</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">' . $contactDetails . '</td></tr>
        </table>
      </td>
    </tr>';
} elseif ($formType === 'cta') {
    // CTA form content
    $ctaDetails = '';
    $ctaDetails .= '<p><strong>Name:</strong> ' . clean(v('name')) . '</p>';
    $ctaDetails .= '<p><strong>Email:</strong> ' . clean(v('email')) . '</p>';
    $ctaDetails .= '<p><strong>Phone:</strong> ' . clean(v('phone')) . '</p>';
    $ctaDetails .= '<p><strong>Subject:</strong> ' . clean(v('subject')) . '</p>';
    $ctaDetails .= '<p><strong>Message:</strong><br>' . nl2br(clean(v('message'))) . '</p>';

    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">CTA Form Submission</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">' . $ctaDetails . '</td></tr>
        </table>
      </td>
    </tr>';
} elseif ($formType === 'marketing-modal' || $formType === 'exit-intent-modal') {
    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Lead Capture Submission</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
            <p><strong>Name:</strong> ' . clean(v('name')) . '</p>
            <p><strong>Email:</strong> ' . clean(v('email')) . '</p>
            <p><strong>Phone:</strong> ' . clean(v('phone')) . '</p>
          </td></tr>
        </table>
      </td>
    </tr>';
} else {
    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Newsletter Subscription</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
            <p><strong>Email:</strong> ' . clean($email) . '</p>
          </td></tr>
        </table>
      </td>
    </tr>';
}


// --- HTML email template (Outlook-safe) ---
ob_start(); ?>
<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= clean($subject) ?></title>
    <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      <o:AllowPNG/>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f9fafb;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            display: block;
            line-height: 0;
        }

        @media (max-width:600px) {
            .stack-column {
                display: block !important;
                width: 100% !important;
            }
        }
    </style>
</head>

<body style="margin:0;padding:0;background:#f9fafb;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tr>
            <td align="center" style="padding:30px 10px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation"
                    style="width:600px;max-width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                    <tr>
                        <td align="center" style="padding:30px 10px 20px;">
                            <h1
                                style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#0a2540;font-weight:700;">
                                <?= clean($brandName) ?>
                            </h1>
                            <p
                                style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">
                                <?= clean($tagline) ?>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:1px;background:#e5e7eb;"></td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:20px;">
                            <p
                                style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:600;color:#0a2540;">
                                <?= clean($subject) ?>
                            </p>
                            <p
                                style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                                Received at <?= date('Y-m-d H:i:s') ?> (server time)</p>
                        </td>
                    </tr>

                    <?= $mainContent ?>

                    <tr>
                        <td style="padding:0 24px 24px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                            style="border:1px solid #e5e7eb;border-radius:4px;">
                            <tr>
                                <td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">
                                Google Sheet Sync Status
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
                                <?= $sheetSynced ? 'Success' : 'Failed' ?>
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td align="center"
                            style="padding:14px 20px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                            This email was generated from the <strong><?= clean($brandName) ?></strong> website.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
<?php
$html = ob_get_clean();

// --- Alt text ---
$alt = strip_tags($subject) . "\n\n";
if ($formType === 'contact') {
    $alt .= "Name: " . v('name') . "\n";
    $alt .= "Email: " . v('email') . "\n";
    $alt .= "Phone: " . v('phone') . "\n";
    if (v('interestedIn'))
        $alt .= "Interested In: " . v('interestedIn') . "\n";
    if (v('startBy'))
        $alt .= "Start By: " . v('startBy') . "\n";
    if (v('additionalInfo'))
        $alt .= "Additional Info: " . strip_tags(v('additionalInfo')) . "\n";
} elseif ($formType === 'cta') {
    $alt .= "Name: " . v('name') . "\n";
    $alt .= "Email: " . v('email') . "\n";
    $alt .= "Phone: " . v('phone') . "\n";
    $alt .= "Subject: " . v('subject') . "\n";
    $alt .= "Message: " . strip_tags(v('message')) . "\n";
} elseif ($formType === 'newsletter') {
    $alt .= "Email: " . $email . "\n";
}

// --- Prepare API Payload ---
// Format 'to' addresses
$toFormatted = [];
foreach ($toAddresses as [$addr, $nm]) {
    if ($nm) {
        $toFormatted[] = ['email' => $addr, 'name' => $nm];
    } else {
        $toFormatted[] = $addr;
    }
}

// Format 'cc' addresses
$ccFormatted = [];
foreach ($ccAddresses as [$addr, $nm]) {
    if ($nm) {
        $ccFormatted[] = ['email' => $addr, 'name' => $nm];
    } else {
        $ccFormatted[] = $addr;
    }
}

// Format reply_to
$replyToName = v('name', $email);
$replyTo = ['email' => $email, 'name' => $replyToName];

// Build API payload
$payload = [
    'subject' => $subject,
    'html_body' => $html,
    'alt_body' => $alt,
    'to' => $toFormatted,
    'cc' => $ccFormatted,
    'reply_to' => $replyTo
];

// Prepare auto-reply content (only if name is available)
$customerName = v('name');
if ($customerName) {
    $customerNameClean = clean($customerName);
    $autoReplySubject = "Thanks for contacting $brandName";
    $autoReplyHtml = "
        <div style='font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
            <p style='font-size: 16px; color: #333; margin-bottom: 16px;'>Hi " . $customerNameClean . ",</p>
            <p style='font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;'>
                Thanks for reaching out to <strong>$brandName</strong>. Our team has received your details and will contact you shortly.
            </p>
            <p style='font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;'>
                If it's urgent, feel free to reply to this email.
            </p>
            <br>
            <p style='font-size: 15px; color: #333; margin-top: 24px;'>
                Regards,<br>
                <strong>$brandName Team</strong>
            </p>
        </div>
    ";
    $autoReplyAlt = "Hi " . $customerNameClean . ",\n\nThanks for reaching out to $brandName. Our team has received your details and will contact you shortly.\n\nIf it's urgent, feel free to reply to this email.\n\nRegards,\n$brandName Team";
    
    $payload['auto_reply'] = [
        'enabled' => true,
        'to' => $email,
        'subject' => $autoReplySubject,
        'html' => $autoReplyHtml,
        'alt' => $autoReplyAlt
    ];
}

// --- Send Email via API ---
$apiUrl = 'https://mailer.cobblehosting.com/api/v1/email/send';
$apiKey = '7zSEBDbzBeD22Tt5ISAJMm6ep9cevEauX98xi3vZwLM50124';

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-API-Key: ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    error_log('API Request Error: ' . $curlError);
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email.']);
} elseif ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    error_log('API Error Response: ' . $response);
    http_response_code(500);
    $errorData = json_decode($response, true);
    $errorMessage = $errorData['error'] ?? $errorData['message'] ?? 'Failed to send email.';
    echo json_encode(['error' => $errorMessage]);
}

