import { useState } from 'react';

function TalentDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock data
  const profile = {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "Lagos, Nigeria",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "TypeScript"],
    completionPercentage: 85,
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Ltd",
      location: "Remote",
      salary: "$70,000 - $90,000",
      posted: "2 days ago",
      status: "Matched",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Global Innovations",
      location: "Nairobi, Kenya",
      salary: "$60,000 - $75,000",
      posted: "1 week ago",
      status: "Applied",
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "Startup Hub",
      location: "Remote",
      salary: "$80,000 - $100,000",
      posted: "3 days ago",
      status: "Saved",
    },
  ];

  const applications = [
    {
      id: 1,
      jobTitle: "React Developer",
      company: "Global Innovations",
      appliedDate: "2023-06-15",
      status: "Interview Scheduled",
    },
    {
      id: 2,
      jobTitle: "JavaScript Developer",
      company: "Tech Africa",
      appliedDate: "2023-06-10",
      status: "Application Submitted",
    },
  ];

  return (
    <div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-dark">{profile.name}</h2>
                <p className="text-gray-600">{profile.title}</p>
                <p className="text-gray-500">{profile.location}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-gray-600 mb-1">
                Profile Completion: {profile.completionPercentage}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${profile.completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "profile"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "jobs"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Job Matches
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "applications"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "settings"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "profile" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-dark mb-4">
              Professional Profile
            </h3>

            <div className="mb-6">
              <h4 className="text-md font-medium text-dark mb-2">About Me</h4>
              <p className="text-gray-600">
                Experienced Full Stack Developer with a passion for building
                scalable web applications. Specialized in JavaScript
                technologies and modern frameworks.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-medium text-dark mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-medium text-dark mb-2">Experience</h4>
              <div className="border-l-2 border-gray-200 pl-4 space-y-6">
                <div>
                  <div className="flex justify-between">
                    <h5 className="font-medium">Senior Developer</h5>
                    <span className="text-sm text-gray-500">
                      2020 - Present
                    </span>
                  </div>
                  <p className="text-gray-600">Tech Innovations Inc.</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Led development of multiple web applications using React and
                    Node.js.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h5 className="font-medium">Frontend Developer</h5>
                    <span className="text-sm text-gray-500">2018 - 2020</span>
                  </div>
                  <p className="text-gray-600">Digital Solutions Ltd</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Developed responsive user interfaces and implemented new
                    features.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-md font-medium text-dark mb-2">Education</h4>
              <div className="border-l-2 border-gray-200 pl-4">
                <div>
                  <div className="flex justify-between">
                    <h5 className="font-medium">BSc Computer Science</h5>
                    <span className="text-sm text-gray-500">2014 - 2018</span>
                  </div>
                  <p className="text-gray-600">University of Lagos</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn-primary">Edit Profile</button>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-dark">Job Matches</h3>
              <p className="text-gray-600 mt-1">
                Jobs that match your skills and preferences
              </p>
            </div>

            <div className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-lg font-medium text-dark">
                        {job.title}
                      </h4>
                      <p className="text-gray-600">{job.company}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {job.location}
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {job.salary}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        Posted {job.posted}
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                      <span
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                          job.status === "Matched"
                            ? "bg-green-100 text-green-800"
                            : job.status === "Applied"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {job.status}
                      </span>
                      <div className="mt-3 flex space-x-3">
                        <button className="btn-primary">Apply Now</button>
                        <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <button className="text-primary font-medium hover:text-blue-700">
                View All Job Matches →
              </button>
            </div>
          </div>
        )}

        {activeTab === "applications" && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-dark">My Applications</h3>
              <p className="text-gray-600 mt-1">Track your job applications</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applied Date
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-dark">
                          {app.jobTitle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {app.company}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {app.appliedDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            app.status.includes("Interview")
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary hover:text-blue-700">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      defaultValue="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      defaultValue="+234 123 456 7890"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-dark mb-2">
                  Change Password
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input type="password" className="input-field" />
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input type="password" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input type="password" className="input-field" />
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
                        id="job-matches"
                        name="job-matches"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="job-matches"
                        className="font-medium text-gray-700"
                      >
                        Job Matches
                      </label>
                      <p className="text-gray-500">
                        Receive notifications when new jobs match your profile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="application-updates"
                        name="application-updates"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="application-updates"
                        className="font-medium text-gray-700"
                      >
                        Application Updates
                      </label>
                      <p className="text-gray-500">
                        Receive updates about your job applications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="marketing"
                        name="marketing"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
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
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TalentDashboard;
