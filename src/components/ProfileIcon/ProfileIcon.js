import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className='pa4 tc' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag='span'
        data-toggle='dropdown'
        aria-expanded={dropdownOpen}
      >
        <img
          src='http://tachyons.io/img/logo.jpg'
          className='br-100 ba h3 w3 dib'
          alt='avatar'
        />
      </DropdownToggle>
      <DropdownMenu
        className='b--transparent shadow-5'
        style={{
          position: 'relative',
          left: '4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
        <DropdownItem onClick={() => onRouteChange('signout')}>
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
