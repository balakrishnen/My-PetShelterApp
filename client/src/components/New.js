import React,{useEffect,useState} from 'react';
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const New = (props) => {
  
        const [name, setName] = useState("");
        const [type, setType] = useState("");
        const [description, setDescription] = useState("");
        const [skill1, setSkill1] = useState("");
        const [skill2, setSkill2] = useState("");
        const [skill3, setSkill3] = useState("");
        const [likes, setLikes] = useState("");
        const [errs, setErrs] = useState("");
        
        console.log(props);
        
        
        const  onSubmitHandler = e => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/pet/', {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3,
                likes
            })
            .then(res=>{
                if(res.data.errors){
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else{
                    console.log(res.data);
                    navigate("/");
                }
            })
            .catch(err=>console.log(err))
            }
            return(
                <div>
                    <h1> Add a new pet</h1>
                    <Link to ="/">
                       <p>Home</p>  
                    </Link>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>Name:</label>
                            <input type ="text"
                         
                            onChange= {(e) => setName(e.target.value)}
                            />
                             {
                                errs.name ? <span className="error-text">{errs.name.message}</span> : null
                              }
                              {
                                  name.length <3 && name.length >0?
                                  <span className="error-text">name &gt; {name.length} </span>
                                  :null
                              }
                            </div>
                            <div>
                            <label>Type:</label>
                            <input type ="text"
                            
                            onChange= {(e) => setType(e.target.value)}
                            />
                            {
                                errs.type ? <span  className="error-text">{errs.type.message}</span> : null
                              }
                               {
                                  type.length <3 && type.length >0 ?
                                  <span className="error-text">type &gt; {type.length} </span>
                                  :null
                              }
                           </div>
                           <div>
                            <label>Description:</label>
                            <input type ="text"
                            onChange= {(e) => setDescription(e.target.value)}
                            />
                            {
                                errs.description ? <span  className="error-text">{errs.description.message}</span> : null
                              }
                               {
                                  description.length <3 && description.length >0?
                                <span className="error-text">description &gt; {description.length} </span>
                                  :null
                              }
                            </div>
                            <div>
                            <label>Skill1:</label>
                            <input type ="text"
                            onChange= {(e) => setSkill1(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Skill2:</label>
                            <input type ="text"
                            onChange= {(e) => setSkill2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Skill3:</label>
                            <input type ="text"
                            onChange= {(e) => setSkill3(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type ="submit">Add Pet</button>
                            <button onClick ={() => navigate("/")}>Cancel</button>
                        </div>

                    </form>

                </div>
            )
}
export default New;