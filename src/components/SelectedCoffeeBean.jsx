
import { useCoffee } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useCoffee() //useContext(CoffeeContext);

  // console.log("coffeeBean:", coffeeBean);
  // console.log("setCoffeeBeanId:", setCoffeeBeanId);
  

  return (
    <div className="selected-coffee">
      <h2>Current Selection: {coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;
