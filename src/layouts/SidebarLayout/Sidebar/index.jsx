import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NavLinkMenu from "./NavLinkMenu";
import Popover from "../../../components/Popover";
import { Link } from "react-router-dom";
import { isMedia, onMediaQuery } from "../../../utils";
import { useEffect } from "react";
import "./style.scss";

export default function Sidebar() {
    const toggleSidebar = () => {
        if (!isMedia("(max-width: 764px)")) {
            document.body.classList.toggle("sidebar-collapsed");
        } else {
            document.body.classList.toggle("sidebar-open");
        }
    };

    useEffect(() => {
        const cleanup = onMediaQuery("(max-width: 768px)", () => {
            document.body.classList.remove("sidebar-collapsed");
        });

        return cleanup;
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src="/images/logo.png" alt="" className="logo-lg" />
                <img src="/images/logo-sm.png" alt="" className="logo-sm" />
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <PeopleAltOutlinedIcon />
                            <span className="nav-title">People</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <WidgetsOutlinedIcon />
                            <span className="nav-title">Projects</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <AssignmentOutlinedIcon />
                            <span className="nav-title">Task</span>
                        </a>
                    </li>
                    <NavLinkMenu icon={<InsightsOutlinedIcon />} title="Productivity">
                        <li className="nav-item">
                            <Link to="/activity" className="nav-link">
                                My Activity
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                App & URL
                            </a>
                        </li>
                    </NavLinkMenu>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <EventAvailableOutlinedIcon />
                            <span className="nav-title">Holidays</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <div className="sidebar-footer-actions">
                    <div className="footer-action">
                        <button className="action-btn">
                            <FullscreenIcon />
                        </button>
                        <button className="action-btn">
                            <HelpOutlineIcon />
                        </button>
                        <button className="action-btn">
                            <NotificationsNoneIcon />
                        </button>
                        <button className="action-btn">
                            <HomeRepairServiceIcon />
                        </button>
                    </div>
                    <button className="sideber-collapse" onClick={toggleSidebar}>
                        <svg width="8" height="28" viewBox="0 0 8 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.96875 0V5.5H2.96875C6.56875 4.7 7.80208 1.5 7.96875 0Z" fill="#9EA2A9"></path>
                            <path d="M0 8.5C0 6.84315 1.34315 5.5 3 5.5H7.96875V22.5H3C1.34315 22.5 0 21.1569 0 19.5V8.5Z" fill="#9EA2A9"></path>
                            <path d="M1 18.5V9.5H2.2V18.5H1ZM3.4 14L7 9.5V18.5L3.4 14Z" fill="#ffffff"></path>
                            <path d="M7.96875 28V22.5H2.96875C6.56875 23.3 7.80208 26.5 7.96875 28Z" fill="#9EA2A9"></path>
                        </svg>
                    </button>
                </div>

                <div className="user-info">
                    <div className="avatar">D</div>
                    <div className="user-text">
                        <p className="name">Deepa S</p>
                        <span className="role">HTML Developer</span>
                    </div>

                    <Popover
                        trigger={
                            <button className="user-info-icon">
                                <ChevronRightIcon />
                            </button>
                        }
                        anchorOrigin={{
                            vertical: "center",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "center",
                            horizontal: "left",
                        }}
                    >
                        <ul className="popover-menu">
                            <li>My Profile</li>
                            <li>Change Password</li>
                            <li>User Activities</li>
                            <li>Download Apps</li>
                            <li>logout</li>
                        </ul>
                    </Popover>
                </div>
            </div>
        </aside>
    );
}
