import React, { useMemo } from "react";
import "./styled.css";
import { isSearchStringMatched } from "./helpers/isSearchStringMatched";

export const Table = ({ searchValue, data }) => {
  const columns = [
    "Строка",
    "Дата",
    "Число",
    "Флаг",
    "Строка2",
    "Дата2",
    "Число2",
    "Флаг2",
  ];

  const filtered = useMemo(() => {
    return data.filter((item) =>
      isSearchStringMatched(
        searchValue,
        item.string,
        item.date,
        item.number,
        item.flag,
        item.string2,
        item.date2,
        item.number2,
        item.flag2
      )
    );
  }, [data, searchValue]);

  console.log(filtered);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((item) => (
              <th key={item} className='column'>
                <span>{item}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            //index лучше не использовать
            <tr key={index}>
              <td>{item.string}</td>
              <td>{item.date.toDateString()}</td>
              <td>{item.number}</td>
              <td>
                <input type='checkbox' checked={item.flag} />
              </td>
              <td>{item.string2}</td>
              <td>{item.date2.toDateString()}</td>
              <td>{item.number2}</td>
              <td>
                <input type='checkbox' checked={item.flag2} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
