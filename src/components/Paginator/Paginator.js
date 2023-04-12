import { useState } from 'react';
import { PaginatorWrapper } from 'components/Paginator/Paginator.styled';
import ReactPaginate from 'react-paginate';

const Paginator = ({ data, itemsPerPage, children }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {children(currentItems)}
      <PaginatorWrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel=" < "
          renderOnZeroPageCount={null}
          activeLinkClassName={'active'}
          disabledClassName={'disabled'}
        />
      </PaginatorWrapper>
    </>
  );
};

export default Paginator;
