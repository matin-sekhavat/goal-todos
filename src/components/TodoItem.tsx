// function TodoItem({ id, title, isComplete, children }: TodoProps) {
//   return (
//     <div style={divStyles}>
//       {title} {children}
//     </div>
//   ); // یک عنصر خارجی برای بازگشت از تابع
// }

import {
  CSSProperties,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { TodoProps } from "./TodoList";

// const styles = {
//   color: "red",
//   backgroundColor: "#efefef",
//   textAlign: "center",
// };

const styles: CSSProperties = {
  color: "red",
  backgroundColor: "#efefef",
  textAlign: "center",
};

interface MouseMoveType {
  x: number;
  y: number;
}

interface UserType {
  id: number;
  name: string;
}
const TodoItem: FC<PropsWithChildren<TodoProps>> = ({ title, children }) => {
  const [pos, setPos] = useState<MouseMoveType>({
    x: 0,
    y: 0,
  });

  // function para(e: React.MouseEvent<HTMLButtonElement>){
  //   setPos((prev  )=> {...prev  , x:e.clientX , y: e.clientY})
  // }

  // const inputElem = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputElem.current?.focus();
  //   //Null
  // }, []);

  const [user, setUser] = useState<UserType>({} as UserType);

  console.log(!!user);

  return (
    <>
      <p style={styles}>{title}</p>
      <h1>{children}</h1>
      <button
        onMouseMove={(e: React.MouseEvent<HTMLButtonElement>) =>
          console.log("test")
        }
      >
        CLick on Me
      </button>
      {/* <input type="text" ref={inputElem} /> */}
    </>
  );
};

export default TodoItem;

//JSX.Element

//types
//CSSProperties
//const App : FC<PropsWithChildren<TodoProps>>
