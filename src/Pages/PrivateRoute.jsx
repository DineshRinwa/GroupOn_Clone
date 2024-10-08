

export const PrivateRoute = ({ children }) => {
  const Data = JSON.parse(localStorage.getItem("sign"));

  if (!Data) {
    alert("Login Now!");
    return;
  }

  return children;
};
