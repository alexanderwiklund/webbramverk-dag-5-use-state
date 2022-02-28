// Här är ett exempel på en counter som inte fungerar.
// Ni kan se i loggen att variabeln counter uppdateras
// men eftersom react inte vet om ändringen så kommer
// vi aldrig se något annat värde än 0.
// Därför behöver vi useState som vi använder i App.js

function ExempelTrasigCounter() {
  let counter = 0;
  const addOne = () => {
    counter = counter + 1;
    console.log(counter);
  };
  const subtractOne = () => {
    counter = counter - 1;
    console.log(counter);
  };
  return (
    <div className="App">
      <button onClick={subtractOne}>-</button>
      <span>{counter}</span>
      <button onClick={addOne}>+</button>
    </div>
  );
}

export default ExempelTrasigCounter;
