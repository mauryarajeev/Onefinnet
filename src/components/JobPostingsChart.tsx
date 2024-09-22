import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const JobPostingsChart: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ['', '', '', '', '', ''], // Empty labels for horizontal bars
    datasets: [
      // First real bar
      {
        label: 'Private Equity-Associate',
        data: [100, 0, 150, 0, 250, 0], // Real values alternate with zeros
        backgroundColor: [
          '#7C3AED', // First bar
          'transparent', // Invisible gap
          '#3B82F6', // Second bar
          'transparent', // Invisible gap
          '#06B6D4', // Third bar
          'transparent', // Invisible gap
        ],
        borderColor: ['#7C3AED', 'transparent', '#3B82F6', 'transparent', '#06B6D4', 'transparent'],
        borderWidth: 1,
        barThickness: 20, // Height of the bars
      },
    ],
  };

  // Options for the chart
  const options = {
    indexAxis: 'y' as const, // Horizontal bars
    scales: {
      x: {
        beginAtZero: true,
        max: 275, // Max value as per your image
        ticks: {
          stepSize: 50, // Step size for ticks on x-axis
        },
        grid: {
          display: false, // Hide the grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide the grid lines on y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
      title: {
        display: true,
        text: 'Your Job Postings',
        align: 'start' as const, // Align title to the left
        font: {
          size: 16,
          family: 'sans-serif',
          weight: 'bold',
        } as const, // Correcting the typing of font
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    barPercentage: 0.8, // Adjusts the size of the bars
    categoryPercentage: 0.6, // Adds spacing between the bars
  };

  return (
    <div className="w-full max-w-lg" style={{ height: '400px' }}>
      {/* Chart */}
      <div className="relative" style={{ height: '250px' }}>
        <Bar data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div className="mt-6 flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-purple-500 rounded"></div>
          <span className="text-sm text-gray-700">Private Equity-Associate</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-700">Private Equity-Associate</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-cyan-400 rounded"></div>
          <span className="text-sm text-gray-700">Private Equity-Associate</span>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsChart;
