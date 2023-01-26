const postLogin = async (user) => {
  try {
    const request = new Request("http://localhost:3001/api/login/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await fetch(request);
    // console.log("response", response);
    if (response.status === 400) {
      return 400;
    }
    if (response.status === 500) {
      return 500;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log("error", error);
    return "error" + error;
  }
};

const getUserTasks = async (jwt) => {
  try {
    const request = new Request("http://localhost:3001/api/task/userTasks", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    const response = await fetch(request);
    // console.log("response", response);
    if (response.status === 400) {
      return 400;
    }
    if (response.status === 500) {
      return 500;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log("error", error);
    return "error" + error;
  }
};

const postNewTask = async (jwt, newTask) => {
  try {
    const request = new Request("http://localhost:3001/api/task/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(newTask),
    });
    const response = await fetch(request);
    // console.log("response", response);
    if (response.status === 400) {
      return 400;
    }

    if (response.status === 500) {
      return 500;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log("error", error);
    return "error" + error;
  }
};

const dao = {
  postLogin,
  getUserTasks,
  postNewTask,
};
export default dao;
