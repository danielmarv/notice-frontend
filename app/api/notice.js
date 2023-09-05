
export const getNoticesData = async () => {
  const apiUrl = "http://localhost:1337/api/notices?populate=*";
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data.data);
  return data.data;
};

  