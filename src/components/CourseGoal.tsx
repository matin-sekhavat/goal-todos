import React, { PropsWithChildren, type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: PropsWithChildren<ReactNode>;
};

const CourseGoal: React.FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article className=" text-white p-4 rounded-lg mt-4">
      <div className="my-2">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button className="bg-stone-400 rounded-md p-2">Delete</button>
    </article>
  );
};

export default CourseGoal;
// for using children cause the wrapp element is tag you can use ReactNode type
// ReactNode  |  PropsWithChildren<ReactNode>
// PropsWithChildren is a genericType should be include <>
// Look FC is Also Generic Type  React.FC<یچی>
