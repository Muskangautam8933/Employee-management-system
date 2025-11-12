import React from 'react';

const TaskContext = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}

export default TaskContext;
