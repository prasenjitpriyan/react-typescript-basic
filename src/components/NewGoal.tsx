import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="flex flex-col">
        <label htmlFor="goal" className="text-red-500">
          Your goal
        </label>
        <input type="text" id="goal" className="p-2 rounded" ref={goal} />
      </p>
      <p className="flex flex-col">
        <label htmlFor="summary" className="text-red-500">
          Short summary
        </label>
        <input type="text" id="summary" className="p-2 rounded" ref={summary} />
      </p>
      <p className="flex flex-col">
        <button className="p-2 bg-red-500 rounded text-white">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
