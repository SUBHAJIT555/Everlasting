import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "./full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Silence",
    title: <>Absence</>,
    rightLabel: "Silence",
    background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    leftLabel: "Essence",
    title: <>Stillness</>,
    rightLabel: "Essence",
    background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  },
  {
    leftLabel: "Rebirth",
    title: <>Growth</>,
    rightLabel: "Rebirth",
    background: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
  },
  {
    leftLabel: "Change",
    title: <>Opportunity</>,
    rightLabel: "Change",
    background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
  },
];

export default function FullScreenScrollFXDemo() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <>
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>The Creative</div>
            <div>Process</div>
          </>
        }
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        apiRef={apiRef}
      />
    </>
  );
}
