import { Button, Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Content } = Layout;
import '@/styles/App.scss';

interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor: '#001529',
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <div style={{ width: '20%', fontWeight: 'bold', color: 'white', fontSize: 20 }}>
          AUCTION
        </div>
        <div style={{ flex: 1, color: 'white' }}>
          <span>Numbers</span>
          <span>Phones</span>
        </div>

        <div style={{ width: 'max-content' }}>
          <Button style={{ marginRight: '4px', borderRadius: '4px', fontWeight: 'bold' }}>
            Connect Telegram
          </Button>
          <Button style={{ marginRight: '4px', borderRadius: '4px', fontWeight: 'bold' }}>
            Connect TON
          </Button>
        </div>
      </Header>
      {/* , backgroundColor: '#001529' */}
      <Content style={{ height: '100vh' }}>
        <div
          style={{
            height: '100vh',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          {children}
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
