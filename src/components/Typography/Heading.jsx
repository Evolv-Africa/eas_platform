import clsx from "clsx";

export default function Heading({ content, className }) {
  return (
    <h1 className={clsx("text-3xl font-bold", className)}>
      {content}
    </h1>
  );
}
