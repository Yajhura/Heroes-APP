import { heroes } from "../db/DbHeroes";

export const getHeroByName = (name = "") => {
  if (name.length === 0) {
    return [];
  }

  name = name.toLowerCase();
  const ResultH = heroes.find((hero) =>
    hero.superhero.toLowerCase().includes(name)
  );

  if (ResultH === undefined) {
    return "";
  }

  const { id } = ResultH;

  return id? id : 'dc-robin';
};
