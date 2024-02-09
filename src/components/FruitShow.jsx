import { useParams } from "react-router-dom";

function FruitShow( { fruits }) {
  let { fruitId } = useParams()
  const findFruit = fruits.find((fruit) => fruit.id == fruitId )



  return (
    <div>
      <h2>
        {findFruit.name}
      </h2>
      <h2>
        Color: {findFruit.color}
      </h2>
      <h2>
        Sweetness: {findFruit.sweetness}
      </h2>
      <h2>
        Seeds: {findFruit.seeds}
      </h2>
    </div>
  );
}

export default FruitShow;
