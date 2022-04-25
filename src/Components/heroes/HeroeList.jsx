import { useMemo } from "react";
import getHeroByPublisher from "../../selectors/getHeroByPublisher";
import Card from "./Card";
import { opciones } from "../../db/Dboptions";
import useSelect from "../hooks/InputSelect";
import ora from "../../selectors/getDescHeroes";
import { useLocation } from "react-router-dom";

const HeroeList = ({ opt1 }) => {
  const [opcionesSelect, Selector] = useSelect("option", opciones, ora);
  const heroes = useMemo(
    () => getHeroByPublisher(opcionesSelect || opt1),
    [opcionesSelect]
  );
  const location = useLocation();
  return (
    <>
      <div className="animate__animated animate__fadeIn ">
        <h1 className="text-indigo-500 text-3xl mb-10 text-center font-bold">
          Lista de Heroes
        </h1>
        <div className="w-4/5 mx-auto flex justify-end">
          {location.pathname === "/dc" || location.pathname === "/marvel" ? (
            ""
          ) : (
            <Selector />
          )}
        </div>
        <div className="mx-auto mt-15 border-2 w-4/5 ">
          <div className="w-full grid grid-cols-4 gap-12 mx-auto px-10 py-5 bg-gray-100">
            {(opcionesSelect === "ora" ? ora : heroes).map((hero) => {
              return <Card key={hero.id} hero={hero} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroeList;
