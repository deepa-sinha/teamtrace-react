import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FreeCancellationOutlinedIcon from "@mui/icons-material/FreeCancellationOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import Grid from "@mui/material/Grid";
import SelectBox from "../../components/ui/Selectbox";
import TaskList from "../../components/TaskList";
import TaskPiechart from "../../components/charts/Piechart";
import TaskBarChart from "../../components/charts/TaskBarChart";
import Empty from "../../components/Empty";
import { useState } from "react";
import Board from "./Board";
import "./style.scss";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="home-page">
      <div className="home-heading">
        <div className="heading-top">
          <h1 className="heading-title">TeamTrace client requirements</h1>
          <KeyboardArrowDownIcon />
        </div>

        <div className="heading-tabs">
          <button
            className={`tab ${activeTab == "home" && "active"}`}
            onClick={() => handleTabClick("home")}
          >
            <HomeOutlinedIcon /> Home
          </button>
          <button
            className={`tab ${activeTab == "list" && "active"}`}
            onClick={() => handleTabClick("list")}
          >
            <FormatListBulletedOutlinedIcon /> List
          </button>
          <button
            className={`tab ${activeTab == "board" && "active"}`}
            onClick={() => handleTabClick("board")}
          >
            <AssignmentOutlinedIcon /> Board
          </button>
          <button
            className={`tab ${activeTab == "calendar" && "active"}`}
            onClick={() => handleTabClick("calendar")}
          >
            <CalendarMonthOutlinedIcon /> Calendar
          </button>
        </div>
      </div>

      {activeTab === "home" && (
        <>
          <div className="heading-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <PeopleOutlineOutlinedIcon />
              </div>
              <div className="stat-value">
                <p className="stat-label">23</p>
                <p className="stat-label">People</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <AccessTimeOutlinedIcon />
              </div>
              <div className="stat-value">
                <p className="stat-label">01:22 hrs</p>
                <p className="stat-label">Hours Today</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FreeCancellationOutlinedIcon />
              </div>
              <div className="stat-value">
                <p className="stat-label">01:22 hrs</p>
                <p className="stat-label">Hours This Week</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <EventRepeatOutlinedIcon />
              </div>
              <div className="stat-value">
                <p className="stat-label">23:49 hrs</p>
                <p className="stat-label">Hours This Month</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <EventOutlinedIcon />
              </div>
              <div className="stat-value">
                <p className="stat-label">150:09 hrs</p>
                <p className="stat-label">Hours Since Start</p>
              </div>
            </div>
          </div>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            className="dashboard-card-wrapper"
          >
            <Grid size={{sm: 12, md: 6, xs: 12}} className="dashboard-card">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-heading">task distribution by status</h5>
                </div>
              </div>

              <div className="card-body">
                <TaskPiechart />
              </div>
            </Grid>

            <Grid size={{sm: 12, md: 6, xs: 12}} className="dashboard-card">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-heading">overdue task</h5>
                  <div className="badge">17</div>
                </div>
                <div className="card-actions">
                  <SelectBox
                    label="People"
                    value={""}
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                      { label: "Pending", value: "pending" },
                    ]}
                    className="filter-select"
                  />
                  <SelectBox
                    label="People"
                    value={""}
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                      { label: "Pending", value: "pending" },
                    ]}
                    className="filter-select"
                  />
                </div>
              </div>

              <div className="card-body">
                <TaskList />
              </div>
            </Grid>

            <Grid size={{sm: 12, md: 6, xs: 12}} className="dashboard-card">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-heading">workload</h5>
                </div>
              </div>

              <div className="card-body">
                <TaskBarChart />
              </div>
            </Grid>

            <Grid size={{sm: 12, md: 6, xs: 12}} className="dashboard-card">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-heading">upcoming deadline</h5>
                  <div className="badge">10</div>
                </div>
                <div className="card-actions">
                  <SelectBox
                    label="People"
                    value={""}
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                      { label: "Pending", value: "pending" },
                    ]}
                    className="filter-select"
                  />
                  <SelectBox
                    label="People"
                    value={""}
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                      { label: "Pending", value: "pending" },
                    ]}
                    className="filter-select"
                  />
                </div>
              </div>

              <div className="card-body">
                <Empty />
              </div>
            </Grid>
          </Grid>
        </>
      )}

      {activeTab === "board" && <Board />}

      
    </section>
  );
}
