import React , { useState } from "react";
import './Table.css'
import dataMovies from "../data/data-movies";

export default function Table2 () {


     const [movies, setMovies] = useState(dataMovies);

      const [sortBy, setSortBy] = useState('title'); // Default sort by title
      const [sortOrder, setSortOrder] = useState('asc'); // Default sort order is ascending
    
      const handleSort = (key) => {
        if (sortBy === key) {
          // If already sorted by the same key, reverse the order
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          // Otherwise, set new sort key and order to ascending
          setSortBy(key);
          setSortOrder('asc');
        }
      };
    
      const sortedMovies = [...movies].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
    
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('title')} className="sortHeadings">Movie Title</th>
                <th>Released</th>
                <th onClick={() => handleSort('rating')} className="sortHeadings">Rating</th>
                <th>Availability</th>
                <th>Caption</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {sortedMovies.map((movie) => (
                <tr key={movie.id}>
                    <td className="tableItems">{movie.title}</td>
                    <td className="tableItems">{movie.year}</td>
                    <td className="tableItems">{movie.rating}</td>
                    <td className="tableItems">{movie.availability}</td>
                    <td className="tableItems"><img src={movie.img} width={70} height={70} alt="" /></td>
                    <td className="tableItems">{movie.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };



