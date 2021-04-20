import React from 'react'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import { FiShoppingCart} from 'react-icons/fi';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <p>Cobble Hill Miniatures</p>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/shop'>Shop</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li className={navStyles.ico}>
          <FiShoppingCart/>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
