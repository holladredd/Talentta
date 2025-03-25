import { useState } from "react";

function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const stats = [
    { name: "Active Jobs", value: 12 },
    { name: "Total Applications", value: 147 },
    { name: "Interviews Scheduled", value: 8 },
    { name: "Talent Pool", value: 350 },
  ];

  const recentApplications = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Frontend Developer",
      applied: "2 days ago",
      status: "New",
      match: "95%",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 2,
      name: "Michael Adebayo",
      position: "UX Designer",
      applied: "3 days ago",
      status: "Reviewed",
      match: "88%",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Amina Kimani",
      position: "Product Manager",
      applied: "1 week ago",
      status: "Interview",
      match: "92%",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const activeJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      applications: 24,
      posted: "2 weeks ago",
      expires: "2 weeks left",
    },
    {
      id: 2,
      title: "UX Designer",
      location: "Lagos, Nigeria",
      type: "Full-time",
      applications: 18,
      posted: "1 week ago",
      expires: "3 weeks left",
    },
    {
      id: 3,
      title: "Product Manager",
      location: "Remote",
      type: "Contract",
      applications: 12,
      posted: "3 days ago",
      expires: "27 days left",
    },
  ];

  return (
    <div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-dark">
                Recruiter Dashboard
              </h2>
              <p className="text-gray-600">Global Innovations Inc.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="btn-secondary">Post a New Job</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "dashboard"
                  ? "border-b-2 border-secondary text-secondary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "jobs"
                  ? "border-b-2 border-secondary text-secondary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              My Jobs
            </button>
            <button
              onClick={() => setActiveTab("candidates")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "candidates"
                  ? "border-b-2 border-secondary text-secondary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Candidates
            </button>
            <button
              onClick={() => setActiveTab("talent")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "talent"
                  ? "border-b-2 border-secondary text-secondary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Talent Search
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "settings"
                  ? "border-b-2 border-secondary text-secondary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <div className="text-sm font-medium text-gray-500">
                    {stat.name}
                  </div>
                  <div className="mt-2 text-3xl font-bold text-dark">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-dark">
                  Recent Applications
                </h3>
                <p className="text-gray-600 mt-1">
                  Review and manage recent applicants
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {recentApplications.map((application) => (
                  <div key={application.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={application.image}
                        alt={application.name}
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-dark">
                              {application.name}
                            </h4>
                            <p className="text-gray-600">
                              {application.position}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">
                            Applied {application.applied}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                application.status === "New"
                                  ? "bg-blue-100 text-blue-800"
                                  : application.status === "Reviewed"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {application.status}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                              Match:{" "}
                              <span className="text-green-600 font-medium">
                                {application.match}
                              </span>
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                              View Profile
                            </button>
                            <button className="btn-secondary text-sm px-3 py-1">
                              Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-200">
                <button className="text-secondary font-medium hover:text-orange-600">
                  View All Applications →
                </button>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-dark">
                  Active Job Listings
                </h3>
                <p className="text-gray-600 mt-1">
                  Manage your current job postings
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Job Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Applications
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Posted
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Expires
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activeJobs.map((job) => (
                      <tr key={job.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-dark">
                            {job.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {job.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {job.type}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {job.applications}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {job.posted}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {job.expires}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-secondary hover:text-orange-600">
                              Edit
                            </button>
                            <button className="text-primary hover:text-blue-700">
                              View
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              Close
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-gray-200">
                <button className="text-secondary font-medium hover:text-orange-600">
                  View All Jobs →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-lg font-medium text-dark">My Job Listings</h3>
              <div className="mt-3 md:mt-0 flex space-x-3">
                <button className="btn-secondary">Post a New Job</button>
                <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Import Jobs
                </button>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="input-field pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <select className="input-field">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Paused</option>
                  <option>Closed</option>
                </select>

                <select className="input-field">
                  <option>All Locations</option>
                  <option>Remote</option>
                  <option>Lagos, Nigeria</option>
                  <option>Nairobi, Kenya</option>
                  <option>Accra, Ghana</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applications
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Posted
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeJobs.map((job) => (
                    <tr key={job.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-dark">
                          {job.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{job.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {job.applications}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {job.posted}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-secondary hover:text-orange-600">
                            Edit
                          </button>
                          <button className="text-primary hover:text-blue-700">
                            View
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            Close
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">3</span> of{" "}
                <span className="font-medium">12</span> results
              </div>
              <div className="flex space-x-2">
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "candidates" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-dark mb-6">
              Candidate Management
            </h3>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="input-field pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <select className="input-field">
                  <option>All Jobs</option>
                  <option>Senior Frontend Developer</option>
                  <option>UX Designer</option>
                  <option>Product Manager</option>
                </select>

                <select className="input-field">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Reviewed</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {recentApplications.map((candidate) => (
                <div
                  key={candidate.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={candidate.image}
                        alt={candidate.name}
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-dark">
                          {candidate.name}
                        </h4>
                        <p className="text-gray-600">{candidate.position}</p>
                        <div className="mt-1 flex items-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              candidate.status === "New"
                                ? "bg-blue-100 text-blue-800"
                                : candidate.status === "Reviewed"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {candidate.status}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            Applied {candidate.applied}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-auto flex flex-col md:items-end">
                      <div className="text-sm font-medium text-green-600">
                        Match Score: {candidate.match}
                      </div>
                      <div className="mt-2 flex space-x-2">
                        <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                          View Profile
                        </button>
                        <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                          Schedule Interview
                        </button>
                        <button className="btn-secondary text-sm px-3 py-1">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">3</span> of{" "}
                <span className="font-medium">24</span> candidates
              </div>
              <div className="flex space-x-2">
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "talent" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-dark mb-6">
              Talent Search
            </h3>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-md font-medium text-dark mb-3">
                Search Filters
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. React, Python, UI/UX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select className="input-field">
                    <option>Any Location</option>
                    <option>Remote Only</option>
                    <option>Nigeria</option>
                    <option>Kenya</option>
                    <option>Ghana</option>
                    <option>South Africa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select className="input-field">
                    <option>Any Experience</option>
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (3-5 years)</option>
                    <option>Senior (5+ years)</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="btn-secondary">Search Talent</button>
              </div>
            </div>

            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-dark">
                Search for talent
              </h3>
              <p className="mt-1 text-gray-500">
                Use the search filters above to find the perfect candidates for
                your roles.
              </p>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-dark mb-4">
              Account Settings
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-dark mb-2">
                  Company Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Global Innovations Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select className="input-field">
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Retail</option>
                      <option>Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size
                    </label>
                    <select className="input-field">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>501-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Website
                    </label>
                    <input
                      type="url"
                      className="input-field"
                      defaultValue="https://globalinnovations.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-dark mb-2">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      defaultValue="jane.smith@globalinnovations.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="HR Manager"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-dark mb-2">
                  Subscription Plan
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-dark">Premium Plan</h5>
                      <p className="text-sm text-gray-500">
                        Unlimited job postings and candidate searches
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Next billing date: July 15, 2023
                  </div>
                  <div className="mt-4">
                    <button className="text-secondary font-medium hover:text-orange-600">
                      Upgrade Plan
                    </button>
                    <span className="mx-2 text-gray-300">|</span>
                    <button className="text-gray-500 font-medium hover:text-gray-700">
                      Billing History
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-dark mb-2">
                  Notification Settings
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="new-applications"
                        name="new-applications"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="new-applications"
                        className="font-medium text-gray-700"
                      >
                        New Applications
                      </label>
                      <p className="text-gray-500">
                        Receive notifications when candidates apply to your jobs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidate-messages"
                        name="candidate-messages"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidate-messages"
                        className="font-medium text-gray-700"
                      >
                        Candidate Messages
                      </label>
                      <p className="text-gray-500">
                        Receive notifications when candidates respond to your
                        messages
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="job-alerts"
                        name="job-alerts"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="job-alerts"
                        className="font-medium text-gray-700"
                      >
                        Job Alerts
                      </label>
                      <p className="text-gray-500">
                        Receive notifications about your job postings (expiring
                        soon, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="marketing"
                        name="marketing"
                        type="checkbox"
                        className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="marketing"
                        className="font-medium text-gray-700"
                      >
                        Marketing Communications
                      </label>
                      <p className="text-gray-500">
                        Receive tips, trends, and industry insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="btn-secondary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecruiterDashboard;
