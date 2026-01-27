import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import FloatingActions from "@/components/ui/FloatingActions";
import LeadCaptureModalManager from "@/components/LeadCaptureModalManager";
import LeadCaptureModalProvider from "@/providers/LeadCaptureModalProvider";
import CallbackModal from "@/components/ui/CallbackModal";
import DotSpinner from "@/components/ui/DotSpinner";
import { Suspense } from "react";
import Footer from "@/components/Footer";
// import Loader from "@/components/ui/Loader";

const MainLayout = () => {
  return (
    <LeadCaptureModalProvider>
      <div className="w-full overflow-x-hidden">
        {/* <Loader /> */}
        {/* Navbar */}
        <Navbar />
        {/* Main content area */}
        <main className="w-full overflow-x-hidden">
          <Suspense
            fallback={
              <div className="flex items-center justify-center  min-h-screen">
                <DotSpinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <ScrollRestoration />
        <FloatingActions />
        {/* Lead Capture Modals */}
        <LeadCaptureModalManager />
        {/* Callback Modal - Globally Available */}
        <CallbackModal />
        {/* Footer Section - At the end of page content */}
        {/* <CrowdCanvas src={PeepsImage} /> */}
        <Footer />
      </div>
    </LeadCaptureModalProvider>
  );
};

export default MainLayout;
