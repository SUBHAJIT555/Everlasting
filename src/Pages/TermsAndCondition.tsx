import TermsHero from "@/components/TermsHero";


const TermsAndCondition = () => {

    return (
        <div>
            <TermsHero />

            

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
                            Terms & Conditions
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
                                    Welcome to Everlasting Technical Services LLC ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our services, including but not limited to HVAC, electrical, plumbing, carpentry, data & CCTV, sanitary & paint, kitchen equipment, villa renovation, and annual maintenance services across Dubai and the United Arab Emirates.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By engaging our services, accessing our website, or contacting us for a quote, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                                </p>
                            </div>

                            {/* Services */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    2. Services Provided
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Everlasting Technical Services LLC provides comprehensive technical services including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>HVAC (Heating, Ventilation, and Air Conditioning) and Electrical Services</li>
                                    <li>Carpentry and Custom Fit-Out Services</li>
                                    <li>Data Cabling and CCTV Installation</li>
                                    <li>Plumbing Services</li>
                                    <li>Sanitary and Painting Services</li>
                                    <li>Kitchen Equipment Installation</li>
                                    <li>Villa Renovation Services</li>
                                    <li>Annual Maintenance Contracts (AMC)</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    All services are provided by certified technicians in compliance with Dubai Municipality regulations and international safety standards.
                                </p>
                            </div>

                            {/* Quotations and Pricing */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    3. Quotations and Pricing
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    All quotations provided by Everlasting Technical Services LLC are valid for 30 days from the date of issue, unless otherwise stated. Prices are subject to change without notice until a formal agreement is signed.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Quotations include standard materials and labor costs. Additional charges may apply for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Premium materials or custom specifications</li>
                                    <li>Emergency or after-hours services</li>
                                    <li>Additional work not included in the original quotation</li>
                                    <li>Permits and regulatory approvals</li>
                                </ul>
                            </div>

                            {/* Payment Terms */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    4. Payment Terms
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Payment terms will be specified in the service agreement or quotation. Generally:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>A deposit may be required before work commences (typically 30-50% of the total project value)</li>
                                    <li>Progress payments may be required for larger projects</li>
                                    <li>Final payment is due upon completion and acceptance of work</li>
                                    <li>Payment methods accepted: Cash, Bank Transfer, Cheque, or Credit Card</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    Late payments may incur interest charges as per UAE law. We reserve the right to suspend services for non-payment.
                                </p>
                            </div>

                            {/* Workmanship and Warranty */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    5. Workmanship and Warranty
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We guarantee our workmanship and materials for a period specified in the service agreement, typically:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Installation work: 12 months from completion date</li>
                                    <li>Materials: As per manufacturer's warranty</li>
                                    <li>Repair work: 90 days from completion date</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Warranty coverage excludes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Damage caused by misuse, neglect, or unauthorized modifications</li>
                                    <li>Normal wear and tear</li>
                                    <li>Damage from external factors beyond our control</li>
                                    <li>Work performed by third parties</li>
                                </ul>
                            </div>

                            {/* Client Responsibilities */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    6. Client Responsibilities
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Clients are responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Providing accurate information about the work required</li>
                                    <li>Obtaining necessary permits and approvals (where applicable)</li>
                                    <li>Ensuring safe access to the work site</li>
                                    <li>Protecting personal belongings and valuables</li>
                                    <li>Making timely payments as agreed</li>
                                    <li>Informing us of any existing issues or concerns before work begins</li>
                                </ul>
                            </div>

                            {/* Cancellation and Refunds */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    7. Cancellation and Refunds
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Cancellation policies:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Cancellation before work commences: Full refund of deposit, minus any costs already incurred</li>
                                    <li>Cancellation after work commences: Payment for work completed plus materials ordered</li>
                                    <li>Refunds will be processed within 14 business days</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    We reserve the right to cancel services if payment is not received or if site conditions pose safety risks.
                                </p>
                            </div>

                            {/* Liability and Insurance */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    8. Liability and Insurance
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    Everlasting Technical Services LLC maintains appropriate insurance coverage for our operations. However:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Our liability is limited to the value of the work performed</li>
                                    <li>We are not liable for indirect, consequential, or incidental damages</li>
                                    <li>Clients are advised to maintain their own insurance coverage</li>
                                    <li>We are not responsible for damage to existing structures unless caused by our negligence</li>
                                </ul>
                            </div>

                            {/* Safety and Compliance */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    9. Safety and Compliance
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    All work is performed in compliance with:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Dubai Municipality regulations</li>
                                    <li>UAE building codes and standards</li>
                                    <li>International safety standards</li>
                                    <li>Industry best practices</li>
                                </ul>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    We maintain all necessary licenses and certifications. Our technicians are trained and certified in their respective fields.
                                </p>
                            </div>

                            {/* Dispute Resolution */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    10. Dispute Resolution
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    In the event of any dispute:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                                    <li>Parties agree to first attempt to resolve disputes through good faith negotiation</li>
                                    <li>If negotiation fails, disputes will be resolved through mediation</li>
                                    <li>As a last resort, disputes will be subject to the exclusive jurisdiction of Dubai courts</li>
                                    <li>UAE law shall govern these Terms</li>
                                </ul>
                            </div>

                            {/* Privacy and Data Protection */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    11. Privacy and Data Protection
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    We respect your privacy and handle personal information in accordance with UAE data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    12. Changes to Terms
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-8 md:mb-12">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-generalsans mb-4">
                                    13. Contact Information
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                                    For questions about these Terms and Conditions, please contact us:
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
                                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans">
                                        Email: info@everlastingtechnical.com
                                    </p>
                                </div>
                            </div>

                            {/* Acknowledgment */}
                            <div className="mb-8 md:mb-12 p-4 sm:p-6 bg-neutral-50 border border-neutral-200 border-dashed rounded-md" style={{
                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}>
                                <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndCondition;
