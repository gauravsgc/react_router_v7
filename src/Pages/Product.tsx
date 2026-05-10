import { Link, Outlet } from "react-router"

const Product = () => {
  return (
    <div>   <Link to='retail'>retailproduct</Link>
        <Link to='company'>companyproduct</Link>
        <Outlet />
    </div>
  )
}

export default Product