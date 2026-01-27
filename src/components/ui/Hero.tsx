import AboutHero from "@/assets/images/AboutPage/hero-and-about-img/About-hero.webp";
import { useCallbackModalStore } from "../store/callbackModalStore";


const Hero = () => {
    const openCallbackModal = useCallbackModalStore((state) => state.openModal);
    return (
        <section className="relative w-full text-gray-900 overflow-hidden">

            <img
                src={AboutHero}
                alt="MEP Technical Services in Dubai"
                className="absolute inset-0 w-full h-full object-cover object-right"
            />

            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                    backgroundColor: "white",
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Complete MEP & Technical Services
                        <span className="block text-orange-500">
                            in Dubai & Across UAE
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-900">
                        HVAC, Electrical, Villa Renovation & Annual Maintenance Contracts (AMC)
                        for Residential and Commercial Projects.
                    </p>

                    <ul className="mt-6 space-y-2 text-gray-900">
                        <li>✔ 24/7 Emergency Support</li>
                        <li>✔ AMC Services Across UAE</li>
                        <li>✔ Skilled & Certified Technicians</li>
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={openCallbackModal}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
                            Get Free Quote
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
