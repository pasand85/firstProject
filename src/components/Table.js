import React from "react";
import './Table.css'

export default function Table ({props}) {


    return(
        <table >
            <tbody >
                <tr >
                    <th>Movie Title</th>
                    <th>Released</th>
                    <th>Rating</th>
                    <th>Availability</th>
                    <th>Caption</th>
                    <th>Description</th>
                </tr>
                {props.map(item => (
                    <tr key={item.id} >
                        <td className="tableItems">{item.title}</td>
                        <td className="tableItems">{item.year}</td>
                        <td className="tableItems">{item.rating}</td>
                        <td className="tableItems">{item.availability}</td>
                        <td className="tableItems"><img src={item.img} width={70} height={70} alt="" /></td>
                        <td className="tableItems">{item.description}</td>
                    </tr>
                ))}





            </tbody>
        </table>
    )
}