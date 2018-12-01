import PropTypes from 'prop-types';
import { Head, Navbar } from '../../components';
import './MainLayout.scss';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="mainLayout">
      <Head />
      <div id="top-bar" />
      <Navbar id="navbar" />
      <div id="content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
