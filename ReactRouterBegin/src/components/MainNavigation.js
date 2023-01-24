import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* We can use Link, but NavLink gives us opportunity to underline active link  */}
            <NavLink to="/" className={({isActive}) => (isActive ? classes.active : undefined)} end>
              Home
            </NavLink>
            {/* isActive is destructed value, which is boolean */}
          </li>
          <li>
            <NavLink to="/products" className={({isActive}) => (isActive ? classes.active : undefined)}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
