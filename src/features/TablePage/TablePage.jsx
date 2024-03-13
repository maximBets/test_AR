import React, { useState } from "react";
import "./styled.css";
import { Table } from "./Table";
import { TableSearch } from "./TableSearch";

export const TablePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const data = [
    {
      string: "Значение строки 1",
      date: new Date("2021-01-01"),
      number: 42,
      flag: true,
      string2: "Значение строки 2",
      date2: new Date("2021-02-01"),
      number2: 57,
      flag2: false,
    },
    {
      string: "Значение строки 3",
      date: new Date("2021-01-04"),
      number: 67,
      flag: true,
      string2: "Значение строки 4",
      date2: new Date("2021-02-04"),
      number2: 45,
      flag2: false,
    },
  ];

  return (
    <div>
      <TableSearch setSearchValue={setSearchValue} />
      <Table searchValue={searchValue} data={data} />
    </div>
  );
};
