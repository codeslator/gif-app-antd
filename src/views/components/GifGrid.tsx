import { FC } from 'react';
import { Typography, Divider  } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Title } = Typography;


interface GifGridProps {
  category: string;
}

const GifGrid: FC<GifGridProps> = ({ category }) => {
  return (
    <>
      <Title level={2}>{category}</Title>
      <Divider><EllipsisOutlined /></Divider>
    </>
  );
};

export default GifGrid;