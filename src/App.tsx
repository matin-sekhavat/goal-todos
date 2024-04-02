import CourseGoal from "./components/CourseGoal";

const App = () => {
  return (
    <main className="h-dvh flex justify-center bg-green-400 ">
      <div className="container max-w-screen-sm">
        <CourseGoal title="FAKE TITLE" desc="FAKE DESC" />
        <CourseGoal title="matin sekhavat" desc="test2" />
      </div>
    </main>
  );
};

export default App;
