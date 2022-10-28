import { FC } from 'react';
import { Menu } from 'antd';

const items = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'trending',
    label: 'Trending',
  },
  {
    key: 'gifs',
    label: 'Gifs',
  },
]

const NavBar: FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;