import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import SidebarSubMenu from "../../Components/SidebarSubMenu/SidebarSubMenu";
import Navbar from "../../Components/Navbar/Navbar";
import SidebarLeft from "../../Components/SidebarLeft/SidebarLeft";
import Content from "../../Components/Content/Content";
import LayersIcon from "@mui/icons-material/Layers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WidgetsIcon from "@mui/icons-material/Widgets";
import InboxIcon from "@mui/icons-material/Inbox";
import FolderIcon from "@mui/icons-material/Folder";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import GroupIcon from "@mui/icons-material/Group";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import WebIcon from "@mui/icons-material/Web";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import DatasetIcon from "@mui/icons-material/Dataset";
import MenuIcon from "@mui/icons-material/Menu";

import "./Index.css";

function Index() {
  const [showMenu, setShowMenu] = useState<string>("hidden");

  const menuHandler = (): void => {
    if (showMenu === "hidden") {
      setShowMenu("block");
    } else {
      setShowMenu("hidden");
    }
  };

  return (
    <div
      dir="rtl"
      className="md:flex md:justify-center md:items-start bg-blue-500 md:px-8 lg:pr-4 px-2 md:py-5 py-1 h-full"
    >
      <nav className="xl:w-1/6 text-inherit">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex justify-start items-center text-2xl pt-3 px-2"
            >
              <LayersIcon fontSize="large" />
              <div className="hidden xl:inline">
                ????
                <span className="font-black">??????</span>
              </div>
            </Link>
          </div>
          <div className="pt-3 pr-2 inline md:hidden" onClick={menuHandler}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <hr className="my-5 border-blue-600 md:w-full" />
        <div className={`${showMenu} md:inline`}>
          <div>
            <SidebarMenu
              url="/"
              iconRight=<HomeIcon />
              text="????????????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????????? ????"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????????? ????"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????????? ????"
            />
          </ul>
          <div>
            <SidebarMenu
              className="md:hover:bg-blue-200"
              url="/"
              iconRight=<WidgetsIcon />
              text="???????????? ??????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????? ????????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????? ????????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????? ????????" />
          </ul>
          <SidebarMenu url="/" iconRight=<InboxIcon /> text="?????????? ??????????" />
          <SidebarMenu url="/" iconRight=<FolderIcon /> text="???????????? ????????" />
          <SidebarMenu url="/" iconRight=<CreditCardIcon /> text="???????? ????????" />
          <SidebarMenu url="/" iconRight=<ChatBubbleIcon /> text="????" />
          <SidebarMenu url="/" iconRight=<PostAddIcon /> text="??????" />
          <SidebarMenu url="/" iconRight=<CalendarMonthIcon /> text="??????????" />
          <hr className="my-5 border-blue-600" />
          <div>
            <SidebarMenu
              url="/"
              iconRight=<NoteAltIcon />
              text="????????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ????????"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="??????" />
          </ul>
          <div>
            <SidebarMenu
              url="/"
              iconRight=<GroupIcon />
              text="??????????????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????????? ????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????????? ????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????????? ????" />
          </ul>
          <div>
            <SidebarMenu
              url="/"
              iconRight=<PermContactCalendarIcon />
              text="??????????????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????? ????"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????? ????"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?????? ????"
            />
          </ul>
          <div>
            <SidebarMenu
              url="/"
              iconRight=<WebIcon />
              text="??????????"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-blue-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="????????" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ??????????"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="????????????" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="???????? ?? ????????"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="????????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="?????? ??????" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="???????? ??????" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="?????????????????? ??????????????"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="?????????? ?????? ????????"
            />
          </ul>
          <hr className="my-5 border-blue-600" />
          <SidebarMenu url="/" iconRight=<BarChartIcon /> text="???????????? ????" />
          <SidebarMenu
            url="/"
            iconRight=<FormatListNumberedRtlIcon />
            text="?????? ????"
          />
          <SidebarMenu url="/" iconRight=<DatasetIcon /> text="???????? ????" />
        </div>
      </nav>
      <section className="bg-blue-200 h-full w-full rounded-3xl text-sm sm:px-5 text-zinc-600">
        <Navbar />
        <div className="border-solid border-t-2 2xl:border-l-2 border-blue-600 mt-1 px-2 py-6 2xl:flex 2xl:justify-between 2xl:items-start">
          <div className="w-full">
            <Content />
          </div>
          <SidebarLeft />
        </div>
      </section>
    </div>
  );
}

export default Index;
