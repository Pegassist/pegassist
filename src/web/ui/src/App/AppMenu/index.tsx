import React, { SetStateAction } from 'react';
import { Menu } from 'semantic-ui-react';
import { API_ROOT } from '../../config';
import { useMenuTab } from '../../hooks';

function navCallback(
  tab: string,
  setMenuTab: (u: SetStateAction<string>) => void,
) {
  setMenuTab(tab);
  // window.history.pushState(null, '', `${tab}`);
}

// function ensureLocation(
//   menuTab: string,
//   setMenuTab: (u: SetStateAction<string>) => void,
// ) {
//   const locationTab = window.document.location.pathname.replace('/', '');
//   if (locationTab !== menuTab) {
//     setMenuTab(locationTab);
//   }
// }

// const IS_REGISTERED = false;
// function registerOnPopState(
//   menuTab: string,
//   setMenuTab: (u: SetStateAction<string>) => void,
// ) {
//   if (!IS_REGISTERED) {
//     window.onpopstate = function (event: PopStateEvent) {
//       ensureLocation(menuTab, setMenuTab);
//     };
//   }
// }

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
        className="menu-logo"
      />
      <Menu.Item
        name="Home"
        active={menuTab === 'home'}
        onClick={() => navCallback('home', setMenuTab)}
        as="as"
      ></Menu.Item>
      <Menu.Item
        name="About"
        active={menuTab === 'about'}
        onClick={() => navCallback('about', setMenuTab)}
      ></Menu.Item>
      {/* <Menu.Item name="Instructions"></Menu.Item>
      <Menu.Item name="Examples"></Menu.Item> */}
    </Menu>
  );
};

export default AppMenu;
