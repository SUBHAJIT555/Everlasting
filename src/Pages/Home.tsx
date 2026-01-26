import MainHero from "@/components/HomePageHero"
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx"
import type { FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx"
import React from "react"

const sections = [
  {
    leftLabel: "HV A.C. , Electrical",
    title: <>HV A.C. , Electrical</>,
    rightLabel: "HV A.C. , Electrical",
    background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    leftLabel: "Carpentry",
    title: <>Carpentry</>,
    rightLabel: "Carpentry",
    background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  },
  {
    leftLabel: "Data & CCTV",
    title: <>Data & CCTV</>,
    rightLabel: "Data & CCTV",
    background: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
  },
  {
    leftLabel: "Plumbing",
    title: <>Plumbing</>,
    rightLabel: "Plumbing",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
  {
    leftLabel: "Sanitary,Paint",
    title: <>Sanitary,Paint</>,
    rightLabel: "Sanitary,Paint",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
  {
    leftLabel: "Kitchen Equipment",
    title: <>Kitchen Equipment</>,
    rightLabel: "Kitchen Equipment",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
  {
    leftLabel: "Villa Renovation",
    title: <>Villa Renovation</>,
    rightLabel: "Villa Renovation",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
  {
    leftLabel: "Annual Maintenance",
    title: <>Annual Maintenance</>,
    rightLabel: "Annual Maintenance",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
]

const Home = () => {
  const apiRef = React.useRef<FullScreenFXAPI>(null)

  return (
    <div className="w-full">
      <FullScreenScrollFX
        sections={sections}
        fontFamily="GeneralSans, system-ui, sans-serif"
        header={
          <div className="flex flex-col items-center justify-center gap-6 w-full mt-20 sm:mt-24 lg:mt-30 px-4 sm:px-6 lg:px-0">
            {/* Badge */}
            <p
              className="border border-white/30 border-dashed px-4 py-1 sm:px-6 sm:py-1.5 rounded-md flex items-center gap-2 text-white font-generalsans font-medium text-xs sm:text-sm md:text-base w-fit bg-white/10 backdrop-blur-sm"
              style={{
                background:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 4px), rgba(255,255,255,0.05)",
              }}
            >
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
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                style={{ minWidth: 18, minHeight: 18 }}
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
              <span className="text-xs sm:text-sm md:text-base">
                Reliable Services for Homes, Villas & Businesses
              </span>
            </p>

            {/* Heading */}
            <h1 className="
                text-white font-clashdisplay font-light
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                leading-tight text-center max-w-4xl
                px-2 sm:px-0
              ">
              Reliable Technical Services in Dubai &amp; Across the UAE for Homes, Villas &amp; Commercial Spaces
            </h1>

            {/* Paragraph */}
            <p className="
                hidden sm:block
                text-white/90 font-generalsans font-medium
                text-xs sm:text-sm md:text-base lg:text-lg
                text-center max-w-2xl px-2 sm:px-0
              ">
              Everlasting Technical Services LLP provides reliable, fully compliant technical solutions across Dubai and the UAE. From HVAC, electrical, and plumbing to villa renovation, fit-out, and annual maintenance contracts, we deliver quality workmanship, safety, and on-time service for residential and commercial properties.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2 w-full">
              <button
                className="bg-white text-neutral-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-md font-generalsans font-medium text-sm sm:text-base md:text-lg tracking-wider border border-white/20 transition-all duration-300 cursor-pointer hover:bg-white/90 w-full sm:w-auto"
              >
                Get a Quote
              </button>
              <button
                className="bg-transparent text-white border-2 border-white/50 px-4 py-2 sm:px-6 sm:py-2.5 rounded-md font-generalsans font-medium text-sm sm:text-base md:text-lg cursor-pointer hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px), transparent",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        }
        footer={<div>
          
        </div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        apiRef={apiRef}
        colors={{
          text: "rgba(245,245,245,0.92)",
          overlay: "rgba(0,0,0,0.15)",
          pageBg: "#ffffff",
          stageBg: "#000000",
        }}
      />
      <MainHero />
    </div>
  )
}

export default Home;