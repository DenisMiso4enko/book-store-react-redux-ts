import React from "react";
import Pagination from "@mui/material/Pagination";
interface IPaginationProps {
  pageCount: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
import "./PaginationEl.css";

const PaginationEl = ({ pageCount, page, handleChange }: IPaginationProps) => {
  return (
    <div className="pagination">
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default PaginationEl;
