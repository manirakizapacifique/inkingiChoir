import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, CalendarOutlined, FundOutlined } from '@ant-design/icons';

const HeaderLinks = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to="/members">Members</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<CalendarOutlined />}>
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<FundOutlined />}>
        <Link to="/contribution">Contribution</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderLinks;
