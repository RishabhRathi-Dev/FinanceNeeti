import React from 'react';
import PieChartImage from '../assets/chart.png'; // Replace with your pie chart image path

const ExpenseOptimizer = () => {
  
  const lineStyle = {
    borderTop: "1px solid navy",
    margin: 0,
  };

  return (
    <>
    <div className="flex justify-between items-center p-10 dark:bg-gray-900 dark:text-white">
      <div className="max-w-[50%]">
        <h1 className="text-5xl font-bold mb-4">
          Want to optimize your expense and saving?
        </h1>
        <p className="text-lg mb-6">
          Click on <span className="bg-navbg p-1 rounded dark:text-black">Optimize Now!</span>
        </p>
        <button className="bg-navyblue text-white border border-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black hover:border-blue-500">
          Optimize
        </button>
        <p className="mt-8">
        This Optimizer is a powerful tool designed to help individuals manage and maximize their financial resources efficiently. By leveraging advanced algorithms and user-input data, it provides tailored suggestions and strategies to optimize expenses and enhance savings.
        </p>
      </div>
      <div className="max-w-[50%]">
        <img src={PieChartImage} alt="Pie Chart" className="w-full h-auto" />
      </div>
    </div>
    <hr style={lineStyle} />
    </>
  );
};

export default ExpenseOptimizer;
