import { Link, Outlet } from "react-router"

const RetailProduct = () => {
  return (
    <div>

        <Link to='/details/101'>Apple</Link>
            <Link to='/details/102'>Samsung</Link>
<Outlet />
    </div>
  )
}

export default RetailProduct