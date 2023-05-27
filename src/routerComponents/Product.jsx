
import { NavLink , Outlet} from "react-router-dom"

export default function Product() {
    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold': 'normal', 
            textDecoration: isActive? 'none': 'underline'
        }
    }
  return (
    <div>
        <div>
            <input type="search" placeholder='Search Product'/>
        </div>
        <nav>
            <NavLink style={navLinkStyles} to="featured">Featured</NavLink>
            <NavLink style={navLinkStyles} to="new">New</NavLink>
        </nav>
        <Outlet/>
        
    </div>
  )
}
