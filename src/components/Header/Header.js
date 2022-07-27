import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className='store-header'>
      <div className='container btn-header'>               
        <Link to="/" className='button-text button button-cart'>Home page</Link>
        <Link to="/cart" className='button-text button button-cart'>Cart</Link>                  
      </div>
    </header>
  )
}
export default Header;