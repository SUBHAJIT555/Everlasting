import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    path?: string; // If path is provided, it's a link. If not, it's the current page (active)
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const BreadCrumb = ({ items, className = "" }: BreadcrumbProps) => {
    // Filter out "Home" items since we already show it automatically
    const filteredItems = items.filter(
        (item) => item.label.toLowerCase() !== "home" && item.path !== "/"
    );

    return (
        <nav
            className={`inline-flex items-center gap-2 px-4 py-2 ${className}`}
            aria-label="Breadcrumb"
        >
            {/* Home Icon */}
            <Link
                to="/"
                className="flex items-center justify-center text-neutral-600 hover:text-neutral-700 transition-colors"
                aria-label="Home"
            >
                <Home className="w-4 h-4" />
            </Link>

            {/* Breadcrumb Items */}
            {filteredItems.map((item, index) => {
                const isLast = index === filteredItems.length - 1;

                return (
                    <div key={index} className="flex items-center gap-2">
                        {/* Separator */}
                        <ChevronRight className="w-4 h-4 text-neutral-400" />

                        {/* Item */}
                        {item.path && !isLast ? (
                            <Link
                                to={item.path}
                                className="text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-600 hover:text-neutral-700 font-generalsans transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-700 font-generalsans font-medium">
                                {item.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default BreadCrumb;
