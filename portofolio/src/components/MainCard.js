import React, { useState } from 'react';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './Header';


 function MainHomepage() {
    const [currentPage, setCurrentPage] = useState("Portfolio");

    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        };
    };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            
            <Footer />

        </div>
    );
}

export default MainHomepage;