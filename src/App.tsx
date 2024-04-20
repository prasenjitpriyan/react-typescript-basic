import "./App.css";
import Headers from "./components/Headers";
import imageOne from "../src/assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className="w-full min-h-screen bg-red-100 flex flex-col items-center">
      <div className="bg-red-200 w-[70%] p-5 rounded-xl mt-5 mb-5">
        <Headers image={{ src: imageOne, alt: "A list of goals" }}>
          <h1 className="text-2xl font-semibold text-red-500">
            Your Course Goals
          </h1>
        </Headers>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
    </main>
  );
}

export default App;
