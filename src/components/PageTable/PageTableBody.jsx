import React from 'react'
import { TableBody } from './PageTableBodyStyles'


function PageTableBody(props) {
  return (
    <>
        <TableBody>{props.children}</TableBody>
        
    </>
  )
}

export default PageTableBody