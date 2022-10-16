import { Layout, Typography } from 'antd';
import Brand from './views/components/Brand';
import NavBar from './views/components/NavBar';

const { Header, Footer, Content } = Layout;
const { Link } = Typography;

function GifApp() {

  return (
    <Layout className="layout">
      <Header className="layout-header">
        <Brand title="AntD GifApp" />
        <NavBar />
      </Header>
      <Content className="layout-content"></Content>
      <Footer>
        <Link href="https://codeslator.dev" target="_blank">
          codeslator.dev
        </Link> © {new Date().getFullYear()} Created by CodeslatorDev
      </Footer>
    </Layout>
  );
};

export default GifApp;
