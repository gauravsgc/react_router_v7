
import{useParams} from 'react-router'
export const Details = () => {
  const { id } = useParams();
  return (
    <div>Details for product {id}</div>
  )
}
