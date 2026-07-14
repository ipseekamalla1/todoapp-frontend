interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
}

export default function Input({
  label,
  placeholder,
  name,
  type = "text",
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        text-foreground
        outline-none
        focus:ring-2
        focus:ring-primary
        "
      />
    </div>
  );
}