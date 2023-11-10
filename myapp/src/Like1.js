import React,{useState} from 'react'

const MapFunction1 = () => {
    const [data, setData] = useState([

        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
        { id: 4, name: 'Parol', age: 50 },
      ]);

      const handlInputChange=(e)=>{
        setSearch(e.target.value)
      }
      
      const[ search,setSearch]= useState('');

      const filteredData = data.filter((searchValue) => {
        const itemSearch = search.toLowerCase();
        return (
          searchValue.name.toLowerCase().includes(itemSearch) ||
          searchValue.id.toString().includes(itemSearch) ||
          searchValue.age.toString().includes(itemSearch)
        )
      })
    
      const rows = filteredData.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.id}</td>
        </tr>
      ));



  return (
    
    <div>
      <input type='text'  value={search} onChange={handlInputChange} />
        <h1>2</h1>
      <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

export default MapFunction1