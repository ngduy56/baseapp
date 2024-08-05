import { ApiClientWithToken } from '@/axios/axiosClient';
import Loader from '@/components/common/Loader';
import { FC, useEffect } from 'react';

interface FirstComponentProps {}

const FirstComponent: FC<FirstComponentProps> = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await ApiClientWithToken.get('https://jsonplaceholder.typicode.com/posts');
      console.log('response', response);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Loader />
      <p>Welcome to the Application!</p>
    </div>
  );
};

export default FirstComponent;
