import { useState } from "react";
import { CourseGoalType } from "../App";
import FormInput from "./FormInput";

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
    setQuery({ title: "", desc: "", id: 0 });
  }

  function handleInputFields(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setQuery({ ...query, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col caret-slate-600  ">
      <FormInput
        label="Your Goal"
        name="title"
        onChange={handleInputFields}
        inputName="goal-title"
      />
      <FormInput
        label="Goal Description"
        name="desc"
        onChange={handleInputFields}
        inputName="goal-description"
      />

      <div>
        <button className=" my-4 border-2 border-stone-500 p-2 rounded-md hover:bg-stone-500 transition-all duration-200">
          Add New Goal
        </button>
      </div>
    </form>
  );
}

export default NewGoal;
