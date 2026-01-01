import { textTrim } from "../../utils";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./style.scss";

export default function TaskList() {
    const tasks = [
        {
            age: "91 Days",
            id: "#62",
            task: "Application Tracking Issue: Approval not working in marketplace login",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#84",
            task: "ADD Users within Member role access issue",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg"],
        },
        {
            age: "91 Days",
            id: "#13",
            task: "New Task Cards for Employee Dashboard not saving",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#17",
            task: "If user already has 40 hours of tasks, block new task creation",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava1.jpg"],
        },
        {
            age: "91 Days",
            id: "#13",
            task: "New Task Cards for Employee Dashboard not saving",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#17",
            task: "If user already has 40 hours of tasks, block new task creation",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava1.jpg"],
        },
        {
            age: "91 Days",
            id: "#13",
            task: "New Task Cards for Employee Dashboard not saving",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#17",
            task: "If user already has 40 hours of tasks, block new task creation",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava1.jpg"],
        },
        {
            age: "91 Days",
            id: "#13",
            task: "New Task Cards for Employee Dashboard not saving",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#17",
            task: "If user already has 40 hours of tasks, block new task creation",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava1.jpg"],
        },
        {
            age: "91 Days",
            id: "#13",
            task: "New Task Cards for Employee Dashboard not saving",
            deadline: "09/09/2025",
            people: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
            age: "84 Days",
            id: "#17",
            task: "If user already has 40 hours of tasks, block new task creation",
            deadline: "16/09/2025",
            people: ["/images/ava1.jpg", "/images/ava1.jpg"],
        },
    ];

    return (
        <div className="task-lists">
            <table className="task-table">
                <thead>
                    <tr>
                        <th className="col">Overdue</th>
                        <th className="col">Task No</th>
                        <th className="col">Task</th>
                        <th className="col">Deadline</th>
                        <th className="col">People</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td style={{ width: "70px", color: "#ff9900ff", fontWeight: 600 }}>{task.age}</td>
                            <td style={{ width: "70px" }}>
                                <a href="javascript:void(0)" className="col-link">
                                    {task.id}
                                </a>
                            </td>
                            <td style={{ width: "200px" }}>
                                <p className="task-description">{textTrim(task.task, 28)}</p>
                            </td>
                            <td>{task.deadline}</td>
                            <td>
                                <AvatarGroup max={4} className="people-stack">
                                    {task.people.map((person, index) => (
                                        <Avatar key={index} className="avatar" src={person} />
                                    ))}
                                </AvatarGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
