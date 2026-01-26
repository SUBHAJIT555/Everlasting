

const HomePageHero = () => {
    return (
        <section className="w-full h-screen flex flex-col  justify-center max-w-7xl mx-auto">

            <div>
                {/* tag / badge */}
                <p className="border border-neutral-300 border-dashed px-6 py-1.5 rounded-md flex items-center gap-2 text-text-primary font-generalsans font-medium text-sm sm:text-base w-fit" style={{
                    background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}>
                    <style>{`
                  @keyframes drawSparklesPath {
                    0% {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                    }
                    50% {
                      stroke-dashoffset: 0;
                    }
                    100% {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                    }
                  }
                `}</style>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles text-text-primary"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6"
                            style={{
                                strokeDasharray: 1000,
                                strokeDashoffset: 1000,
                                animation: "drawSparklesPath 5s ease-in-out infinite",
                                animationDelay: "0.5s",
                            }}
                        />
                    </svg>
                    Reliable Services for Homes, Villas & Businesses
                </p>
                {/* title */}

                <h1
                    className="text-text-primary font-clashdisplay font-light text-4xl sm:text-5xl lg:text-6xl leading-tight">Reliable Technical Services in Dubai & Across the UAE for Homes, Villas & Commercial Spaces</h1>

                {/* description */}
                <p className="text-text-secondary font-generalsans font-medium text-sm sm:text-base w-full max-w-2xl">
                    Everlasting Technical Services LLP provides reliable, fully compliant technical solutions across Dubai and the UAE. From HVAC, electrical, and plumbing to villa renovation, fit-out, and annual maintenance contracts, we deliver quality workmanship, safety, and on-time service for residential and commercial properties.
                </p>

                <div className="flex items-center  gap-4">
                    <button className="bg-neutral-700 text-white px-6 py-1.5 rounded-md font-generalsans font-medium text-base sm:text-lg tracking-wider border border-neutral-300 border-dashed transition-all duration-300 cursor-pointer">Get a Quote</button>



                    <button className="bg-primary-500 text-text-secondary font-generalsans font-medium text-base sm:text-lg px-6 py-2 rounded-md border border-neutral-300 border-dashed cursor-pointer"
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), #f1f1f1",
                        }}>
                        Contact Us
                    </button>
                </div>

            </div>

        </section>
    )
}

export default HomePageHero;