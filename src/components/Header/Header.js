import { Link } from 'react-router-dom'
import './Header.css'

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1)
  return <Link to={`/${page}`} className='headerlink-title'>{title}</Link>
}

const Header = () => {
  return (
    <div className='header'>
      <HeaderLink page="home" />
      <HeaderLink page="shop" />
      <HeaderLink page="contact" />
    </div>
  )
}

export default Header
