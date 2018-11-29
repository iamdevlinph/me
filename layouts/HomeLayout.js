import { Fragment } from 'react';
import { Head, Navbar } from '../components';

const HomeLayout = (props) => (
  <div>
    <Head></Head>
    <Navbar></Navbar>
    {props.children}
  </div>
)

export default HomeLayout
