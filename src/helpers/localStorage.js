const getToken = () => {
  const tokencito = JSON.parse(localStorage.getItem("token"));
  return tokencito;
};

export { getToken };
