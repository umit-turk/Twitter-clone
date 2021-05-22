import React, { useState } from "react";
import twitterLogo from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookMarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from '../icons/icon';
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookMarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState('Home');

  const handleMenuItemClick = (name) => {
    setActive(name)
  }
  return (
    <div className=" h-screen sticky top-0  flex flex-col justify-between w-72 px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
          <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({name, icon}) => (
              <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />//herbiri bir fuctional component olan icon componentleri props olarak gönderiyoruz.
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base text-white shadow-lg hover:bg-primary-dark rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  );
};

export default Sidebar;
