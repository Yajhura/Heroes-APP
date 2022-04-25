import { heroes } from "../db/DbHeroes";
const newOra = heroes.slice(0);
const ora = newOra.sort((v1, v2) => {
  if (v1.superhero < v2.superhero) {
    return -1;
  } else if (v1.superhero > v2.superhero) {
    return 1;
  } else {
    return 0;
  }
});

export default ora;
