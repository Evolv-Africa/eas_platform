import clsx from "clsx";

export default function Text({ content, className }) {
  return (
    <p className={("text-gray-700 leading-relaxed", className)}>
      {content}
    </p>
  );
}
