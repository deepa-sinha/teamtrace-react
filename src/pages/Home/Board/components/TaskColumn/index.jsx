import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./style.scss";

export default function TaskColumn(props) {
    return (
        <div className="task-column">
            <div className="task-col-header">
                <h3>{props.title}</h3>
                <div className="task-count">{props.tasks.length}</div>
            </div>

            <div className="task-card-list">
                <div className="task-list">
                    {props.tasks.map((task) => (
                        <div className="task-card" key={task.id}>
                            <div className="task-top">
                                {task.priority ? <span className={`priority ${task.priority?.toLowerCase()}`}>
                                    {task.priority === "High" ? <ArrowUpwardOutlinedIcon fontSize="small" /> : task.priority === "Low" ? <ArrowDownwardOutlinedIcon fontSize="small" /> : null}
                                    {task.priority}
                                </span> : <div className="empty-priority"><ArrowUpwardOutlinedIcon/></div>}
                                
                                <span className="task-id">{task.id}</span>
                            </div>

                            <p className="task-text">{task.text}</p>

                            <div className="task-meta">
                                <span className="task-date">
                                    <CalendarMonthOutlinedIcon /> {task.date}
                                </span>
                                <div className="task-users">
                                    <AvatarGroup max={4} className="avatar-group">
                                        {task.users.map((user, index) => (
                                            <Avatar key={index} className="avatar" src={user} />
                                        ))}
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
