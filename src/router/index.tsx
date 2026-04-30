import { ErrorBoundary, PageLoader, PageNotFound } from "@/components/core";
import { AppLayout } from "@/components/layouts";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const BlogsPage = lazy(() => import("@/pages/blogsPage/BlogsPage"));
const BlogPostPage = lazy(() => import("@/pages/blogsPage/BlogPostPage"));

export const router = createBrowserRouter([
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
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "blogs/:slug", element: <BlogPostPage /> },
    ],
  },
  {
    path: "/blogs/:slug",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <BlogPostPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  { path: "*", element: <PageNotFound type="404" /> },
]);