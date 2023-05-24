import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getPosts = async () => {
  const res = await instance.get("/post");
  return res.data;
};

const createUser = async (name, email, user, pass) => {
  const res = await instance.post('/user', {
    name,
    email,
    user,
    pass,
  });
  return res.data;
}
export { getPosts, createUser };
