import './MovieCard.css'


export default function MovieCard (props) {

    return <div className="card">
        <img src={props.item.img} width={150} height={150}></img>
        <h3>{props.item.title} ({props.item.year}) </h3>
        <h5>({props.item.rating})</h5>
        <h5>Availability:{props.item.availability}</h5>
        <h6>Description: {props.item.description}</h6>
        <h6 className='moreInfo'><a href={props.item.info}>More info...</a></h6>


    </div>
    
}