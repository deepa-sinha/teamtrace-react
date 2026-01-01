import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FreeCancellationOutlinedIcon from "@mui/icons-material/FreeCancellationOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import BasicDatePicker from "../../components/ui/DatePicker";
import ActivityTimeline from "./components/ActivityTimeline";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRighttIcon from '@mui/icons-material/ChevronRight';
import "./style.scss";

function generateTimeline(n) {
    const names = ["RnD", "Design", "Development", "Testing", "Deployment"];
    const timeline = [];

    for (let i = 0; i < n; i++) {
        const activities = [];
        const count = Math.floor(Math.random() * 15) + 1;

        for (let j = 0; j < count; j++) {
            activities.push({
                image: "",
                progress: Math.floor(Math.random() * (60 - 10 + 1)) + 10,
            });
        }

        timeline.push({
            name: names[Math.floor(Math.random() * names.length)],
            activities: activities,
        });
    }

    return timeline;
}

export default function Activity() {
    const timelines = generateTimeline(5);
    console.log(timelines);
    return (
        <section className="activity-page">
            <div className="activity-heading">
                <h3>My Activity</h3>
            </div>

            <div className="activity-header">
                <div className="date-select">
                    <button className="arrow-btn left"><ChevronLeftIcon/></button>
                    <BasicDatePicker />
                    <button className="arrow-btn right"><ChevronRighttIcon/></button>
                </div>

                <div className="activity-stats">
                    <div className="stat-item">
                        <div className="stat-icon">
                            <AccessTimeOutlinedIcon />
                        </div>
                        <div className="stat-value">
                            <p className="time">12:05 AM</p>
                            <p className="text">Check In Time</p>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <AccessTimeOutlinedIcon />
                        </div>
                        <div className="stat-value">
                            <p className="time">08:20 PM</p>
                            <p className="text">Check Out Time</p>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <FreeCancellationOutlinedIcon />
                        </div>
                        <div className="stat-value">
                            <p className="time">11h 01m</p>
                            <p className="text">Total Active Hours</p>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <EventRepeatOutlinedIcon />
                        </div>
                        <div className="stat-value">
                            <p className="time">00h 50m</p>
                            <p className="text">Idle Time</p>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <EventOutlinedIcon />
                        </div>
                        <div className="stat-value">
                            <p className="time">33.22%</p>
                            <p className="text">Active Average</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-container">
                {timelines.map((timeline, index) => (
                    <ActivityTimeline key={index} name={timeline.name} activities={timeline.activities} />
                ))}
            </div>
        </section>
    );
}
