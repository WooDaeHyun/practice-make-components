import styled from "@emotion/styled";
import ToDoToggle from "./ToDoToggle";
import { useTasks } from "./contexts/TaskProvider";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;
// 스타일드 컴포넌트가 prop을 전달 받는 방법임

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const Task = ({ id, content, complete, ...props }) => {
  const { updateTask, removeTask } = useTasks();
  console.log(complete);

  return (
    <ListItem {...props}>
      <ToDoToggle onChange={(e) => updateTask(id)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

export default Task;
