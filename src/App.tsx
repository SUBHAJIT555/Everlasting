import { useEffect } from "react";
import Lenis from "lenis";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import { swrConfig } from "./lib/swrConfig";
import { SWRConfig } from "swr";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SWRConfig value={swrConfig}>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </SWRConfig>
      </QueryClientProvider>
    </>
  );
}

export default App;
