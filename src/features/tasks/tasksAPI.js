const BASE_URL = "https://zentask-api-9xyf.onrender.com/tasks";


export const fetchTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTaskAPI = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTaskAPI = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return id;
};

export const toggleTaskAPI = async (task) => {
  const res = await fetch(`${BASE_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};
