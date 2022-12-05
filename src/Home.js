import { useState } from "react";

const Home = () => {
    const [name,   setName] = useState('mario','30');
    const handleClick = () => {
            setName('luijg'); 
    }
     return ( 
        <div className="home">
 <h2>Homepage</h2>
 <p>{name}</p>
  
 <button onClick={handleClick} >click it </button>
 </div>
       
     );
}
 
export default Home;