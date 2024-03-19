import React from "react";
import dataMovies from "../data/data-movies";
import Table2 from "./Table2";
import './SortBy.css'

export default function SortBy () {

    const [sortMovies, setSortMovies] = React.useState(dataMovies)

    return <div>

        <h2>You can sort the movie list based on the 'movie title' or the 'rating'</h2>
        <Table2 />

    </div>
}