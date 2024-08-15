import data from '../../api/data.json'
import ItemCard from './ItemCard'
export interface dataTypes {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: number;
}

const Home = () => {

  return (
  <>
    <ItemCard data={data}/>
  </>
  )
}

export default Home