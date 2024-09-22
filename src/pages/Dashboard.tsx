import { MdWork, MdPerson, MdCreditCard } from 'react-icons/md';
import DashboardReviewCard from "../components/DashboardReviewCard";
import LatestCondidatesList from "../components/LatestCondidatesList";

const Dashboard = () => {
  const totalApplicants = 1500;
  const reviewedPercentage = 30; // Percentage of reviewed applicants

  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans">
      {/* Top Section with Sky Blue Background */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-blue-100"></div> {/* Sky blue background */}
        <div className="relative p-4 sm:p-10">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold">Welcome back, Lewis</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-md leading-relaxed">
              <span className="font-semibold text-gray-800">Here's what's changed in your talent hunt journey!</span><br />
              You can <span className="text-blue-600 font-semibold">evaluate candidates</span>, attract <span className="text-green-600 font-semibold">job seekers</span>, and redefine<br />
              the <span className="text-purple-600 font-semibold">candidate experience</span> for a new era of your workspace from here.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* First Box: Total Jobs and Applicants */}
            <div className="flex flex-col gap-4">
              {/* First Box: Total Jobs & Applicants */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-white shadow rounded-lg border border-gray-200">
                {/* Total Jobs */}
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mr-4 p-2">
                    <MdWork className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                    <p className="text-sm text-gray-600">Total Jobs</p>
                  </div>
                </div>
                {/* Applicants */}
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 bg-yellow-100 rounded-full mr-4 p-2">
                    <MdPerson className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1500</p>
                    <p className="text-sm text-gray-600">Applicants</p>
                  </div>
                </div>
              </div>

              {/* Second Box: AI Credits */}
              <div className="flex items-center justify-between p-6 sm:p-8 bg-white shadow rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 bg-purple-100 rounded-full mr-4 p-2">
                    <MdCreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">20,000</p>
                    <p className="text-sm text-gray-600">AI credits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Box: Circular Progress */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
              <DashboardReviewCard
                totalApplicants={totalApplicants}
                reviewedPercentage={reviewedPercentage}
              />
            </div>

            {/* Third Box: Private Job Board */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col" style={{ height: '250px' }}>
              <div className="flex-grow h-3/5 w-full">
                <img src="https://cdn.pixabay.com/photo/2017/12/27/09/31/work-3042267_1280.jpg" alt="Illustration" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow h-2/5 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-gray-900">Private Job Board</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Your private job postings will appear here, accessible to the public via a company-specific URL.
                </p>
              </div>
            </div>
          </div>
          <LatestCondidatesList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
