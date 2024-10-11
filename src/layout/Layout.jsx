import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-hidden pt-16">
          <main className="h-full overflow-y-auto lg:ml-52">
            <div className="p-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
