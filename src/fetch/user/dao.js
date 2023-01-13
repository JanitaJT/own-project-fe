const postLogin = async (user) => {
  try {
    const request = new Request("http://localhost:3001/api/logIn/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await fetch(request);
    console.log("response", response);
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
};
export default dao;
