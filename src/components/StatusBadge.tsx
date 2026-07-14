import { Status } from "@/types/enums";


interface StatusBadgeProps {
  status: Status;
}


export default function StatusBadge({
  status,
}: StatusBadgeProps) {


  const styles = {
    TODO: "bg-accent",
    PENDING: "bg-primary",
    DONE: "bg-secondary",
  };


  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        text-foreground
        ${styles[status]}
      `}
    >
      {status.replace("_", " ")}
    </span>
  );
}