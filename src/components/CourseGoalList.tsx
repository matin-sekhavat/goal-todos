import { CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

function CourseGoalList({ goals }: CourseGoalListProps) {
  console.log(goals);
  return (
    <ul className="grid grid-cols-2 gap-2">
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>{goal.desc}</CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
