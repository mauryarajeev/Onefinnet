import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the props with TypeScript
interface DashboardReviewCardProps {
  totalApplicants: number;
  reviewedPercentage: number;
}

const DashboardReviewCard: React.FC<DashboardReviewCardProps> = ({ reviewedPercentage }) => {
  // Calculate the not reviewed percentage
  const notReviewedPercentage = 100 - reviewedPercentage;

  // Data for the doughnut chart
  const data = {
    labels: ['Reviewed', 'Not Reviewed'],
    datasets: [
      {
        data: [reviewedPercentage, notReviewedPercentage],
        backgroundColor: ['#6366F1', '#E5E7EB'], // Indigo for reviewed, Gray for not reviewed
        borderWidth: 0, // Removes border around the chart
      },
    ],
  };

  // Chart options
  const options = {
    cutout: '80%', // Creates the doughnut effect by cutting out the center
    plugins: {
      legend: {
        display: false, // Hide the chart legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between">
      {/* Doughnut Chart */}
      <div className="w-32 h-32 sm:w-44 sm:h-44">
        <Doughnut data={data} options={options} />
      </div>

      {/* Text Info Section */}
      <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
        <p className="text-base sm:text-lg font-medium text-gray-600">Total Applicants</p>
        <div className="flex justify-center sm:justify-start items-center mt-4">
          {/* Visual indicator for "Not Reviewed" */}
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mr-2"></div>
          <p className="text-xs sm:text-sm text-gray-600">Not Reviewed</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardReviewCard;
