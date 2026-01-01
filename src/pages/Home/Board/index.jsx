import "./style.scss";
import TaskColumn from "./components/TaskColumn";

export default function Board() {
  const columns = [
    {
      title: "To Do",
      tasks: [
        {
          id: "#85",
          text: "Ensure all fields included in CSV template.",
          date: "No Date",
          users: ["/images/ava1.jpg", "/images/ava2.jpg"],
          priority: "Low",
        },
        {
          id: "#87",
          text: "Implement search option for Productivity items.",
          date: "No Date",
          users: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
          priority: "Low",
        },
        {
          id: "#81",
          text: "Remove email from mandatory field monitoring.",
          date: "No Date",
          users: ["/images/ava2.jpg"],
        },
      ],
    },
    {
      title: "Approved",
      tasks: [
        {
          id: "#88",
          text: "Date format separator needs to be uniform.",
          date: "No Date",
          users: ["/images/ava1.jpg", "/images/ava2.jpg"],
          priority: "Low",
        },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        {
          id: "#5",
          text: "Add section in timetrace logger for break reason.",
          date: "25-11-2025 01:30 PM",
          users: ["/images/ava2.jpg", "/images/ava1.jpg"],
          priority: "High",
        },
        {
          id: "#62",
          text: "Application tracking works on Win10 but not Win7.",
          date: "09-09-2025 07:00 PM",
          users: ["/images/ava1.jpg"],
          priority: "Medium",
        },
        {
          id: "#59",
          text: "Silent app not working - Greenland (Windows 10).",
          date: "No Date",
          users: ["/images/ava1.jpg", "/images/ava2.jpg"],
          priority: "Medium",
        },
      ],
    },
    {
      title: "Closed",
      tasks: [
        {
          id: "#5",
          text: "Add section in timetrace logger for break reason.",
          date: "25-11-2025 01:30 PM",
          users: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava1.jpg"],
          priority: "High",
        },
        {
          id: "#62",
          text: "Application tracking works on Win10 but not Win7.",
          date: "09-09-2025 07:00 PM",
          users: ["/images/ava2.jpg", "/images/ava1.jpg"],
        },
        {
          id: "#59",
          text: "Silent app not working - Greenland (Windows 10).",
          date: "No Date",
          users: ["/images/ava1.jpg", "/images/ava2.jpg"],
          priority: "Medium",
        },
      ],
    },
  ];

  return (
    <div className="board-page">
      {columns.map((col) => (
        <TaskColumn key={col.title} title={col.title} tasks={col.tasks} />
      ))}
    </div>
  );
}
