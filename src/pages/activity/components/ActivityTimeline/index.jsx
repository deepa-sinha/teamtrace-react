import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TimelineCard from "./TimelineCard";
import './style.scss';

export default function ActivityTimeline(props) {
    return (
        <div className="activity-timeline">
            <div className="timeline-header">
                <h4 className="timeline-heading">Activity Name : {props.name}</h4>
                <div className="timeline-stats">
                    <p className="time"><span className="lebel"><AccessTimeOutlinedIcon/>Time:</span> 12:05AM - 01:47PM</p>
                    <p className="time"><span className="lebel"><AccessTimeOutlinedIcon/>Total Time Worked:</span> 01h 41m</p>
                </div>
            </div>
            <div className="activity-content">
                {props.activities.map((activity, index) => (
                    <TimelineCard key={index} activity={activity}/>
                ))}
            </div>
        </div>
    );
}