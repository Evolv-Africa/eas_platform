import { useSearchParams } from "react-router-dom";

export const useGetSearchParams = (paramToSearch: string = "id") => {
  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get(paramToSearch);
  return paramsId;
};
