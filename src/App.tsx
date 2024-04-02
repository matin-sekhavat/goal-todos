import CourseGoal from "./components/CourseGoal";
import Header from "./components/HEader";

const App = () => {
  return (
    <main className="h-dvh flex justify-center bg-green-400 ">
      <div className="container max-w-screen-sm">
        <Header />
        <CourseGoal title="FAKE TITLE">test children</CourseGoal>
      </div>
    </main>
  );
};

export default App;
