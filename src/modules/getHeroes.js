import { getData} from "./heplers";

import renderHeroes from "./renderHeroes";
const getHeroes = () => {
 
  getData("./dbHeroes.json").then((heroes) => renderHeroes(heroes));
   
};
export default getHeroes;
