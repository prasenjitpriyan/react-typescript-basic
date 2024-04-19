import { type FC, type PropsWithChildren } from "react";


type CourseGoalProps = PropsWithChildren<{
  id: number,
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)} className="bg-red-500 p-1 rounded text-white hover:text-black">
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
