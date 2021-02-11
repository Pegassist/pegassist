import React from 'react';
import { Menu } from 'semantic-ui-react';
import { API_ROOT } from '../../config';
import { useMenuTab } from '../../hooks';

const AppMenu = () => {
  const { menuTab, setMenuTab } = useMenuTab();
  return (
    <Menu
      secondary
      pointing
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        backgroundColor: '#f3f4f5',
        zIndex: 2,
        marginBottom: 0,
      }}
    >
      <img
        alt="PegAssist Logo"
        src={`${API_ROOT}/icon/pegassist3ciel.png`}
        style={{ height: 50 }}
      />
      <Menu.Item
        name="Home"
        active={menuTab === 'home'}
        onClick={() => setMenuTab('home')}
      ></Menu.Item>
      <Menu.Item
        name="About"
        active={menuTab === 'about'}
        onClick={() => setMenuTab('about')}
      ></Menu.Item>
      {/* <Menu.Item name="Instructions"></Menu.Item>
      <Menu.Item name="Examples"></Menu.Item> */}
    </Menu>
  );
};

export default AppMenu;
