import React from "react";
import { Icon } from "../icon/Icon";
import { IconNames } from "../icon/types";

export type ButtonVariant = "primary" | "outline" | "plain";
export type ButtonSize = "giant" | "large" | "medium" | "small" | "tiny";
export type ButtonTheme =
  | "primary"
  | "error"
  | "outline"
  | "destructive"
  | "bland"
  | "plain";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  LeftIconName?: IconNames;
  RightIconName?: IconNames;
  text?: string;
  isDisabled?: boolean;
  theme?: ButtonTheme;
  isLoading?: boolean;
  loadingText?: string;
  testId?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: IconNames;
  endIcon?: IconNames;
}

export const SIZE_CLASS_MAP: Record<
  ButtonSize,
  { control: string; icon: string; iconPx: number }
> = {
  giant: {
    control: "h-12 px-6 gap-2 text-sm font-semibold rounded-xl",
    icon: "size-5",
    iconPx: 20,
  },
  large: {
    control: "h-10 px-5 gap-2 text-sm font-semibold rounded-lg",
    icon: "size-4",
    iconPx: 16,
  },
  medium: {
    control: "h-9 px-4 gap-2 text-sm font-semibold rounded-lg",
    icon: "size-4",
    iconPx: 16,
  },
  small: {
    control: "h-8 px-3 gap-1.5 text-xs font-semibold rounded-md",
    icon: "size-3.5",
    iconPx: 14,
  },
  tiny: {
    control: "h-6 px-2.5 gap-1 text-[11px] font-semibold rounded-md",
    icon: "size-3",
    iconPx: 12,
  },
};

export const themeClasses: Record<
  NonNullable<ButtonProps["theme"]>,
  { base: string; disabled: string }
> = {
  primary: {
    base: "bg-primary text-white hover:bg-brand-fade-blue focus:bg-brand-deep-blue focus:shadow-[0_0_0_2px_#C6D2F7,0_0_0_1px_#fff] cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
  bland: {
    base: "bg-neutral-grey-200 text-neutral-grey-1000 hover:bg-neutral-grey-300 hover:text-neutral-grey-1300 focus:bg-white focus:shadow-[0_0_0_2px_#DCDCDE,0_0_0_1px_#fff] cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
  error: {
    base: "bg-global-red-800 text-white hover:bg-global-red-900 focus:bg-global-red-900 focus:shadow-[0_0_0_2px_#FAA4A4,0_0_0_1px_#fff] cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
  destructive: {
    base: "bg-red-100 text-red-700 hover:bg-red-200 focus:bg-white focus:shadow-[0_0_0_3px_#FAA4A4,0_0_0_1px_#fff] cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
  outline: {
    base: "bg-white border border-neutral-grey-500 text-neutral-grey-1000 hover:text-neutral-grey-1300 focus:bg-white focus:shadow-[0_0_0_3px_#DCDCDE,0_0_0_1px_#fff] focus:border-none cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
  plain: {
    base: "bg-white text-neutral-grey-1000 hover:text-neutral-grey-1300 focus:bg-neutral-grey-300 focus:shadow-[0_0_0_3px_#DCDCDE,0_0_0_1px_#fff] cursor-pointer",
    disabled: "bg-neutral-grey-300 text-neutral-grey-700 cursor-not-allowed",
  },
};

export const getButtonThemeClass = (
  theme: NonNullable<ButtonProps["theme"]>,
  isDisabled?: boolean,
  isLoading?: boolean,
): string => {
  const state = isDisabled || isLoading ? "disabled" : "base";
  return themeClasses[theme][state];
};

export const LeftIconRenderer: React.FC<{
  LeftIcon?: IconNames;
  isLoading: boolean;
  sizePx: number;
}> = ({ LeftIcon, isLoading, sizePx }) => {
  if (isLoading || !LeftIcon) return null;
  return React.createElement(Icon, {
    name: LeftIcon,
    width: sizePx,
    height: sizePx,
  });
};

export const RightIconRenderer: React.FC<{
  RightIcon?: IconNames;
  isLoading: boolean;
  sizePx: number;
}> = ({ RightIcon, isLoading, sizePx }) => {
  if (isLoading || !RightIcon) return null;
  return React.createElement(Icon, {
    name: RightIcon,
    width: sizePx,
    height: sizePx,
  });
};

export const resolveButtonModel = ({
  variant = "primary",
  size = "medium",
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
}: Pick<
  ButtonProps,
  | "variant"
  | "size"
  | "LeftIconName"
  | "RightIconName"
  | "text"
  | "startIcon"
  | "endIcon"
  | "isDisabled"
  | "disabled"
  | "theme"
  | "isLoading"
  | "testId"
  | "children"
>) => {
  const resolvedTheme: ButtonTheme = theme ?? variant;
  const resolvedStartIcon = LeftIconName ?? startIcon;
  const resolvedEndIcon = RightIconName ?? endIcon;
  const content = text ?? children;
  const isButtonDisabled = Boolean(isDisabled || disabled);
  const isIconOnly = !content;
  const isButtonBusy = Boolean(isLoading);

  const themeClassName = getButtonThemeClass(
    resolvedTheme,
    isButtonDisabled,
    isButtonBusy,
  );

  const controlSizeClassName = isIconOnly
    ? `${SIZE_CLASS_MAP[size].control} aspect-square px-0 justify-center`
    : `${SIZE_CLASS_MAP[size].control} min-w-fit`;

  return {
    resolvedTheme,
    resolvedStartIcon,
    resolvedEndIcon,
    content,
    isButtonDisabled,
    isButtonBusy,
    themeClassName,
    controlSizeClassName,
    iconPx: SIZE_CLASS_MAP[size].iconPx,
    dataTestId: testId ?? `core-button-${resolvedTheme}`,
  };
};
