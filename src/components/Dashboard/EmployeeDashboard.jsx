import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskListNumber />
        <TaskList />
      <div></div>
    </div>
  );
}

export default EmployeeDashboard;
