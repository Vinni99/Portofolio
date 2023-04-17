import React from "react";
import Navigation from "./Navigation";

const styles = {
    header: {
        background: "black",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "65px",
        margin: "10px",
        border: "solid 1px white",
        borderRadius: "10px",
        backgroundColor: "black",
        boxShadow: "5px 5px 5px 5px black"
    },
  };

function Header( { currentPage, handlePageChange }) {
    return (
        <header style={styles.header}>
            <h1>Vinicius Teixeira</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}

export default Header;