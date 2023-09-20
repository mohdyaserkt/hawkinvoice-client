import React from "react";

interface DueDateComponentProps {
  dueDate: Date;
}

const DueDateComponent: React.FC<DueDateComponentProps> = ({ dueDate }) => {
  const today = new Date();
  const formattedToday = today
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toUpperCase();
  const formattedDueDate = new Date(dueDate)
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toUpperCase();

  return (
    <h3 className="">
      {new Date(dueDate).toDateString() === today.toDateString()
        ? "Due Today"
        : dueDate < today
        ? `Overdue by ${Math.ceil(
            (today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
          )} days`
        : `DUE ${formattedDueDate}`}
    </h3>
  );
};

export default DueDateComponent;
