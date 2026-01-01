import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './style.scss'

export default function SidebarLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-layout">
        <Outlet />
      </main>
    </div>
  );
}
