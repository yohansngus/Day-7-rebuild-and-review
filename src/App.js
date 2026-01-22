import { useState } from "react";
import "./App.css";

function App() {
  const [inp, setInp] = useState("");
  const [tasks, setTask] = useState([]);
  const inpTask = (e) => {
    setInp(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (inp.trim() === "") return;
    setTask((pre) => [...pre, inp]);
    setInp("");
  };
  const closeBtn = (id) => {
    // setTask((prev) => prev.filter((_, i) => i !== prev.length - 1 - id));
    setTask((prev) => prev.filter((_, i) => i !== prev.length - 1 - id));
  };
  return (
    <div className="App">
      <h1 className="todoApp">ToDo App</h1>
      <form onSubmit={addTask}>
        <input
          value={inp}
          onChange={inpTask}
          placeholder="Write your tasks here..."
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.length === 0 ? (
        <div className="empty-state-message">
          <h2>📋</h2>
          <h2>You don't have tasks yet!</h2>
          <p>click "Add Task" to create your first todo.</p>
        </div>
      ) : (
        <div className="taskList">
          <div className="title">
            <div className="hash">#</div>
            <div className="task">Task</div>
            <div className="status">Status</div>
            <div className="action">Action</div>
          </div>
          {tasks.toReversed().map((task, id) => {
            return (
              <ul className="outputTask" key={id}>
                <li className="hash">{id + 1}</li>
                <li className="task outTask">{task}</li>
                <li className="status">Pending</li>
                <li className="action">
                  <div className="done">done</div>
                  <div className="close" onClick={() => closeBtn(id)}>
                    close
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      )}
      <div></div>
    </div>
  );
}

export default App;
