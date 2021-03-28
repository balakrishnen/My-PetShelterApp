import React, { useEffect, useState } from 'react'
import{Link} from '@reach/router';
import axios from 'axios';
const Detail = (props) => {
    const [detail, setDetail] = useState({});
    console.log(props);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res =>{
               console.log(res.data)
               setDetail(res.data)
            } )
    }, [])
    return (
        <div>
            <p>Name:{detail.name} </p>
            <p>Type:{detail.type} </p>
            <p>Description:{detail.description}</p>
            <p>Skill1:{detail.skill1} </p>
            <p>Skill2:{detail.skill2} </p>
            <p>Skill3:{detail.skill3}</p>
            <p>Likes:{detail.likes}</p>
            <Link to ="/">
                <button>Back</button>
            </Link>
        </div>
    )
}
export default Detail;