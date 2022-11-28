import React from 'react';
import { TableHead, TableRow, TableHeader } from './TableHeadStyled';

function PageTableHead() {
  return (
    <TableHead>
        <TableRow>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Algorithms</TableHeader>
            <TableHeader>Weekly Task</TableHeader>
            <TableHeader>Assessment Test</TableHeader>
            <TableHeader>Agile Test</TableHeader>
            <TableHeader>Cummulative score</TableHeader>
            <TableHeader>Overall rating</TableHeader>
            <TableHeader>Action</TableHeader>
           
        </TableRow>
    </TableHead>
  )
}

export default PageTableHead