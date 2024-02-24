import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiBook } from "react-icons/bi";
import { BsSpeedometer, BsClock } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { RiComputerLine } from "react-icons/ri";
import { GrCreativeCommons, GrInbox } from "react-icons/gr";
import { FiHelpCircle } from "react-icons/fi";
import { GoInbox } from "react-icons/go";

function KanbasNavigation() {
  const links = [
    { label: " ", icon: <div style={{ display: "flex", alignItems: "center" }}>
        <img src={require("../../images/neu.png")} alt="Northeastern" className="fs-1" style={{ width: "60px" }} />
        <span style={{ marginLeft: "10px" }}></span>
      </div> },
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <GoInbox className="fs-2"/> },
    { label: "History", icon: <BsClock className="fs-2"/> },
    { label: "Studio", icon: <RiComputerLine className="fs-2"/> },
    { label: "Commons", icon: <GrCreativeCommons className="fs-2"/> },
    { label: "Help", icon: <FiHelpCircle className="fs-2"/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            <span style={{ color: link.label === "Account" ? "white" : "" }}>{link.icon}</span>{" "}
            {link.label === "Account" ? <span style={{ color: "white" }}>{link.label}</span> : link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
