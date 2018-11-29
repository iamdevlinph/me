import PropTypes from 'prop-types';
import { Head, Navbar } from '../components';

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Head />
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
