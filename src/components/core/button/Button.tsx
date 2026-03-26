import React from "react";
import {
  ButtonProps,
  LeftIconRenderer,
  RightIconRenderer,
  resolveButtonModel,
} from "./button.helper";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      LeftIconName,
      RightIconName,
      text,
      startIcon,
      endIcon,
      isDisabled = false,
      theme,
      disabled,
      className,
      children,
      type = "button",
      isLoading = false,
      loadingText,
      testId,
      ...props
    },
    ref,
  ) => {
    const {
      resolvedStartIcon,
      resolvedEndIcon,
      content,
      isButtonDisabled,
      isButtonBusy,
      themeClassName,
      controlSizeClassName,
      iconPx,
      dataTestId,
    } = resolveButtonModel({
      variant,
      size,
      LeftIconName,
      RightIconName,
      text,
      startIcon,
      endIcon,
      isDisabled,
      disabled,
      theme,
      isLoading,
      testId,
      children,
    });

    return (
      <button
        ref={ref}
        type={type}
        data-testid={dataTestId}
        disabled={isButtonDisabled || isButtonBusy}
        aria-busy={isButtonBusy}
        aria-disabled={isButtonDisabled || isButtonBusy}
        className={[
          "inline-flex items-center justify-center transition-all duration-150 ease-in-out select-none capitalize font-neue-machina",
          controlSizeClassName,
          themeClassName,
          isButtonBusy ? "cursor-wait" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <LeftIconRenderer
          LeftIcon={resolvedStartIcon}
          isLoading={isButtonBusy}
          sizePx={iconPx}
        />
        {content ? (
          <span className="truncate">
            {isButtonBusy && typeof content === "string"
              ? (loadingText ?? content)
              : content}
          </span>
        ) : null}
        <RightIconRenderer
          RightIcon={resolvedEndIcon}
          isLoading={isButtonBusy}
          sizePx={iconPx}
        />
      </button>
    );
  },
);

Button.displayName = "Button";
