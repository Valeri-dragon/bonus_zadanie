import { getData, searchFilter, filmFilter } from "./heplers";
import renderHeroes from "./renderHeroes";
const search = () => {
  const controlWrapper = document.querySelector(".control-wrapper");
  const searchInput = document.querySelector(".search-wrapper_input");
  const catalogModal = document.querySelector(".catalog");
const p = document.createElement("p");
  let isOpen = false;
  const openCatalog=()=>{
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "flex";
    } else {
      catalogModal.style.display = "";
    }
  }
  const getFilter=(item)=>{
    searchInput.value = "";
    const text = item.textContent;

p.textContent=''
    getData("./dbHeroes.json").then((heroes) =>
      renderHeroes(filmFilter(heroes, text))
    );
    p.textContent = `Все герои из фильма ${text}`;
    controlWrapper.after(p)
  }
  
  const valueInput = () => {
    
    const eventValueInput = searchInput.value;
p.textContent=''
    getData("./dbHeroes.json").then((heroes) =>
      renderHeroes(searchFilter(heroes, eventValueInput))
    );
  
    p.textContent = `Результат поиска по вашему запросу: ${eventValueInput}`;
    controlWrapper.after(p);
  };
  searchInput.addEventListener("input", valueInput);
  
  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      valueInput();
    }
  });
  controlWrapper.addEventListener("click", (e)=>{
    
    if(e.target.closest(".search-btn")){

      valueInput()
    }else if (e.target.closest(".catalog-button")) {
      openCatalog();
   if(e.target.closest('li')){
            getFilter(e.target)
            
    }
    } 
  })
};
export default search;
