
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {

    const navigate = useNavigate();

    return (
        <PulseFitHero
            
            title="Who We Are & What We Stand For"
            subtitle="Your trusted partner for MEP solutions, maintenance, and renovation across Dubai & UAE. We deliver excellence through certified technicians and a commitment to quality."
            primaryAction={{
                label: "Connect with us",
                onClick: () => navigate("/contact-us"),
            }}
            secondaryAction={{
                label: "Our Services",
                onClick: () => navigate("/services"),
            }}
            disclaimer="* Certified & trusted technicians with 24/7 support."
            socialProof={{
                avatars: [
                    "https://i.pravatar.cc/150?img=1",
                    "https://i.pravatar.cc/150?img=2",
                    "https://i.pravatar.cc/150?img=3",
                    "https://i.pravatar.cc/150?img=4",
                ],
                text: "Trusted by 1000+ customers.",
            }}
            programs={[
                {
                    image: "https://images.pexels.com/photos/21812143/pexels-photo-21812143.jpeg",
                    category: "HV A.C., Electrical",
                    title: "Professional A.C. & Electrical Services",
                    onClick: () => console.log("HV A.C., Electrical"),
                },
                {
                    image: "https://images.pexels.com/photos/8817851/pexels-photo-8817851.jpeg",
                    category: "Carpentry",
                    title: "Bespoke Carpentry Solutions",
                    onClick: () => console.log("Carpentry"),
                },
                {
                    image: "https://images.pexels.com/photos/13168513/pexels-photo-13168513.jpeg",
                    category: "Data & CCTV",
                    title: "Structured Cabling & CCTV Solutions",
                    onClick: () => console.log("Data & CCTV"),
                },
                {
                    image: "https://images.pexels.com/photos/12527113/pexels-photo-12527113.jpeg",
                    category: "Plumbing",
                    title: "Professional Plumbing Solutions",
                    onClick: () => console.log("Plumbing"),
                },
                {
                    image: "https://images.pexels.com/photos/7217924/pexels-photo-7217924.jpeg",
                    category: "Sanitary, Paint",
                    title: "Professional Sanitary & Paint Solutions",
                    onClick: () => console.log("Sanitary, Paint"),
                },
                {
                    image: "https://images.pexels.com/photos/18177444/pexels-photo-18177444.jpeg",
                    category: "Kitchen Equipment",
                    title: "Professional Kitchen Equipment Solutions",
                },
                {
                    image: "https://images.pexels.com/photos/6474295/pexels-photo-6474295.jpeg",
                    category: "Villa Renovation",
                    title: "Villa Renovation Solutions",
                    onClick: () => console.log("Villa Renovation"),
                },
                {
                    image: "https://images.pexels.com/photos/18177444/pexels-photo-18177444.jpeg",
                    category: "Annual Maintenance",
                    title: "Annual Maintenance Solutions",
                    onClick: () => console.log("Annual Maintenance"),
                }
            ]}
        />
    );
}

