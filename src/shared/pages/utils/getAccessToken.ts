const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken;
};

export default getAccessToken;
