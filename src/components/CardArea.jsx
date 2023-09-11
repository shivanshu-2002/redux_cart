import React from 'react'
import Card from './Card'
import './card_area.css'
const CardArea = (props) => {
    const data = props.data;
    return (
        <div className='cards'>
            { data.map((items, index) => {
                return (
                    <div key={index} className='main_card'>
                        <Card id = {items.id} tinydata={items} removefunc={props.removefunc}/>
                    </div>
                );
            })} 
        </div>
    )
}

export default CardArea