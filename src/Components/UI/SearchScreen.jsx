// import { useMemo } from "react";
// import queryString from "query-string";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { getHeroByName } from "../../selectors/getHeroByName";
import { useForm } from "../hooks/UseForm";

const SearchScreen = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange, reset] = useForm({
    searchText: "",
  });
  const { searchText } = formValues;
  //  const filtrar =   useMemo(() => getHeroByName());
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText === "" || !isNaN(searchText)) {
      console.log("no es un string");
      return;
    }

    const resHero = getHeroByName(searchText);

    if (
      resHero == "" ||
      resHero == null ||
      resHero == undefined ||
      resHero.length == 0 ||
      !resHero
    ) {
      navigate(`/error`);

      return;
    } else {
      navigate(`/hero/${resHero}`);
    }
  };

  return (
    <form className="mx-auto w-80" onSubmit={handleSubmit}>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <GoSearch className="w-5 h-5 fill-gray-600" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-rose-500 focus:ring-rose-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};

export default SearchScreen;
