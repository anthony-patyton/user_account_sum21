import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => (
  <Menu>
    <NavLink to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to='/profile'>
      <Menu.Item>
        {/* will put username */}
        username
      </Menu.Item>
    </NavLink>
  </Menu>
)

export default NavBar;