import { Outlet } from 'react-router-dom';
import Header from './Header';

const Screen = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export default Screen;
