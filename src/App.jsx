import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  addTask,
  deleteTask,
  toggleTask,
  setFilter,
  setSearchText,
  toggleTheme,
} from "./features/tasks/tasksSlice";

function App() {
  const dispatch = useDispatch();

  const { list, filter, searchText, theme } = useSelector(
    (state) => state.tasks
  );

  const [newTask, setNewTask] = useState("");

  // 🔹 FETCH TASKS ON LOAD
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const isDark = theme === "dark";

  const bgColor = isDark ? "#0f172a" : "#f8fafc";
  const cardColor = isDark ? "#1e293b" : "#e2e8f0";
  const textColor = isDark ? "white" : "#0f172a";

  // 🔹 FILTER + SEARCH
  const visibleTasks = list.filter((task) => {
    if (filter === "pending" && task.completed) return false;
    if (filter === "completed" && !task.completed) return false;
    if (!task.title.toLowerCase().includes(searchText.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        color: textColor,
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>ZenTask</h1>

          <button
            onClick={() => dispatch(toggleTheme())}
            style={{
              background: cardColor,
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>

        {/* ADD TASK */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: cardColor,
              color: textColor,
            }}
          />

          <button
            onClick={() => {
              if (!newTask.trim()) return;

              dispatch(
                addTask({
                  title: newTask,
                  completed: false,
                })
              );

              setNewTask("");
            }}
            style={{
              background: "#3b82f6",
              border: "none",
              color: "white",
              padding: "14px 22px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Add Task
          </button>
        </div>

        {/* SEARCH */}
        <input
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            background: cardColor,
            color: textColor,
            marginBottom: "20px",
          }}
        />

        {/* FILTERS */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => dispatch(setFilter(f))}
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: filter === f ? "#3b82f6" : cardColor,
                color: filter === f ? "white" : textColor,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* TASK LIST */}
        {visibleTasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: cardColor,
              padding: "16px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* ✅ WORKING CHECKBOX */}
              <div
                onClick={() =>
                  dispatch(
                    toggleTask({
                      ...task,
                      completed: !task.completed,
                    })
                  )
                }
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: task.completed
                    ? "none"
                    : "2px solid #3b82f6",
                  background: task.completed ? "#22c55e" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {task.completed && "✔"}
              </div>

              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  color: task.completed ? "#86efac" : textColor,
                }}
              >
                {task.title}
              </span>
            </div>

            {/* DELETE */}
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              style={{
                background: "transparent",
                border: "none",
                color: "#f43f5e",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
