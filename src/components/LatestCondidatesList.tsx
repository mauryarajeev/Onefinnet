import React from 'react';
import JobPostingsChart from "../components/JobPostingsChart";

// Sample Data for Candidates
interface CandidateData {
  id: number;
  name: string;
  email: string;
  jobName: string;
  rating: number;
  appliedDate: string;
}

// Dummy Candidate Data
const candidates: CandidateData[] = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'email@example.com',
    jobName: 'Private Equity 2025 Full-Time Analyst',
    rating: 7.8,
    appliedDate: 'June 25, 2024',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'email@example.com',
    jobName: 'Private Equity 2025 Full-Time Analyst',
    rating: 7.8,
    appliedDate: 'June 25, 2024',
  },
  {
    id: 3,
    name: 'Jane Doe',
    email: 'email@example.com',
    jobName: 'Private Equity 2025 Full-Time Analyst',
    rating: 7.8,
    appliedDate: 'June 25, 2024',
  },
  {
    id: 4,
    name: 'Jane Doe',
    email: 'email@example.com',
    jobName: 'Private Equity 2025 Full-Time Analyst',
    rating: 7.8,
    appliedDate: 'June 25, 2024',
  },
  {
    id: 5,
    name: 'Jane Doe',
    email: 'email@example.com',
    jobName: 'Private Equity 2025 Full-Time Analyst',
    rating: 7.8,
    appliedDate: 'June 25, 2024',
  },
];

// Latest Candidates Component
const LatestCandidates: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Latest Candidates</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto text-sm"> {/* Adjust text size here */}
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Candidate Name</th>
              <th className="px-4 py-2">Job Name</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Applied Date</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-b">
                <td className="px-4 py-2">{candidate.id}</td>
                <td className="px-4 py-2">
                  <div>{candidate.name}</div>
                  <div className="text-xs text-gray-500">{candidate.email}</div> {/* Make email smaller */}
                </td>
                <td className="px-4 py-2">{candidate.jobName}</td>
                <td className="px-4 py-2 text-center">{candidate.rating}</td>
                <td className="px-4 py-2 text-center">{candidate.appliedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Layout Component
const MainDashboard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> {/* Adjust grid to 60-40 width */}
        {/* First Column for JobPostingsChart */}
        <div className="md:col-span-3"> {/* 60% width for candidates */}
          <div className="h-full p-6 bg-white rounded-lg shadow-md">
            <LatestCandidates />
          </div>
        </div>

        {/* Second Column for Sales and Candidates */}
        <div className="md:col-span-2"> {/* 40% width for chart */}
          <div className="h-full p-6 bg-white rounded-lg shadow-md flex justify-center items-center">
            <JobPostingsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
