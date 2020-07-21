import React from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper } from './HeaderStyle';
import { StoreState } from '../../reducers';

import Search from '../Search';
// import { toggleSidebar } from '../../actions';
import { toggleSidebar } from '../Sidebar/actions';

interface HeaderProps {
  sidebar?: boolean;
  toggleSidebar?: (isOpen: any) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebar, toggleSidebar }) => {
  return (
    <HeaderWrapper>
      <div className="logo flex-row">
        {/* <HamburgerIcon
          className="toggle-navhandler"
          onClick={handleToggleSidebar}
        /> */}
        <button
          className="toggle-navhandler"
          onClick={() => toggleSidebar!(!sidebar)}
        >
          Open SideBar
        </button>
        <span>YouTube</span>
      </div>

      <Search />

      <ul>
        <li>
          Upload Video
          {/* <UploadVideo /> */}
        </li>
        <li>
          Notifications
          {/* <NotificationIcon /> */}
        </li>
        <li>
          Profile Details
          {/* <Link to={`/channel/${user.id}`}>
            <Avatar className="pointer" src={user.avatar} alt="user-avatar" />
          </Link> */}
        </li>
      </ul>
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ sideBar }: StoreState) => {
  return {
    sidebar: sideBar.isOpen,
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Header);
