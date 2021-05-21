import React from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookMarksIcon,
  List,
  ProfileIcon,
  MoreIcon,
} from "../icons/icon";

const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <h1>SideBar</h1>
      <HomeIcon />
      <ExploreIcon />
      <NotificationsIcon />
      <MessagesIcon/> 
      <BookMarksIcon />
      <List />
      <ProfileIcon />
      <MoreIcon />
    </div>
  );
};

export default Sidebar;



