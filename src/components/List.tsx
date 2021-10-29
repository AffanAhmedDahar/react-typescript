import React from 'react'
import {iState as iProps} from '../App'



const List : React.FC<iProps> = ({people}) => {

    const renderList= () : JSX.Element[] => {
        return (
        people.map(data => (
            <li className="List">
            <div className="List-header">
                <img className="List-img" src={data.url}/>
                <h2>{data.name}</h2>
            </div>
            <p>{data.age} years old</p>
            <p className="List-note">{data.note}</p>
        </li>
        )))
    }
    return (
        <ul >
            {renderList()}
        </ul>
    )
}

export default List
