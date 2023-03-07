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
const genderFilter = (heroes, value) => {
  return heroes.filter((heroesItem) => {
    if (heroesItem.gender.toLowerCase() === value) {
      return heroesItem.gender.toLowerCase() === value;
    }
  });
};
const debounce = (callee, timeoutMs = 1000) => {
  return (...args) => {
    args.lastCall = Date.now();
    let previousCall = args.lastCall;
    if (previousCall && args.lastCall - previousCall <= timeoutMs) {
      clearTimeout(args.lastCallTimer);
    }
    args.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
};

export { getData, searchFilter, filmFilter, genderFilter, debounce };
