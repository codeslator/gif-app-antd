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
    <Card
      hoverable
      cover={
        <div className="cover">
          <img alt={title} src={url} className="cover-img" />
        </div>
      }>
      <Meta title={title} />
    </Card>
  );
};

export default GifItem;