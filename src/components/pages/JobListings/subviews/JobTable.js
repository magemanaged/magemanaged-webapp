import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faCheck,
  faBell,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Merlin } from "../../../../auth/merlin/api";
import { apiConfig } from "../../../../auth/merlin/config";
import "./JobTable.css";

export function Positions(props) {
  const { callMerlin } = Merlin();
  const [positions, setPositions] = useState([]);

  //Get positions and save to array in state hook
  const fetchPositions = async () => {
    return callMerlin(apiConfig.joburi, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setPositions(response));
  };

  //Setup memo for positions data. This is data pulled from Merlin API
  const positionsData = useMemo(() => [...positions], [positions]);

  //Setup for column structure
  const positionsColumns = useMemo(
    () => [
      {
        Header: "Position Name",
        accessor: "positionName",
      },
      {
        Header: "Expected Start Date",
        accessor: "startDate",
        Cell: (v) => (
          <>
            {new Date(v.cell.value).toLocaleDateString("en-US", {
              timeZone: "UTC",
            })}
          </>
        ),
      },
      {
        Header: "Total Candidates",
        accessor: "candidates",
        Cell: (v) => <>{v.cell.value.length}</>,
      },
      {
        Header: "Last Update On",
        accessor: "editHistory[0].editDate",
        Cell: (v) => (
          <>
            {new Date(v.cell.value).toLocaleDateString("en-US", {
              timeZone: "UTC",
            })}
          </>
        ),
      },
    ],
    [positions]
  );

  const tableHooks = (hooks) => [
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "",
        Cell: ({ row }) => (
          <div className="icons-container">
            <div className="icon-container edit-icon-container">
              <FontAwesomeIcon className="icon fa-faPencil" icon={faPencil} />
            </div>
            <div className="icon-container delete-icon-container">
              <FontAwesomeIcon
                className="icon delete-icon fa-faTrash"
                icon={faTrash}
              />
            </div>
            <div className="icon-container notify-icon-container">
              <FontAwesomeIcon
                className="icon delete-icon fa-faBell"
                icon={faBell}
              />
            </div>
          </div>
        ),
      },
    ]),
  ];

  const tableInstance = useTable(
    {
      columns: positionsColumns,
      data: positionsData,
    },
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchPositions();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <table id="positionsTable" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className={isEven(idx) ? "alt-row" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
