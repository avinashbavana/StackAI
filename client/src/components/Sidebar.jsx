import React from "react";
import { useUser, useClerk, Protect } from "@clerk/clerk-react";
import {
  House,
  Hash,
  Scissors,
  SquarePen,
  Image,
  FileText,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14
        ${sidebar ? "translate-x-0" : "max-sm:translate-x-full"}
        transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="user avatar"
          className="w-14 h-14 rounded-full mx-auto"
        />
        <h1 className="font-semibold text-black mt-2 text-center">
          {user.fullName}
        </h1>

        <div className="mt-6 flex flex-col gap-2 px-4">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({isActive}) => `px-3.5 py-2.5 flex gap-3 items-center rounded 
              ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}
              `}>

                {(isActive)=>(
                  <>
                  <Icon className={`w-4 h-4 ${ isActive ? 'text-white' : '' }`}/>
                  {label}
                  </>
                )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div onClick={openUserProfile} className="flex items-center cursor-pointer">
          <img src={user.imageUrl} alt='user avatar' className="w-8 rounded-full"/>
          <div className="">
            <h1 className="text-sm font-medium mt-3 p-3">{user.fullName}</h1>
            <p className="text-xs text-[#cc9f00]">
              <Protect plan='premium' fallback="Free">Premium</Protect>
            </p>
          </div>
        </div>
        <LogOut onClick={signOut} className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"/>
      </div>
    </div>
  );
};

export default Sidebar;
