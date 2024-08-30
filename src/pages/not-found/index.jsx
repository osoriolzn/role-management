import Navbar from '../../components/navbar'
import './notfound.css'

function NotFound() {
  return (
    <>
      <Navbar />
      <figure className='not-found'>
        <img src='src/assets/page-not-found.svg' alt='Page no found' />
      </figure>
    </>
  )
}

export default NotFound
