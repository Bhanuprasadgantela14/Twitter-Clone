import React from 'react';

import FollowBar from "@/components/layout/FollowBar"
import Sidebar from "@/components/layout/Sidebar"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        {children}
      </div>
      <div className="follow">
        <FollowBar />
      </div>
    </main>
  )
}

export default Layout;
