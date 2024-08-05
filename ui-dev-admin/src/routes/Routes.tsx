import MainContent from '@/components/common/MainContent';
import MainPage from '@/pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route path="usernames" element={<MainContent />} /> */}
          <Route path="numbers" element={<MainContent />}></Route>
          <Route path="numbers/:id" element={<div>Detail number</div>}></Route>
        </Route>
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </>
  );
};

export default Router;
