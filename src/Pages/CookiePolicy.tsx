import CookieHero from "@/components/CookieHero";


const CookiePolicy = () => {
    return (
        <div>
            <CookieHero />

            

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
                            Legal Information
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
                                    This Cookie Policy explains what cookies are, how Everlasting Technical Services LLC ("we," "our," or "us") uses cookies on our website, and your choices regarding cookies.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree with our use of cookies, please disable them in your browser settings or refrain from using our website.
                                </p>
                            </div>

                            {/* What Are Cookies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    2. What Are Cookies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Cookies allow websites to recognize your device and store some information about your preferences or past actions. They help improve your browsing experience by remembering your settings and preferences.
                                </p>
                            </div>

                            {/* Types of Cookies We Use */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    3. Types of Cookies We Use
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We use the following types of cookies on our website:
                                </p>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    3.1 Essential Cookies
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Session management cookies</li>
                                    <li>Security cookies</li>
                                    <li>Load balancing cookies</li>
                                </ul>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    3.2 Analytics Cookies
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Google Analytics cookies</li>
                                    <li>Page view tracking</li>
                                    <li>User behavior analysis</li>
                                    <li>Traffic source identification</li>
                                </ul>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    3.3 Functional Cookies
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Language preference cookies</li>
                                    <li>Region-based content cookies</li>
                                    <li>User interface customization</li>
                                </ul>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    3.4 Marketing Cookies
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Advertising network cookies</li>
                                    <li>Social media integration cookies</li>
                                    <li>Remarketing cookies</li>
                                </ul>
                            </div>

                            {/* How We Use Cookies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    4. How We Use Cookies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We use cookies for the following purposes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>To ensure our website functions correctly and securely</li>
                                    <li>To remember your preferences and settings</li>
                                    <li>To analyze website traffic and user behavior</li>
                                    <li>To improve website performance and user experience</li>
                                    <li>To personalize content and advertisements</li>
                                    <li>To measure the effectiveness of our marketing campaigns</li>
                                    <li>To provide social media features</li>
                                </ul>
                            </div>

                            {/* Third-Party Cookies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    5. Third-Party Cookies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third parties may include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                                    <li><strong>Social Media Platforms:</strong> For social media integration and sharing features</li>
                                    <li><strong>Advertising Networks:</strong> For delivering relevant advertisements</li>
                                    <li><strong>Content Delivery Networks:</strong> For optimizing website loading speed</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    These third-party cookies are subject to the respective third parties' privacy policies. We do not control these cookies, and you should review the third parties' policies for more information.
                                </p>
                            </div>

                            {/* Cookie Duration */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    6. Cookie Duration
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Cookies can be either "session" cookies or "persistent" cookies:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are essential for the website to function during your visit.</li>
                                    <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website and remember your preferences.</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    The duration of persistent cookies varies depending on their purpose. Most analytics and marketing cookies expire after 12-24 months, while essential cookies may have shorter durations.
                                </p>
                            </div>

                            {/* Managing Cookies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    7. Managing Cookies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website's features.
                                </p>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    7.1 Browser Settings
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    You can control cookies through your browser settings. Here are links to instructions for popular browsers:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                                    <li>Mozilla Firefox: Options → Privacy & Security → Cookies</li>
                                    <li>Safari: Preferences → Privacy → Cookies</li>
                                    <li>Microsoft Edge: Settings → Privacy, Search, and Services → Cookies</li>
                                </ul>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-generalsans mb-3 mt-6">
                                    7.2 Cookie Consent
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    When you first visit our website, you may see a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences. You can change your cookie preferences at any time through our cookie settings.
                                </p>
                            </div>

                            {/* Impact of Disabling Cookies */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    8. Impact of Disabling Cookies
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    If you choose to disable cookies, some features of our website may not function properly:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>You may need to re-enter information each time you visit</li>
                                    <li>Some website features may be unavailable</li>
                                    <li>Personalized content and recommendations may not be available</li>
                                    <li>Website performance may be affected</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Essential cookies are necessary for the website to function, and disabling them may prevent access to certain parts of our website.
                                </p>
                            </div>

                            {/* Do Not Track Signals */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    9. Do Not Track Signals
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. Our website does not currently respond to DNT signals, but we respect your cookie preferences as set through your browser or our cookie consent mechanism.
                                </p>
                            </div>

                            {/* Updates to Cookie Policy */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    10. Updates to Cookie Policy
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website after changes constitutes acceptance of the updated Cookie Policy.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    11. Contact Information
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us:
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
                                        For cookie-related inquiries: privacy@everlastingtechnical.com
                                    </p>
                                </div>
                            </div>

                            {/* Acknowledgment */}
                            <div className="mb-8 md:mb-12 p-4 sm:p-6 bg-neutral-50 border border-neutral-200 border-dashed rounded-md" style={{
                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By using our website, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein, unless you have disabled them in your browser settings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookiePolicy;
