import React, { useState } from 'react'
import {iState as props} from '../App'

interface iProps {
    people : props['people'],
    setPeople :  React.Dispatch<React.SetStateAction<props['people']>>
}
const AddToList : React.FC <iProps>= ({people , setPeople}) => {

    const [input , setInput] = useState({
        name : '',
        age : '',
        img : '',
        note : ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput({ 
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = () => {
        console.log('hello')
        if(!input.name || !input.age ){
            return
        }
        const data = {
            name : input.name,
            url : input.img,
            age : Number(input.age),
            note : input.note,
        }
        setPeople([
            ...people,
            data 
        ])
        setInput({
            name : '',
            age : '',
            img : '',
            note : ''
        })
    }
    return (
        <div className="AddToList">
        <input 
            type="text"
            onChange={handleChange}
            className="AddToList-input"
            name="name"
            value ={input.name}
            placeholder="Name"
        />
        <input 
            type="text"
            onChange={handleChange}
            className="AddToList-input"
            name="age"
            value ={input.age}
            placeholder="Age"
        />
        <input 
            type="text"
            onChange={handleChange}
            className="AddToList-input"
            name="img"
            value ={input.img}
            placeholder="Image Url"
        />
        <textarea
            onChange={handleChange}
            className="AddToList-input"
            name="note"
            value ={input.note}
            placeholder="Note"
        />
        <button
             onClick={handleClick}
            className="AddToList-btn"
        >
            Add to List
        </button>
    </div>
    )
}

export default AddToList
