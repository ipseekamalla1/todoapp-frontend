interface EmptyStateProps {
  message: string;
}


export default function EmptyState({
  message,
}: EmptyStateProps) {

  return (
    <div
      className="
      bg-card
      rounded-2xl
      p-8
      text-center
      border
      border-slate-100
      "
    >

      <p className="text-slate-500">
        {message}
      </p>

    </div>
  );
}