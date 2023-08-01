import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, CalendarOutlined, FundOutlined } from '@ant-design/icons';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import InkingChoir from './components/InkingChoir';
import TableComponent from './components/TableComponent'; // Import the TableComponent
import ContributionPage from './components/ContributionPage';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="app-container">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.SubMenu key="3" icon={<UserOutlined />} title="Members">
              <Menu.Item key="3.1">
                <Link to="/members/all">All Members</Link>
              </Menu.Item>
              <Menu.Item key="3.2">
                <Link to="/members/add">Add Member</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4" icon={<CalendarOutlined />}>
              <Link to="/events">Events</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FundOutlined />}>
              <Link to="/contribution">Contribution</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="main-content">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members/all" element={<TableComponent />} /> {/* Render TableComponent for the /members/all route */}
            <Route path="/members/add" element={<InkingChoir />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contribution" element={<ContributionPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
