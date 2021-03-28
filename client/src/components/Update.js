import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const Update = (props) => {
  
        const [name, setName] = useState("");
        const [type, setType] = useState("");
        const [description, setDescription] = useState("");
        const [skill1, setSkill1] = useState("");
        const [skill2, setSkill2] = useState("");
        const [skill3, setSkill3] = useState("");
        const [likes, setLikes] = useState("");
        const [errs,setErrs] = useState("");
        console.log(props);
        
        useEffect(() => {
            axios.get("http://localhost:8000/api/pet/" + props.id)
                .then(res =>{
                   console.log(res.data)
                   setName(res.data.name);
                   setType(res.data.type);
                   setDescription(res.data.description);
                   setSkill1(res.data.skill1);
                   setSkill2(res.data.skill2);
                   setSkill3(res.data.skill3);
                   setLikes(res.data.likes);
                   
                } )
        }, [])
        const  onSubmitHandler = e => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/pet/" + props.id , {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3,
                likes
            })
            .then(res=>{
                console.log(res.data.errors)
                if(res.data.errors){
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else{
                    console.log(res.data);
                    navigate("/pet/"+props.id);
                }
            })
            .catch(err=>console.log(err))
            }
            return(
                <div>
                    <h1> Update Pet details</h1>
                    <Link to ="/">
                <p>Home</p>
               </Link>
                    
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>Name:</label>
                            <input type ="text"
                            value ={name}
                            onChange= {(e) => setName(e.target.value)}
                            />
                             {
                                errs.name ? <span  className="error-text">{errs.name.message}</span> : null
                              }
                            </div>
                            <div>
                            <label>Type:</label>
                            <input type ="text"
                            value ={type}
                            onChange= {(e) => setType(e.target.value)}
                            />
                             {
                                errs.type ? <span  className="error-text">{errs.type.message}</span> : null
                              }
                           </div>
                           <div>
                            <label>Description:</label>
                            <input type ="text"
                            value ={description}
                            onChange= {(e) => setDescription(e.target.value)}
                            />
                            {
                                errs.description ? <span  className="error-text">{errs.description.message}</span> : null
                              }
                            </div>
                            <div>
                            <label>Skill1:</label>
                            <input type ="text"
                            value ={skill1}
                            onChange= {(e) => setSkill1(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Skill2:</label>
                            <input type ="text"
                            value ={skill2}
                            onChange= {(e) => setSkill2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Skill3:</label>
                            <input type ="text"
                            value ={skill3}
                            onChange= {(e) => setSkill3(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Likes:</label>
                            <input type ="text"
                            value ={likes}
                            onChange= {(e) => setLikes(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type ="submit">Update </button>
                            <button onClick ={() => navigate("/")}>Cancel</button>
                        </div>

                    </form>

                </div>
            )
}
export default Update;