import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export const ButtonDetail = ({ record }) => {
  const nav = useNavigate();

  const handleDetailClick = () => {
    // eslint-disable-next-line react/prop-types
    nav(`/jobAdmin/${record.id}`);
  };

  return (
    <Button color='primary' variant='outlined' onClick={handleDetailClick}>
      Chi tiết
    </Button>
  );
};
