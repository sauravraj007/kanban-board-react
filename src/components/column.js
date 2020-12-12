import React, {useState} from 'react';
import {useDrop} from 'react-dnd';
import Card from './card';

const listOfTasks = [
    {
        id: 1,
        title: 'Write Documentation',
        status: 'New'
    },
    {
        id: 2,
        title: 'Fix Customer Bugs',
        status: 'In Progress'
    },
    {
        id: 3,
        title: 'Restart Server',
        status: 'New'
    }
];

const Column = (props) => {
    const [tasks, setTask] = useState(listOfTasks);
    const [{isOver, task}, drop] = useDrop({
        accept: 'Card',
        drop: () => {
            console.log(task);
            const items = tasks.filter(item => item.id !== task.task.id );
            task.task.status = props.name;
            items.push(task.task);
            console.log(items);
            setTask(items);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            task: monitor.getItem()
        }) 
    });
    const filteredTasks = tasks.filter(task => task.status === props.name);
    return (
        <div ref={drop} className="column">
            <h3 className="column-title">{props.name}</h3>
              {filteredTasks.map((task,id) => <Card key={id} task={task} />)}         
        </div>
    )
}

export default Column;
