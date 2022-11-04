import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import List from "../components/List";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="bg-black px-[100px] py-[50px]">
        <DashboardHeader/>
        <div className="flex justify-between mt-[128px] items-center text-[#FFFFFF]">
          <h1 className="text-white text-[40px] ">Today’s leaderboard</h1>
          <div className="flex gap-[28px] bg-[#1D1D1D] px-[24px] py-[16px] rounded-[16px]">
            <span className="py-[4px] px-[10px] font-[100]">30 May 2022</span>
            <span className="bg-[#9BFF00] py-[4px] px-[10px] rounded-[8px] uppercase text-black">Submissions OPEN</span>
            <span className="py-[4px] px-[10px] font-[100]">11:34</span>
          </div>
        </div>
        <List/>
      </div>
    </>
  );
};

export default AdminDashboardPage;
