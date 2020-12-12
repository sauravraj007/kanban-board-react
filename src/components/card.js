import React from 'react';
import {useDrag} from 'react-dnd';

const Card = (props) =>  {
    const [{isDragging}, drag] = useDrag({
        item: {type: 'Card', task: props.task},
        begin: () => console.log('Dragging'),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }) 
    });
    return (
        <div ref={drag} className="card">
            <p><strong>{props.task.title}</strong></p>                        
        </div>
    )
}

export default Card;
