import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return <div></div>;
}

export default App;
