import "./Table.css";
import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table"
import { COLUMNS } from "./columns"
import MOCK from "./MOCK.json"
import {Checkbox} from "./Checkbox/Checkbox"



const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK, [])

    const tableInstance = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0,
            pageSize: 1000
        }
    }, useSortBy, usePagination, useRowSelect,(hooks)=>{
        hooks.visibleColumns.push((columns)=>{
            return[
                {
                    id:"selection",
                    Header:({getToggleAllRowsSelectedProps})=>(
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
        ),
                    Cell:({row})=>(
                        <Checkbox {...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns
            ]
        })
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, page, nextPage, previousPage, pageOptions, state, canNextPage, canPreviousPage, prepareRow, gotoPage, pageCount, setPageSize, selectedFlatRows } = tableInstance

    return (
        <div className="table-container p-3 pr-4 h-100">
            <div className="bg-light h-100">
                <div className="Table">
                    <div className="Table__table">
                        <table {...getTableProps()} style={{ width: "100%" }}>
                            <thead>
                                {
                                    headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th className="small bold" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                    {column.render('Header')}
                                                    <span>
                                                        {column.isSorted ? (column.isSortedDesc ? <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                            : <i className="fa fa-caret-up" aria-hidden="true"></i>) : ''}
                                                    </span>
                                                </th>
                                            ))}
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })}
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
