import React from "react";
import { RowTableHead } from "./TableHeadStyled";
import { TableRow, TableData } from "./PageTableRowStyled";
import optionIcon from "../../Assets/Images/options-icon.svg";

function PageTableRow(props) {

  console.log(props.score);

  return (
    <>
      <TableRow>
        <div className="data">
          <span className="name-abbreviation">EO</span>
          <td> Emmanuel Oladipupo </td>
        </div>
        
          <TableData>{props.score}</TableData>
          <TableData> {props.score}</TableData>
          <TableData> {props.score}</TableData>
          <TableData> {props.score}</TableData>
          <TableData> {props.score}</TableData>
          <TableData className="overall-rating">{props.score}</TableData>
        
       
          <img className="row-icon" src={optionIcon} />
        
      </TableRow>
    </>
  );
}

export default PageTableRow;
