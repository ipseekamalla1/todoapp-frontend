interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}


export default function Button({
  children,
  type = "button",
  className = "",
}: ButtonProps) {

  return (
    <button
      type={type}
      className={`
        bg-primary
        text-foreground
        px-6
        py-3
        rounded-xl
        font-medium
        hover:opacity-90
        transition
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}