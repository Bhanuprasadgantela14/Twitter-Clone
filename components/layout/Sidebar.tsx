import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import useCurrentUser from '@/hooks/useCurrentUser';
import Link from 'next/link';

import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className='sidebar-body'>
      <Link href="/">
        <img className='logo' src="https://i.ytimg.com/vi/bZqPmiikY-s/maxresdefault.jpg" />
      </Link>
      <div className="sidenav">
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            alert={item.alert}
            auth={item.auth}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
        {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
      </div>
      <SidebarTweetButton />
    </div>
  )
};

export default Sidebar;
