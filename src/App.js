import NewTaskForm from "./components/ToDoList(contextAPI)/NewTaskForm";
import TaskList from "./components/ToDoList(contextAPI)/TaskList";
import Header from "./components/ToDoList(contextAPI)/Header";
import styled from "@emotion/styled";
import TaskProvider from "./components/ToDoList(contextAPI)/contexts/TaskProvider";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header />
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
}

export default App;
