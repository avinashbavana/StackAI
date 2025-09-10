import { useNavigate } from "react-router-dom";
import { AiToolsData } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div>
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px]">Powerfull AI Tools</h2>
        <p className="text-gray-500 mt-">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="border border-gray-300 max:w-xs rounded-lg p-8 m-4 bg-[#FDFDFE] shadow-lg hover:-translate-y-1 transition-all duration-300
                cursor-pointer "
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-[#e4e7e9] rounded-xl "
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="mt-6 text-lg font-semibold ">{tool.title}</h3>
            <p className="text-gray-400 text-sm max:w-[95%]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AiTools;
