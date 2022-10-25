import { FC } from 'react';
import { Card } from 'antd';
import { Gif } from '../../global';

const { Meta } = Card;

interface GifItemProps {
  gif: Gif;
}

const GifItem: FC<GifItemProps> = ({ gif }) => {
  const { title, url } = gif;
  return (
    <Card hoverable cover={<img alt={title} src={url} />}>
      <Meta title={title} />
    </Card>
  );
};

export default GifItem;