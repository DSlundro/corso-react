import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const db = 'https://react-http-91377-default-rtdb.europe-west1.firebasedatabase.app/meals.json';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMeals = async () => {

      const response = await fetch(db);
      if(!response.ok) throw new Error(`Error ${response.status}! Something went wrong!`);
      const responseData = await response.json();
      
      const loadedMeals = [];
      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

      fetchMeals().catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  },[]);

  let content;

  if(isLoading) content = <p className={classes.mealsLoading}>Loading...</p>
  if(error) content = <p className={classes.mealsError}>{error}</p>

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {content}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
