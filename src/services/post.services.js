import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getPosts = async () => {
  const res = await instance.get("/post/post");
  return res.data;
};

const createUser = async (name, email, user, pass) => {
  const res = await instance.post("/user/new", {
    name,
    email,
    user,
    pass,
  });
  return res.data;
};

const loginUsuario = async (user, pass) => {
  const res = await instance.post("/user/login", {
    user,
    pass,
  });
  return res.data;
};

const subirPost = async (user, desc, photo) => {
  const res = await instance.post("/post/create", {
    user,
    pass,
  });
  return res.data;
};

export { getPosts, createUser, loginUsuario, subirPost };
