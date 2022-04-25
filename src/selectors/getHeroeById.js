import { heroes } from "../db/DbHeroes";

export const getHeroById = (id = "") => {
  
  return  heroes.find((hero) => hero.id === id) ;
};
