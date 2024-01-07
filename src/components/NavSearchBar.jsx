/* eslint-disable react/prop-types */

import { useState } from "react";

// THIS SEARCH BAR MOVE ON SEPARATE COMPONENT BECAUSE WHEN searchTerm VALUE IS CHANGE THEN ONLY RENDER THIS COMPONENT NOT FULL PAGE 
const NavSearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    handleSearch(searchTerm)
    return (
        <label htmlFor="searchTerm" className="w-full max-w-xl relative">
            <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-primary absolute top-1/2 transform -translate-y-1/2 left-2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </span>
            <span className="sr-only">Search field</span>
            <input onChange={(e) => setSearchTerm(e.target.value)} type="search" name="searchTerm" id="searchTerm" placeholder="Search here..." className="pr-4 pl-9 py-1.5 md:py-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
        </label>
    );
};

export default NavSearchBar;