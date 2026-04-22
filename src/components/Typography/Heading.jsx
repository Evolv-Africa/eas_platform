import clsx from "clsx";

export default function Heading({ content, className }) {
  return (
    <h1 className={("text-3xl font-bold", className)}>
      {content}
    </h1>
  );
}
