import { ErrorBoundary, PageLoader, PageNotFound } from "@/components/core";
import { AppLayout } from "@/components/layouts";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const CampusRegistration = lazy(() => import("@/pages/campusRegistration/CampusRegistration"));
const StudioPage = lazy(() => import("@/studio/StudioPage"));

export const router = createBrowserRouter([
  {
    // Sanity Studio — rendered outside AppLayout so it gets a clean full-screen canvas
    path: "/studio/*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <StudioPage />
      </Suspense>
    ),
  },
  {
    path: "/",
    errorElement: <PageNotFound type="404" />,
    element: (
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <AppLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "campus-registration",
        element: <CampusRegistration />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound type="404" />,
  },
]);
