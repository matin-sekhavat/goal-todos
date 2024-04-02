import React from "react";

type CourseGoalProps = {
  title: string;
  desc: string;
};

const CourseGoal: React.FC<CourseGoalProps> = ({ title, desc }) => {
  return (
    <article className="bg-slate-800 text-white p-4 rounded-lg mt-4">
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button className="bg-stone-400 rounded-md p-2">Delete</button>
    </article>
  );
};

export default CourseGoal;
