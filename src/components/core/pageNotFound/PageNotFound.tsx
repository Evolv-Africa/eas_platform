import { useNavigate } from "react-router-dom";
import { Icon } from "../icon/Icon";

export const PageNotFound = ({ type }: { type: "404" | "500" }) => {
  const navigate = useNavigate();
  return (
    <div
      data-testid="page-not-found"
      className="min-h-screen bg-white-1 flex flex-col items-center justify-center px-4"
    >
      <div className="max-w-md w-full text-center">
        {/* type Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-3 leading-none">
            {type}
          </h1>
        </div>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
            <Icon
              name="WarningOctagonFill"
              className="w-12 h-12 text-primary"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary-1 mb-4">
            Page Not Found
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate(-1)}
            data-testid="go-back"
            className="w-full cursor-pointer bg-orange-500 text-white-1 py-3 px-6 rounded-lg font-medium
             hover:bg-orange-500/80 transition-colors duration-200 flex items-center justify-center gap-2 text-white"
          >
            <Icon
              name="CaretLeft"
              className="w-5 h-5 bg-white p-1 rounded-full text-black"
            />
            Go Back to Previous Page
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};
