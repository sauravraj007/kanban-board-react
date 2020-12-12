import './App.css';
import Column from './components/column';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';


const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div><h1>Kanband Board</h1></div>
        <Column name='New' />
        <Column name='In Progress' />
        <Column name='In Review' />
        <Column name='Completed' />
      </div>
    </DndProvider>
  );
}

export default App;
