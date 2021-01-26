import Header from '../header';
import Footer from '../footer';

function Layout({children}) {
  return (
    <div className="main">
      <Header/>
      <div className="min-h-60vh">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
