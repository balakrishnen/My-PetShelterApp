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
    const deletePet = (petId) =>{
        axios.delete("http://localhost:8000/api/pet/" +petId)
        .then((res) => {
            console.log(res.data);
            const remaining = allPets.filter((pet) => pet._id !== petId);
            setAllPets(remaining);
        })
        .catch((err) => console.log(err) )
    }
    return(
        
        <div>
            <p><Link to ={"/pet"}>Add a pet</Link></p>
          
            <div>
                <table>
                    <thead>
                    <th>Pet </th>
                    <th>Type</th>
                    <th>Actions avaiable</th>
                    </thead>
                    <tbody>
                    { allPets.map((pet,index) => (
                        <tr>
                            <td>
                             <Link to ={`/pet/${pet._id}`}>{pet.name}</Link>
                             </td>
                             <td>
                              {pet.type}
                             </td>
                            <td>
                            <button><Link to ={`/pet/${pet._id}/edit`}>Edit</Link></button>
                            <button className=".deleteBtn" onClick ={() => deletePet(pet._id)}>Adopt</button>
                            </td>
                        </tr>
                ))}
                            
                    </tbody>
               
                
                  </table>
            </div>
        </div>)
}
export default ListAll;
