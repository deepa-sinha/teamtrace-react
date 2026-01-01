import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./style.scss";

export default function TimelineCard(props) {
    return (
        <div className="timeline-card">
            <img src="/images/activity-ss.png" alt="" />
            <div className="timeline-card-data">
                <h5 className="timeline-card-title">
                    <AccessTimeOutlinedIcon /> 12:05:55AM - 01:47:07AM
                </h5>
                <div className="progress-bar">
                    <progress value={props.activity.progress} max="100">
                    </progress>
                </div>
                <p className="card-activity">{props.activity.progress}% of 5 minutes</p>
            </div>
        </div>
    );
}
