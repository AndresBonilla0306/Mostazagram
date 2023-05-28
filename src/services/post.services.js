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

const subirPost = async (photo, desc, user) => {
  console.log(photo);
  console.log(desc);
  console.log(user);
  const res = await instance.post("/post/create", {
    photo,
    desc,
    user,
  });
  return res.data;
};

export { getPosts, createUser, loginUsuario, subirPost };
