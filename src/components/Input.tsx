import React from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}


export default function Input({
  label,
  ...props
}: InputProps) {

  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}


      <input
        {...props}
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