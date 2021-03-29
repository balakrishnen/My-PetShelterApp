import React, { useEffect, useState } from 'react'
import{Link, navigate} from '@reach/router';
import axios from 'axios';
const Detail = (props) => {
    const [detail, setDetail] = useState({});
    console.log(props);

    const countLike=(e,petId) =>{
        e.target.setAttribute("disabled", true);
        axios.put("http://localhost:8000/api/pet/" +petId,{$inc: {likes: 1}})
         .then((res) => {
             console.log(res.data);
         })
         .catch((err) => console.log(err) )
       }

    const deletePet = (petId) =>{
        axios.delete("http://localhost:8000/api/pet/" +petId)
        .then((res) => {
            console.log(res.data);
          navigate('/');
        })
        .catch((err) => console.log(err) )
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res =>{
               console.log(res.data)
               setDetail(res.data)
            } )
    }, [])
    return (
        <div>
             <div  className ="divInline">
            <h1>Pet Shelter</h1>
            <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
            </div>
            
            <div className ="divInline">
            <p>Details about:{detail.name}</p>
            <button  onClick ={() => deletePet(detail._id)}>&#9750;Adopt {detail.name}</button>
            </div>
            <div className="divBorder">
            
            <p>&nbsp;&nbsp;Pet type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail.type} </p>
            <p>&nbsp;Pet description:&nbsp;&nbsp;&nbsp;{detail.description}</p>
            <p>&nbsp;&nbsp;  Skills:&emsp;{detail.skill1} <br/> &emsp;&emsp;&emsp;&emsp;{detail.skill2}<br/>&emsp;&emsp;&emsp;&emsp;{detail.skill3} </p>
            <div align="center">
            <button onClick={(e) => countLike(e,detail._id)}>&#x1F44D;&nbsp; Like {detail.name}</button>
             <span>{detail.likes} like(s)</span>
             </div>
             </div>
            
        </div>
    )
}
export default Detail;