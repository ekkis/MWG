
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header
        color='transparent' fixed
        changeColorOnScroll={{ height: 400, color: 'white' }}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;