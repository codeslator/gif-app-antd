import { FC } from 'react';
import { Input, Col, Row, Button } from 'antd';
import { UndoOutlined } from '@ant-design/icons';


const { Search } = Input;

interface AddCategoryProps {
  onAddCategory: (value: string) => void;
  onResetCategories: () => void;
}

const AddCategory: FC<AddCategoryProps> = ({ onAddCategory, onResetCategories }) => {

  const handleSearch = (value: string) => {
    if(value.trim().length <= 1) return;
    onAddCategory(value.trim());
  };

  const handleReset = () => {
    onResetCategories();
  };

  return (
    <Row justify="center">
      <Col
        xs={4}
        sm={{
          span: 4,
          push: 1
        }}
        md={{
          span: 4,
          push: 1
        }}
        lg={{
          span: 3,
          push: 1
        }}
      >
        <Button size="large" type="primary" danger onClick={handleReset}>
          <UndoOutlined />
        </Button>
      </Col>
      <Col
        xs={20}
        sm={{
          span: 12,
          pull: 1
        }}
        md={{
          span: 12,
          pull: 1
        }}
        lg={{
          span: 12,
          pull: 1
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