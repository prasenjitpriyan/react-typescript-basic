import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  return (
    <article className="mt-5 border-2 border-red-500 rounded flex flex-row justify-between items-center gap-5 p-1">
      <div className="flex flex-row justify-between gap-5">
        <h2>Goal: {title}</h2>
        <p>Summary: {children}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 p-1 rounded text-white m-5"
      >
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
