import PrivacyHero from "@/components/PrivacyHero";


const PrivacyPolicy = () => {
    return (
        <div>
            <PrivacyHero />

            

            <section className="w-full relative mt-10">
                {/* Double line border - Top */}
                <div
                    className="absolute left-0 right-0 top-0"
                    style={{
                        height: "8px",
                        borderTop: "1px solid #E5E5E5",
                        borderBottom: "1px solid #E5E5E5",
                        background:
                            "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                    }}
                />

                {/* Double line borders - Left */}
                <div
                    className="absolute md:left-8 left-0 top-0 bottom-0"
                    style={{
                        width: "8px",
                        borderLeft: "1px solid #E5E5E5",
                        borderRight: "1px solid #E5E5E5",
                        background:
                            "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                    }}
                />

                {/* Double line borders - Right */}
                <div
                    className="absolute md:right-8 right-0 top-0 bottom-0"
                    style={{
                        width: "8px",
                        borderLeft: "1px solid #E5E5E5",
                        borderRight: "1px solid #E5E5E5",
                        background:
                            "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                    }}
                />

                {/* Double line border - Bottom */}
                <div
                    className="absolute left-0 right-0 bottom-0"
                    style={{
                        height: "8px",
                        borderTop: "1px solid #E5E5E5",
                        borderBottom: "1px solid #E5E5E5",
                        background:
                            "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                    }}
                />

                <div
                    className="relative p-4 sm:p-6 md:p-8 lg:p-12 pl-4 sm:pl-6 md:pl-12 lg:pl-20 pr-4 sm:pr-6 md:pr-12 lg:pr-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
                >
                    {/* Badge */}
                    <div
                        className="px-4 sm:px-6 py-2 border border-neutral-300 border-dashed w-fit mb-3 md:mb-6 lg:mb-12 relative z-10"
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">
                            Privacy Policy
                        </h2>
                    </div>

                    {/* Content */}
                    <div
                        className="relative z-10 max-w-4xl mx-auto"
                    >
                        <div
                            className="prose prose-neutral max-w-none"
                        >
                            {/* Last Updated */}
                            <p className="text-sm sm:text-base text-neutral-500 font-generalsans mb-8 italic">
                                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>

                            {/* Introduction */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    1. Introduction
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Everlasting Technical Services LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By using our services or providing us with your personal information, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    2. Information We Collect
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We may collect the following types of information:
                                </p>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    2.1 Personal Information
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    When you contact us, request a quote, or use our services, we may collect:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Name and contact information (email address, phone number, postal address)</li>
                                    <li>Company name and business information</li>
                                    <li>Project details and service requirements</li>
                                    <li>Payment information (processed securely through third-party payment processors)</li>
                                    <li>Identification documents (when required for regulatory compliance)</li>
                                </ul>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    2.2 Automatically Collected Information
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    When you visit our website, we may automatically collect:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>IP address and browser type</li>
                                    <li>Device information and operating system</li>
                                    <li>Pages visited and time spent on our website</li>
                                    <li>Referring website addresses</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>

                            {/* How We Use Your Information */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    3. How We Use Your Information
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We use the information we collect for the following purposes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>To provide, maintain, and improve our services</li>
                                    <li>To process your service requests and quotations</li>
                                    <li>To communicate with you about your projects and services</li>
                                    <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                                    <li>To respond to your inquiries and provide customer support</li>
                                    <li>To comply with legal obligations and regulatory requirements</li>
                                    <li>To prevent fraud and ensure security</li>
                                    <li>To analyze website usage and improve user experience</li>
                                </ul>
                            </div>

                            {/* Information Sharing and Disclosure */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    4. Information Sharing and Disclosure
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We do not sell your personal information. We may share your information only in the following circumstances:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, cloud hosting, email services)</li>
                                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our clients</li>
                                    <li><strong>With Your Consent:</strong> When you have given explicit consent for sharing</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    5. Data Security
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Encryption of sensitive data in transit and at rest</li>
                                    <li>Secure servers and databases</li>
                                    <li>Regular security assessments and updates</li>
                                    <li>Access controls and authentication procedures</li>
                                    <li>Employee training on data protection</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    6. Your Rights
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Under UAE data protection laws, you have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li><strong>Access:</strong> Request access to your personal information</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    To exercise these rights, please contact us using the information provided in the Contact section below.
                                </p>
                            </div>

                            {/* Cookies and Tracking Technologies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    7. Cookies and Tracking Technologies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Types of cookies we use:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                                </p>
                            </div>

                            {/* Data Retention */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    8. Data Retention
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>The nature of the information</li>
                                    <li>Legal and regulatory requirements</li>
                                    <li>Ongoing business relationships</li>
                                    <li>Dispute resolution and legal claims</li>
                                </ul>
                            </div>

                            {/* Third-Party Links */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    9. Third-Party Links
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            {/* Children's Privacy */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    10. Children's Privacy
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                                </p>
                            </div>

                            {/* International Data Transfers */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    11. International Data Transfers
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                                </p>
                            </div>

                            {/* Changes to Privacy Policy */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    12. Changes to Privacy Policy
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated Privacy Policy.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    13. Contact Information
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="bg-neutral-50 border border-neutral-200 border-dashed p-4 sm:p-6 rounded-md" style={{
                                    background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}>
                                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                                        <strong>Everlasting Technical Services LLC</strong>
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                                        Dubai, United Arab Emirates
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                                        Email: info@everlastingtechnical.com
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans">
                                        For privacy-related inquiries: privacy@everlastingtechnical.com
                                    </p>
                                </div>
                            </div>

                            {/* Acknowledgment */}
                            <div className="mb-8 md:mb-12 p-4 sm:p-6 bg-neutral-50 border border-neutral-200 border-dashed rounded-md" style={{
                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
