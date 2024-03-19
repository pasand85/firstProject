import React, { useState, useEffect } from "react";
import dataMovies from "../data/data-movies";
import './Stories.css'
import Table from "./Table";

export default function Stories () {
    const [searchMovieQuery, setSearchMovieQuery] = useState('');
    const [movies, setMovies] = useState(dataMovies)

    function search(data) {
        return data.filter(item => 
            item.title.toLowerCase().includes(searchMovieQuery) ||
            item.year.includes(searchMovieQuery)
            )
    }



    return <div className="tableContainer">

        <h4>Search for your favourite movie by title or year:</h4>

        <input type="text" 
            placeholder="Search by title/year..." 
            className="searchBox" 
            onChange={e => setSearchMovieQuery(e.target.value)}
        />



        <Table props={search(dataMovies)}/>

        
    </div>
}