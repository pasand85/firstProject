import React from "react"
// import Characters from "./Characters"
import dataMovies from "../data/data-movies"
import NavBar from "./NavBar"
// import Card from "./Card"
import MovieCard from "./MovieCard"
// import './styles.css'
import './Main.css'



export default function Main () {

 

    const [data, setData] = React.useState(dataMovies)


    const movieElement = data.map(item => {
        return(
            <MovieCard
                key={item.id}
                item={item}
                />
        )
    })

    function showYes () {
        const yesData = dataMovies.filter(data => data.availability === 'yes')
        setData(yesData)
    }
    function showNo () {
        const noData = dataMovies.filter(data => data.availability === 'no')
        setData(noData)
    }
    function showAll () {
        const allData = dataMovies
        setData(allData)
    }
 


    


    return <div className="main">



        <button onClick={showYes} className="yesNoBtn"> Show Availables</button>
        <button onClick={showNo} className="yesNoBtn"> Show non-available</button>
        <button onClick={showAll} className="yesNoBtn"> Show all</button>
        <div className="allMovies">
            {movieElement}
        </div>
    </div>
}