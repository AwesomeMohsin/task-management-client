import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    // Update the server with the new task order
    await axios.post('http://localhost:5000/tasks', { tasks: updatedTasks });
  };

  return (
    <div className="App">
      <h1>Drag and Drop Board</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks" direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{ display: 'flex' }}>
              {tasks.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '8px',
                        margin: '8px',
                        background: '#fff',
                      }}
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
