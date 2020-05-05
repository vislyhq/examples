import React, { useState } from "react";
import {
  Page,
  Task,
  SubmitInput,
  Button,
  Tooltip,
  SegmentedControl,
  ProgressBar,
} from "./visly";
import * as uuid from "uuid";

interface Todo {
  id: string;
  title: string;
  date: Date;
  done: boolean;
}

type TodoCollection = { [key: string]: Todo };

function newTodo(title: string) {
  return {
    id: uuid.v4(),
    title: title,
    date: new Date(),
    done: false,
  };
}

function App() {
  const [tab, setTab] = useState("all");
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<TodoCollection>({});

  const all = Object.values(todos);
  const todo = Object.values(todos).filter((t) => !t.done);
  const done = Object.values(todos).filter((t) => t.done);
  const progress = all.length > 0 ? done.length / all.length : 0;
  const progressColor =
    progress < 0.25 ? "red" : progress < 0.75 ? "yellow" : "green";

  let visible = tab === "todo" ? todo : tab === "done" ? done : all;

  return (
    <Page title="Visly todo app">
      <SubmitInput
        placeholder="Get it done!"
        value={title}
        onChange={setTitle}
        onSubmit={() => {
          const todo = newTodo(title || "Untitled");
          setTodos({ ...todos, [todo.id]: todo });
          setTitle("");
        }}
      />

      <div style={{ height: 30 }} />

      <SegmentedControl selected={tab} onSelect={setTab}>
        <SegmentedControl.Button value="all" text="All" />
        <SegmentedControl.Button value="todo" text="Todo" />
        <SegmentedControl.Button value="done" text="Done" />
      </SegmentedControl>

      <div style={{ height: 20 }} />

      <ProgressBar value={progress} color={progressColor} />

      <div style={{ height: 10 }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          flex: 1,
        }}
      >
        {visible.map((todo) => (
          <Task
            style={{ marginTop: 10 }}
            title={todo.title}
            done={todo.done}
            checked={todo.done}
            onCheckedChanged={() => {
              setTodos({ ...todos, [todo.id]: { ...todo, done: !todo.done } });
            }}
            date={todo.date.toLocaleTimeString()}
          />
        ))}
      </div>

      <div style={{ height: 10 }} />

      <Tooltip text="All done!" gravity="bottom">
        <Button
          style={{ width: "100%" }}
          text="Clear list"
          onClick={() => setTodos({})}
        />
      </Tooltip>
    </Page>
  );
}

export default App;
