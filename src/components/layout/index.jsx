/* eslint-disable react/prop-types */
import './layout.css'

function Layout({ children }) {
  return (
    <>
      <div className='layout'>
        {children}
      </div>
    </>
  );
}

export default Layout;
