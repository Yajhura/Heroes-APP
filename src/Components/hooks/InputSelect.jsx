import React, { useState } from "react";
const useSelect = (forlabl, arr, opt) => {
  const [state, setState] = useState("");
  const Selector = () => {
    return (
      <>
        <select
          className="w-96 rounded-md p-2 text-gray-600 text-lg overflow-y-scroll  bg-white border shadow-md focus:border-indigo-500  focus:text-indigo-500 mb-5 "
          value={state}
          onChange={(e) => setState(e.target.value)}
          id={forlabl}
        >
          <option disabled className="" value="">
            ----Seleccione-----
          </option>
          <option value=""> Todos los Heroes</option>
          {opt && (
            <option className="" value={"ora"}>
              A-Z
            </option>
          )}
          {arr.map((val) => (
            <option className="" key={val.id} value={val.id}>
              {val.nombre}
            </option>
          ))}
        </select>
      </>
    );
  };


  return [state, Selector];
};

export default useSelect;
