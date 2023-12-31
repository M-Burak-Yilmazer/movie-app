import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";



export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: 50,
        color:"blue"
      }}
    >
      
        <Pagination
        className="text-white"
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="secondary" 
          hideNextButton
          hidePrevButton
        />
     
    </div>
  );
}
