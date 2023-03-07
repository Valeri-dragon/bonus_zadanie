import {
  getData,
  searchFilter,
  filmFilter,
  genderFilter,
  debounce,
} from "./heplers";
import renderHeroes from "./renderHeroes";
const search = () => {
  const controlWrapper = document.querySelector(".control-wrapper");
  const searchInput = document.querySelector(".search-wrapper_input");
  const catalogModal = document.querySelector(".catalog");
  const selectGender = document.querySelector(".gender");
  const p = document.createElement("p");
  let isOpen = false;
  const openCatalog = () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "flex";
    } else {
      catalogModal.style.display = "";
    }
  };
  const getFilter = (item) => {
    searchInput.value = "";
    const text = item.textContent;

    p.textContent = "";
    getData("./dbHeroes.json").then((heroes) =>
      renderHeroes(filmFilter(heroes, text))
    );
    p.textContent = `Все герои из фильма ${text}`;
    controlWrapper.after(p);
  };

  const valueInput = () => {
    const eventValueInput = searchInput.value;
    p.textContent = "";
    getData("./dbHeroes.json").then((heroes) =>
      renderHeroes(searchFilter(heroes, eventValueInput))
    );

    p.textContent = `Результат поиска по вашему запросу: ${eventValueInput}`;
    controlWrapper.after(p);
  };
  const debouncedHandle = debounce(valueInput, 3000);
  searchInput.addEventListener("input", debouncedHandle);

  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      valueInput();
    }
  });
  selectGender.addEventListener("change", (e) => {
    p.textContent = "";
    const selectName =
      selectGender.options[selectGender.selectedIndex].textContent;

    getData("./dbHeroes.json").then((heroes) =>
      renderHeroes(genderFilter(heroes, selectName))
    );

    p.textContent = `Выведены карточки героев пола ${selectName}`;
    controlWrapper.after(p);
  });
  controlWrapper.addEventListener("click", (e) => {
    if (e.target.closest(".search-btn")) {
      valueInput();
    } else if (e.target.closest(".catalog-button")) {
      openCatalog();
      if (e.target.closest("li")) {
        getFilter(e.target);
      }
    }
  });
};
export default search;
