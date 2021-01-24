const url = "http://localhost:5000/api/school";

const addSchool = (data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

const getSchools = () => {
  return fetch(url,{method: "GET"})
    .then((response) => response.json())

    .catch((err) => {
      console.log(err) ;
    });
};

export { addSchool, getSchools };
