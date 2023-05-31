import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    //fetch("http://localhost:4000")
    fetch("https://dashboard.render.com/web/srv-chr3od0rddlba9q02ivg/deploys/dep-chrhspjhp8ud4n2oj97g")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;