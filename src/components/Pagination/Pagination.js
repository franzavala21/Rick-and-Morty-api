import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, pageNumber, setPageNumber }) => {



  return (
    <ReactPaginate nextLabel="Next" previousLabel="Prev"  className='pagination justify-content-center gap-4 my-4' nextClassName='btn btn-primary' previousClassName="btn btn-primary " pageCount={info.pages}  pageClassName='page-item' pageLinkClassName='page-Link' activeLinkClassName='desactive' onPageChange={(data)=> setPageNumber(data.selected + 1)}/>
  )
}

export default Pagination