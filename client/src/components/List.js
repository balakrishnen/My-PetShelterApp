import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'


const ListAll = (props) => {
    const [allPets, setAllPets] = useState([]);
    
    
    

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then((res) =>{
            console.log(res.data);
            setAllPets(res.data);
           
                   })
        .catch((err) =>
        console.log(err));
    },[]);
    
    return(
        
        <div>
             <div  className ="divInline">
            <h1>Pet Shelter</h1>
            <p className="linkToRight"><Link to ={"/pet"}>Add a pet to the shelter</Link></p>
            </div>
            <p>These pets are looking for a good home</p>
            <div>
                <table>
                    <thead>
                    <th>Name </th>
                    <th>Type</th>
                    <th>Actions avaiable</th>
                    </thead>
                    <tbody>
                    { allPets.map((pet,index) => (
                        <tr>
                            <td>
                            {pet.name}
                             </td>
                             <td>
                              {pet.type}
                             </td>
                            <td>
                            <Link to ={`/pet/${pet._id}`}>details </Link>
                            <span>|</span>
                            <Link to ={`/pet/${pet._id}/edit`}> edit</Link>
                            </td>
                        </tr>
                ))}
                            
                    </tbody>
                  </table>
            </div>
        </div>)
}
export default ListAll;
