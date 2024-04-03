import { useState } from "react";
import { CourseGoalType } from "../App";

type NewGoalProps = {
  handleAddGoals: (newGoal: CourseGoalType) => void;
};

function NewGoal({ handleAddGoals }: NewGoalProps) {
  const [query, setQuery] = useState<CourseGoalType>({
    title: "",
    desc: "",
    id: Math.floor(Math.random() * 100),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    handleAddGoals(query);
  }

  function handleInputFields(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setQuery({ ...query, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col caret-slate-600  ">
      <div className="flex flex-col mt-2">
        <label htmlFor="goal-title" className="text-white">
          Your Goal
        </label>
        <input
          type="text"
          id="goal-title"
          onChange={handleInputFields}
          name="title"
          className="p-2 rounded-md outline-none focus:ring-4 focus:ring-slate-600"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="goal-summary" className="text-white">
          short Summary
        </label>
        <input
          type="text"
          id="goal-summary"
          onChange={handleInputFields}
          name="desc"
          className="p-2 rounded-md outline-none focus:ring-4 focus:ring-slate-600"
        />
      </div>
      <div>
        <button className=" my-4 border-2 border-stone-500 p-2 rounded-md hover:bg-stone-500 transition-all duration-200">
          Add New Goal
        </button>
      </div>
    </form>
  );
}

export default NewGoal;
