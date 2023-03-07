const getData = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("Данные не получены " + error));
};
const searchFilter = (heroes, value) => {
  return heroes.filter((heroesItem) => {
    return heroesItem.name.toLowerCase().includes(value.toLowerCase());
  });
};
const filmFilter = (heroes, value) => {
  return heroes.filter((heroesItem) => {
    for (let key in heroesItem.movies) {
      if (heroesItem.movies[key].trim() === value) {
        return heroesItem.movies[key].trim() === value;
      }
    }
  });
};

export { getData, searchFilter, filmFilter };
