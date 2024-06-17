import React, { useState, useEffect, useRef } from "react";
function MyComponent() {
  /*  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [comment, setComment] = useState("");
  let [payment, setPayment] = useState();
  let [shipping, setShipping] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <h4>Name: {name}</h4>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <h4>quantity: {quantity}</h4>

      <textarea
        value={comment}
        placeholder="Enter Delivery Instructions"
        onChange={handleCommentChange}></textarea>
      <h4>Comment: {comment}</h4>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <h4>Payment: {payment}</h4>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />{" "}
        Delivery
      </label>
      <h4>shipping: {shipping}</h4>
    </div>
  );
  let [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });
  function handleCarModelChange(event) {
    setCar((car) => ({ ...car, model: event.target.value }));
  }
  function handleCarYearChange(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }
  function handleCarMakeChange(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleCarYearChange} />
      <input type="text" value={car.make} onChange={handleCarMakeChange} />
      <input type="text" value={car.model} onChange={handleCarModelChange} />
    </div>
  );
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
  function addFood() {
    let newFoods = document.getElementById("foodInput").value;
    setFoods((f) => [...f, newFoods]);
  }
  function removeFood(index) {
    setFoods(foods.filter((_, i) => i != index));
  }
  return (
    <div>
      <h3>List of Foods:</h3>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => removeFood(index)} key={index}>
            {food}
          </li>
        ))}{" "}
      </ul>
      <input type="text" id="foodInput" />
      <button onClick={addFood}>Add</button>
    </div>
  );
  let [cars, setCars] = useState([]);
  let [carYear, setCarYear] = useState(new Date().getFullYear());
  let [carMake, setCarMake] = useState("");
  let [carModel, setCarModel] = useState("");

  function addCar() {
    const newCars = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCars]);
    setCarYear(new Date().getFullYear());
    setCarModel("");
    setCarMake("");
  }
  function removeCar(index) {
    setCars((c) => c.filter((_, i) => i != index));
  }
  function yearChange(event) {
    setCarYear(event.target.value);
  }
  function makeChange(event) {
    setCarMake(event.target.value);
  }
  function modelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car objects:</h2>
      <ul>
        {cars.map((element, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {element.year} {element.make} {element.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={yearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={makeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={modelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={addCar}>add car</button>
    </div>
    
  );
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);
  function addCount() {
    setCount((c) => c + 1);
  }
  function subCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <h4 style={{ color: color }}>Count: {count}</h4>
      <button onClick={addCount}>Inc</button>
      <button onClick={subCount}>Dec</button>
      <button onClick={changeColor}>Change color</button>
    </>
  );
  let [width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );*/
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("added");
    console.log(inputRef);
  });
  function handleclick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleclick}>click</button>
    </>
  );
}
export default MyComponent;
