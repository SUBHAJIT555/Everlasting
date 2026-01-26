import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const ActionButton = ({
    children,
    ctaLink,
}: {
    children: React.ReactNode;
    ctaLink: string;
}) => {
    return (
        <button

            onClick={() => (window.location.href = ctaLink)}
            className="group mt-8 px-8 py-3 rounded-md bg-textcolor text-white font-semibold shadow-lg
                   transition-all hover:scale-105 active:scale-95 hover:bg-secondary
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75
                   text-lg md:text-xl flex items-center gap-2 cursor-pointer"
        >
            {children}
            <span className="transition-transform duration-200 group-hover:-rotate-45">
                <FaArrowRight className="w-5 h-5 color-white" />
            </span>
        </button>
    );
};

export default ActionButton;