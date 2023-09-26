import { useEffect, useState } from 'preact/hooks'
import Feed from './sections/feed/Feed'
import Header from './sections/header/Header'
import { createContext } from 'preact';
import Model from './components/model/model';

export const StoreData = createContext(null);

export function App() {
  const [data, setData] = useState({});
  const [enableModel, setEnableModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [filteredData, setFilteredData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('http://localhost:5000/api/projects');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const keywords = searchQuery.toLowerCase().split(' ');
    const filtered = data.filter((item) =>
      keywords.every((keyword) =>
        JSON.stringify(item).toLowerCase().includes(keyword)
      )
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  console.log(filteredData);

  return (
    <StoreData.Provider value={{data, 
      setData, 
      enableModel, 
      setEnableModel, 
      modelData, 
      setModelData, 
      filteredData, 
      setFilteredData, 
      searchQuery, 
      setSearchQuery}}>
      {enableModel ? <Model/> : <></>}
      <Header/>
      <Feed/>
    </StoreData.Provider>
  )
}
