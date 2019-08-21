import ReactPaginate from "react-paginate";
import React from "react";

export const Pagination = ({data,perPage, onPageChange}) => {

  return (<ReactPaginate
    pageCount={Array.isArray(data) && (Math.ceil(data.length / perPage))}
    previousLabel={"Previous"}
    nextLabel={"Next"}

    containerClassName={'pagination'}
    pageClassName={'page-item'}
    pageLinkClassName={"page-link"}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={"page-link"}
    nextLinkClassName={'page-link'}

    activeClassName={'active'}
    onPageChange={data => {
      let selected = data.selected;
      let offset = Math.ceil(selected * perPage);
      onPageChange(offset);
    }}
  />)
};

export default Pagination;
