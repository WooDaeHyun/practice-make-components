import { createContext, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
//uuid라는 라이브러리를 통해 고유한 id값을 생성할 수 있다.

const TaskContext = createContext();
//contextAPI context 만들기

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (content) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((item) => {
        return item.id === id ? { ...item, complete: !item.complete } : item;
      })
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {/* value안의 값들이 나중에 consumer가 받을 수 있는 값들이다. */}
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
