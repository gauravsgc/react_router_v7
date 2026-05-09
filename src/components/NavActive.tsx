import { NavLink } from "react-router"
import type { CSSProperties } from "react"

const baseNavLinkStyle: CSSProperties = {
  display: "inline-block",
  margin: "0 16px",
  padding: "10px 14px",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: "8px",
  transition: "background-color 0.2s ease, color 0.2s ease",
}

const navLinkStyle = ({ isActive }: { isActive: boolean }): CSSProperties => ({
  ...baseNavLinkStyle,
  color: isActive ? "white" : "#1e5388",
  backgroundColor: isActive ? "#1e5388" : "transparent",
})

const Nav = () => {
  return (
    <div>
        <NavLink to='/' style={navLinkStyle}>Home</NavLink>
        <NavLink to='/contact' style={navLinkStyle}>Contact</NavLink>
    </div>
  )
}

export default Nav