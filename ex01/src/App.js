import "./App.css";

function App() {
  const categories = [
    "t-shirts",
    "hats",
    "shorts",
    "jackets",
    "pants",
    "shoes",
  ];

  return (
    <>
      {categories.map((el, idx) => (
        <div key={idx}>{el}</div>
      ))}
    </>
  );
}

export default App;
