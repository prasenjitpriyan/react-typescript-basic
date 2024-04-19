import "./App.css";
import Headers from "./components/Headers";
import imageOne from "../src/assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className="w-full h-screen bg-red-100 flex flex-col justify-center items-center">
      <div className="bg-red-300 w-[50%] p-5 rounded-xl">
        <Headers image={{ src: imageOne, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Headers>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
    </main>
  );
}

export default App;
