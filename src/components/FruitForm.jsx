import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState('')
  const [sweetness, setSweetness] = useState(1)
  const [color, setColor] = useState(COLORS[1])
  const [seeds, setSeeds] = useState('yes')
  const [validateErrors, setValidateErrors] = useState({})


  const navigate = useNavigate()

  const uniqueName = fruits.find((fruitName) => fruitName.name.toLowerCase() === name.toLowerCase());



  useEffect(() => {
    const errors = {}
    if (name.length > 20) {
      errors.name = ("Name must be 20 characters or less")
    }
    if (name.length < 3) {
      errors.name = ("Name must be 3 or more characters")
    }
    if (uniqueName) {
      errors.name = ("Name already exists")
    }
    if (sweetness < 1 || sweetness > 10) {
      errors.sweetness = ("Sweetness must be between 1 and 10")
    }
    setValidateErrors(errors)
  }, [name, sweetness])


  const onSubmit = e => {
    e.preventDefault();

    const fruitInfo = {
      name,
      sweetness,
      color,
      seeds
    }

    console.log(fruitInfo)
    
    setName('');
    setSweetness(1);
    setColor(COLORS[1]);
    setSeeds('yes');

    setValidateErrors({});


  }


  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>


      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <div
      className='error'
      style={{color: 'red', textAlign: 'top', fontSize: '12px'}}
      >
        {validateErrors.name && ` * ${validateErrors.name}`}
      </div>


      <label>
        Select a Color
        <select
        defaultValue={COLORS[1]}
        onChange={e => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>


      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          min={"1"}
          max={"10"}
          onChange={e => setSweetness(e.target.value)}
          defaultValue={1}
        />
      </label>
      <div
      className='error'
      style={{color: 'red', textAlign: 'top', fontSize: '12px'}}
      >
        {validateErrors.sweetness && ` * ${validateErrors.sweetness}`}
      </div>


      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={(e) => setSeeds('no')}
        />
        No Seeds
      </label>


      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          onChange={(e) => setSeeds('yes')}
          checked={seeds==='yes'}
        />
        Seeds
      </label>


      <button
        type="submit"
        disabled= {Object.keys(validateErrors).length > 0}
        onClick={() => navigate('/')}
      >
        Submit Fruit
      </button>

    </form>
  );
}

export default FruitForm;
