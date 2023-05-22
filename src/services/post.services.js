import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getPosts = async () => {
  const res = await instance.get("/post");
  return res.data;
};

export { getPosts };
