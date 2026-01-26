import React from "react";
import { cn } from "@/lib/utils";

interface DotSpinnerProps {
    size?: string;
    speed?: string;
    color?: string;
    className?: string;
    withOverlay?: boolean;
    overlayClassName?: string;
}

const DotSpinner: React.FC<DotSpinnerProps> = ({
    size = "2.8rem",
    speed = "0.9s",
    color = "#183153",
    className = "",
    withOverlay = false,
    overlayClassName = "",
}) => {
    const spinner = (
        <div
            className={cn("dot-spinner", className)}
            style={
                {
                    "--uib-size": size,
                    "--uib-speed": speed,
                    "--uib-color": color,
                } as React.CSSProperties
            }
        >
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div>
    );

    if (withOverlay) {
        return (
            <div
                className={cn(
                    "fixed inset-0 z-50 flex items-center justify-center bg-bg/60 backdrop-blur-sm",
                    overlayClassName
                )}
            >
                {spinner}
            </div>
        );
    }

    return spinner;
};

export default DotSpinner;

