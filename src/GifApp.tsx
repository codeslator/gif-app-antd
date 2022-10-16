import { FC, Fragment, useState } from 'react';
import { Layout, Typography } from 'antd';
import { AddCategory, Brand, GifGrid, NavBar } from './views/components';

const { Header, Footer, Content } = Layout;
const { Link, Title } = Typography;

interface GifAppProps {
  defaultCategories: Array<string>;
}

const GifApp: FC<GifAppProps> = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState<Array<string>>(defaultCategories);
  return (
    <Layout className="layout">
      <Header className="layout-header">
        <Brand title="AntD GifApp" />
        <NavBar />
      </Header>
      <Content className="layout-content">
      <Title className="text-center">AntD GifApp</Title>
        <AddCategory categories={categories} setCategories={setCategories} />
        {categories.map((category, index) => (
          <Fragment key={index}>
            <GifGrid category={category} />
          </Fragment>
        ))}
      </Content>
      <Footer>
        <Link href="https://codeslator.dev" target="_blank">
          codeslator.dev
        </Link> © {new Date().getFullYear()} Created by CodeslatorDev
      </Footer>
    </Layout>
  );
};

export default GifApp;
