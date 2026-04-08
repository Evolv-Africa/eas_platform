export default function Badge({ children, ...props }) {
  return (
    <span
      className="w-fit rounded-full px-10 py-2 text-sm font-medium inline-block"
      style={{
        border: "1.5px solid #1D44B8",
        color: "#1D44B8",
      }}
      {...props}
    >
      {children}
    </span>
  );
}