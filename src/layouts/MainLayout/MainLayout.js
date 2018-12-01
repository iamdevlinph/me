import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Head, Navbar } from '../../components';
import './MainLayout.css';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <MainLayoutArea>
      <Head />
      <Navbar />
      <ContentArea>
        {children}
      </ContentArea>
    </MainLayoutArea>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const MainLayoutArea = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
`;

const ContentArea = styled.div``;
