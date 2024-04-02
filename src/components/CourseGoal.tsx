import React, { PropsWithChildren, type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: PropsWithChildren<ReactNode>;
};

const CourseGoal: React.FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article className=" text-white rounded-lg mt-4 bg-gray-700 p-2 flex items-start justify-between gap-2">
      <div className="my-2">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button className="text-stone-200">Delete</button>
    </article>
  );
};

export default CourseGoal;
// for using children cause the wrapp element is tag you can use ReactNode type
// ReactNode  |  PropsWithChildren<ReactNode>
// PropsWithChildren is a genericType should be include <>
// Look FC is Also Generic Type  React.FC<یچی>
