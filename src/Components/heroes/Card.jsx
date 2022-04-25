import svgMarvel from "../../assets/svg/marvel.svg";
import svgDc from "../../assets/svg/dc.svg";
import { Link } from "react-router-dom";

const Card = ({ hero }) => {

  const imgUrl = new URL(`../../assets/${hero.id}.jpg`, import.meta.url).href;
  return (
    <div className="bg-white shadow-md  max-w-screen-sm rounded-md hover:opacity-70 transition-all">
      <Link to={`/hero/${hero.id}`}>
        <img
          className="bg-cover w-full cursor-pointer "
          width={300}
          height={300}
          src={imgUrl}
          alt={hero.superhero}
        />
      </Link>

      <div className="px-3 py-3">
        <h1 className="text-center text-xl  font-bold text-gray-600">
          {hero.superhero}
        </h1>
        <h2 className="text-center text-sm mb-4 font-semibold text-gray-500">
          {hero.alter_ego}
        </h2>

        <div className="flex items-center justify-between  mt-5">
          {hero.publisher === "DC Comics" ? (
            <img width={55} height={60} src={svgDc} alt="" />
          ) : (
            <img width={60} height={60} src={svgMarvel} alt="" />
          )}

          <p className=" text-lg text-indigo-600 font-semibold text-right">
            {hero.publisher}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
