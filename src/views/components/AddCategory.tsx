import { Dispatch, FC, SetStateAction } from 'react';
import { Input, Col, Row } from 'antd';

const { Search } = Input;

interface AddCategoryProps {
  onAddCategory: (value: string) => void;
}

const AddCategory: FC<AddCategoryProps> = ({ onAddCategory }) => {
  const handleSearch = (value: string) => {
    if(value.trim().length <= 1) return;
    onAddCategory(value.trim());
  };

  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={{
          span: 18,
          offset: 3
        }}
        lg={{
          span: 12,
          offset: 6,
        }}
      >
        <Search
          placeholder="Search a gif"
          onSearch={handleSearch}
          size="large"
          enterButton
        />
      </Col>
    </Row>

  );
};

export default AddCategory;