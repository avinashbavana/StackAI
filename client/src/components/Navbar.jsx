import { useNavigate } from "react-router-dom"
import { assets} from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useUser();
  const {openSignIn} = useClerk();
  return (
    <div
      className="fixed z-5 w-full backdrop-blur-2xl flex justify-between 
                    items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer
    "
    >
      <img
        src={assets.stackAI_logo}
        alt="logo"
        className="max-w-44 px-8 mt-3 sm:w-44 min-h-14 flex items-center justify-between"
        onClick={() => navigate("/")}
      />

      {
        user ? <UserButton /> 
        :
         (
      <button onClick={openSignIn} className="flex item-center gap-3 rounded-full bg-[#514ee9] text-sm text-white cursor-pointer px-10 py-2.5">Get started <ArrowRight className="w-4 h-4"/></button>
        )
      }
    </div>
  );
};

export default Navbar;
