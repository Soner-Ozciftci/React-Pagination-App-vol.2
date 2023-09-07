import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us");
      const data = await res.json()
        console.log(data)  
        setLoading(false)
        setUsers(data.result)
    };
    fetchUsers()
  },[]);

  return (
  <div>
<h1>Pagination App</h1>
{
  loading ? <p>Loading...</p> : <>
  <h1>Data</h1>
  </>
}
    </div>
)
}

export default App;
