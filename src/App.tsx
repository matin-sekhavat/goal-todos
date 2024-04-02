import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="h-dvh flex justify-center bg-stone-200 ">
      <div className="container max-w-screen-sm bg-gray-800 h-min rounded-md mt-16">
        <Header image={{ src: "./public/goals.jpg", alt: "A list Of Goals" }}>
          <p className="text-2xl text-stone-300 font-bold text-center">
            Your Course Goals
          </p>
        </Header>
        <CourseGoal title="FAKE TITLE">test children</CourseGoal>
      </div>
    </main>
  );
};

export default App;
