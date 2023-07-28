import { useState, useEffect } from "react";
const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/posts") // add any other free api if you want
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    },
    [
      // --- NO DEPENDENCY ---
    ],
  );

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{JSON.stringify(item.body)}</p>
          {/* stringifying version should be look like ... */}
        </div>
      ))}
    </div>
  );
};

export default FetchingData;
