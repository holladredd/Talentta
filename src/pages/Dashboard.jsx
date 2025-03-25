// import { useState } from "react";
import TalentDashboard from "../components/TalentDashboard";
import RecruiterDashboard from "../components/RecruiterDashboard";

function Dashboard({ userType }) {
  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {userType === "recruiter" ? (
          <RecruiterDashboard />
        ) : (
          <TalentDashboard />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
