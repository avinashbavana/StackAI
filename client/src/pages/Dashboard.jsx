import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import Creationitem from '../components/Creationitem'

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboarData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboarData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-6 flex-wrap">
        {/* Total creation Card */}
        <div
          className="flex justify-between items-center w-72 p-4 px-6 bg-white 
        rounded-lg  border boder-gray-900 shadow-lg
        "
        >
          <div className="text-slate-600 font-semibold">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3588F2] to-[#0BB0D7]
          flex justify-center items-center text-white
          "
          >
            <Sparkles className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div
          className="flex justify-between items-center w-72 p-4 px-6 bg-white 
        rounded-lg  border boder-gray-900 shadow-lg
        "
        >
          <div className="text-slate-600 font-semibold">
            <p className="text-sm">Plan status</p>
            <p className="text-[20px] text-[#cc9f00]">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3588F2] to-[#0BB0D7]
          flex justify-center items-center text-white
          "
          >
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-">
        <p className="mt-6 mb-4 font-bold text-xl text-slate-600">Recent Creations</p>
        {
          creations.map((item) => <Creationitem key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default Dashboard;
