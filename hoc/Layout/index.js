
import { Fragment } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header
        color='transparent' fixed
        changeColorOnScroll={{ height: 400, color: 'white' }}
      />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;