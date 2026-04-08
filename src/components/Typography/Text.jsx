import clsx from "clsx";

export default function Text({ content, className }) {
  return (
    <p className={clsx("text-gray-700 leading-relaxed", className)}>
      {content}
    </p>
  );
}
