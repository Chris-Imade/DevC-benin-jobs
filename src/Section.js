import React from 'react';
import './Section.css';
import SearchIcon from '@material-ui/icons/Search';

function Section() {
    return (
        <div className="section">
            <div className="section1__top">
                <p>Search For Jobs And Gigs</p>
            </div>

            <div className="section1__middle">
                <form>
                <SearchIcon />
                    <input placeholder="Search For Jobs And Gigs" />
                </form>
            </div>

            <div className="section1__bottom"></div>

        </div>
    )
}

export default Section
