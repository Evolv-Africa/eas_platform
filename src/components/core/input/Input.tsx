import { FC } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring"
        {...props}
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
};
