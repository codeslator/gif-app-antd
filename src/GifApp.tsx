import { FC, Fragment, useState } from 'react';
import { Layout, Typography } from 'antd';
import { AddCategory, Brand, GifGrid } from './views/components';

const { Header, Footer, Content } = Layout;
const { Link, Title } = Typography;

interface GifAppProps {
  defaultCategories?: Array<string>;
}

const GifApp: FC<GifAppProps> = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState<Array<string>>(defaultCategories);

  const handleAddCategory = (newCategory: string) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  };

  const handleResetCategories = () => {
    setCategories([]);
  }

  return (
    <Layout className="layout">
      <Header className="layout-header">
        <Brand title="AntD GifApp" />
      </Header>
      <Content className="layout-content">
      <Title className="text-center">AntDesign GifApp</Title>
        <AddCategory onAddCategory={handleAddCategory} onResetCategories={handleResetCategories} />
        {categories.map((category) => (
          <Fragment key={category}>
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
