import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      <div></div>
    </div>
  );
}

export default EmployeeDashboard;
