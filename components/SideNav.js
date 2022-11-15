import {
  HomeIcon,
  BookmarkIcon,
  CreditCardIcon,
  BellAlertIcon,
  ClipboardDocumentListIcon,
  PlayCircleIcon,
  BookmarkSquareIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SideNavItems = ({ Icon, title }) => {
  return (
    <div className="flex flex-row items-center mt-5 cursor-pointer p-2">
      <Icon className="h-6 text-gray-500 mr-3" />
      <h5>{title}</h5>
    </div>
  );
};

const SideNav = () => {
  return (
    <div className="bg-navy w-[300px] h-screen">
      <div className="container mx-auto p-10">
        <h2>
          <span className="text-blue">Mov.</span>time
        </h2>
        <h6>MENU</h6>

        <Link
          href="/"
          className="flex flex-row items-center  mt-5 text-blue bg-gray-600 rounded p-2"
        >
          <HomeIcon className="h-6 text-blue mr-3" />
          <h5 className="text-blue">Home</h5>
        </Link>
        <div className="flex flex-col space-y-12">
          <SideNavItems title="Favorite" Icon={BookmarkIcon} />
          <SideNavItems title="Purchase" Icon={CreditCardIcon} />
          <SideNavItems title="Reminder" Icon={BellAlertIcon} />
        </div>
        <h6>OTHER</h6>
        <div className="flex flex-col space-y-12">
          <SideNavItems title="Playist" Icon={ClipboardDocumentListIcon} />
          <SideNavItems title="Live" Icon={PlayCircleIcon} />
          <SideNavItems title="Bookmarks" Icon={BookmarkSquareIcon} />
          <SideNavItems title="Settings" Icon={Cog6ToothIcon} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
