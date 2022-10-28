import { FC, useEffect } from 'react';
import { Typography, Divider, Col, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useGif } from '../../hooks';
import { Gif } from '../../global';
import GifItem from './GifItem';

const { Title } = Typography;

interface GifGridProps {
  category: string;
}

const GifGrid: FC<GifGridProps> = ({ category }) => {
  const { fetchGifs, gifs, isLoading } = useGif();

  useEffect(() => {
    fetchGifs(category);
  }, [category, fetchGifs])


  return (
    <>
      <Title level={2}>{category}</Title>
      {isLoading && (
        <Title level={4}>Loading...</Title>
      )}
      <Row gutter={[16, 24]}>
        {gifs.map((gif: Gif) => (
          <Col xs={12} sm={8} md={6} lg={4} key={gif.id}>
            <GifItem gif={gif} />
          </Col>
        ))}
      </Row>
      <Divider><EllipsisOutlined /></Divider>
    </>
  );
};

export default GifGrid;