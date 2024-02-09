import { Link } from "react-router-dom";
import { useFruitContext } from "../context/FavFruitContext";


const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useFruitContext()

  const fruitName = fruits.find( (fruitFound) => fruitFound.id == favFruitId)


  return(
    <div>
      <h2>Favorite Fruit </h2>
      <Link to={`/fruits/${favFruitId}`}>{fruitName.name}</Link>
    </div>
  )

}

export default FavoriteFruit;
