import React from "react";
import "./styled.css";

export const TableSearch = ({ setSearchValue }) => {
  return (
    <div>
      <input onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
};
