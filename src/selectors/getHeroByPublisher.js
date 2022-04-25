import { heroes } from "../db/DbHeroes";

const getHeroByPublisher = (publisher) => {
  const validPublisher = ["Marvel Comics", "DC Comics"];
  return validPublisher.includes(publisher)
    ? heroes.filter((heroe) => heroe.publisher === publisher)
    : heroes;
};
export default getHeroByPublisher;
