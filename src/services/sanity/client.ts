import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION;
const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== "false";

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
};

export const sanityClient = createClient(sanityConfig);

export const fetchSanityQuery = <T>(
  query: string,
  params: Record<string, unknown> = {},
) => sanityClient.fetch<T>(query, params);
