import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchusers = async () => {
      const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
      ;
    };
  });

  return <div>Pagination App</div>;
}

export default App;
