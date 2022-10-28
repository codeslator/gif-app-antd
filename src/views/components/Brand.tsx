import { FC } from 'react';
import { Typography } from 'antd';
import Logo from '../assets/img/react.svg';

const { Text } = Typography;

interface BrandProps {
  title: string;
}

const Brand: FC<BrandProps> = ({ title }) => {
  return (
    <div>
      <img src={Logo} alt="logo" />
      <Text strong className="brand-title">{title}</Text>
    </div>
  );
};

export default Brand;