import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroeById";
import svgMarvel from "../../assets/svg/marvel.svg";
import svgDc from "../../assets/svg/dc.svg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect } from "react/cjs/react.production.min";

export const HeroeScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const Hero = useMemo(() => getHeroById(heroId), [heroId])

 
  
  

  const imgUrl = new URL(`../../assets/${Hero.id}.jpg`, import.meta.url).href;
  const abas = Hero.first_appearance.search("#");
  const asaf = Hero.first_appearance.substr(abas, 5);

  /*<p>No existe</p>*/

  const HanddleRegress = () => {
    navigate(-1);
  };

  return (
    <div
      className={`
      w-11/12
      mx-auto
      h-max
      shadow-l
      rounded-md 
   
      ${Hero.publisher === "Marvel Comics" ? "bg-red-400" : "bg-blue-400"}
      `}
    >
      <div className=" w-10 h-10 mx-10 pt-5 my-2  ">
        <button
          type="button"
          onClick={HanddleRegress}
          className="bg-white rounded-xl text-4xl p-1 flex items-center justify-center"
        >
          <IoIosArrowRoundBack />
        </button>
      </div>
      <div className="w-4/5 mx-auto grid grid-cols-2  py-4 ">
        <div className="shadow-xl bg-gray-600 mx-auto p-1  animate__animated animate__fadeInLeft">
          <img width={500} src={imgUrl} alt="" />
        </div>

        <div className=" rounded-bl-md rounded-tl-md rounded-br-sm bg-white shadow-xl h-max     animate__animated animate__fadeInRight ">
          <div
            className={`${
              Hero.publisher === "Marvel Comics"
                ? "border-red-700"
                : "border-blue-700"
            } p-5 border-l-8   rounded-bl-md rounded-tl-md rounded-br-sm`}
          >
            {Hero.publisher === "Marvel Comics" ? (
              <img
                className="mb-5"
                width={100}
                height={100}
                src={svgMarvel}
                alt=""
              />
            ) : (
              <img
                className="mb-5"
                width={100}
                height={100}
                src={svgDc}
                alt=""
              />
            )}
            <h1
              className={`${
                Hero.publisher === "Marvel Comics"
                  ? "text-red-600"
                  : "text-blue-600"
              } text-5xl mb-1  text-center font-black  uppercase`}
            >
              {Hero.superhero}
            </h1>
            {Hero.publisher === "Marvel Comics" ? (
              <hr className="border border-b-4 border-red-500" />
            ) : (
              <hr className="border border-b-4 border-blue-500" />
            )}

            <div className="p-4 mt-10 ">
              <p
                className={`${
                  Hero.publisher === "Marvel Comics"
                    ? "text-red-600"
                    : "text-blue-600"
                } text-xl  font-bold  uppercase`}
              >
                Alter ego:{" "}
                <span className="ml-4 text-gray-600  capitalize font-semibold  ">
                  {Hero.alter_ego}
                </span>
              </p>
            </div>

            <div className="flex items-center px-4 mt-2 ">
              <p
                className={`${
                  Hero.publisher === "Marvel Comics"
                    ? "text-red-600"
                    : "text-blue-600"
                } mr-5 text-xl uppercase font-bold`}
              >
                Primera aparicion:
              </p>

              <p className="font-semibold text-gray-600 text-xl">
                {Hero.first_appearance.slice(0, abas)} {""}
                <span
                  className={`${
                    Hero.publisher === "Marvel Comics"
                      ? "text-red-600"
                      : "text-blue-600"
                  } font-black`}
                >
                  {asaf}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
