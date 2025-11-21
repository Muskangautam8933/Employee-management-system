import React from "react";

const CompleteTask = () => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center px-3 py-1 text-sm rounded">
        <h3 className="bg-red-600  rounded px-2 py-1">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
        accusamus ea corrupti blanditiis impedit modi, debitis ex maiores non
        quasi.
      </p>
      <div className="mt-2">
        <button className="w-full bg-green-500">Completted</button>
      </div>
    </div>
  );
};

export default CompleteTask;
