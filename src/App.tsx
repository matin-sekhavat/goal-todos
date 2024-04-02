import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoalType = {
  title: string;
  desc: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoals() {
    const newGoal: CourseGoalType = {
      id: Math.random(),
      title: `Title ${Math.floor(Math.random() * 100)}`,
      desc: `Description of the goal ${Math.floor(Math.random() * 10000)}`,
    };
    setGoals((allGoals) => [...allGoals, newGoal]);
  }
  return (
    <main className="min-h-dvh flex justify-center bg-stone-200 ">
      <div className="container max-w-screen-sm bg-gray-800 h-min rounded-md mt-16 p-4">
        <Header image={{ src: "./public/goals.jpg", alt: "A list Of Goals" }}>
          <p className="text-2xl text-stone-300 font-bold text-center">
            Your Course Goals
          </p>
        </Header>
        <button onClick={handleAddGoals}>ADD Goals</button>
        <CourseGoalList goals={goals} />
      </div>
    </main>
  );
};

export default App;
