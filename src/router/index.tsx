import { ErrorBoundary, PageLoader, PageNotFound } from "@/components/core";
import { AppLayout } from "@/components/layouts";
import StudioPage from "@/studio/StudioPage";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const Events = lazy(() => import("@/pages/events/Events"));
const Team = lazy(() => import("@/pages/team/Team"));
const BlogsPage = lazy(() => import("@/pages/blogsPage/BlogsPage"));
const BlogPostPage = lazy(() => import("@/pages/blogsPage/BlogPostPage"));

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
        path: "events",
        element: <Events />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:slug",
        element: <BlogPostPage />,
      },
    ],
  },
  { path: "*", element: <PageNotFound type="404" /> },
]);
