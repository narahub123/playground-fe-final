const fetchIPAPI = async () => {
  try {
    const response = await fetch(`https://api.ipify.org?format=json`);
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchIPAPI;
