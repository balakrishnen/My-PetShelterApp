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
                skill3
                
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
                     <div  className ="divInline">
                        <h1>Pet Shelter</h1>
                        <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
                    </div>
                    <p> Know a pet needing a home ?</p>
                    
                    <form className="divBorder" onSubmit={onSubmitHandler}>
                        <div  className="row">
                        <div className="column left">
                            <br />
                            <br />
                            <label>Pet Name:</label>
                            <input type ="text"
                            value ={name}
                            onChange= {(e) => setName(e.target.value)}
                            />
                             {
                                errs.name ? <span className="error-text">{errs.name.message}</span> : null
                              }
                              {
                                  name.length <3 && name.length >0?
                                  <span className="error-text">name &gt; 3 </span>
                                  :null
                              }
                            
                           
                            <label>Pet Type:</label>
                            <input type ="text"
                            value ={type}
                            onChange= {(e) => setType(e.target.value)}
                            />
                            {
                                errs.type ? <span  className="error-text">{errs.type.message}</span> : null
                              }
                               {
                                  type.length <3 && type.length >0 ?
                                  <span className="error-text">type &gt; 3 </span>
                                  :null
                              }
                          
                           
                            <label>Pet Description:</label>
                            <input type ="text"
                            value ={description}
                            onChange= {(e) => setDescription(e.target.value)}
                            />
                            {
                                errs.description ? <span  className="error-text">{errs.description.message}</span> : null
                              }
                               {
                                  description.length <3 && description.length >0?
                                <span className="error-text">description &gt; 3 </span>
                                  :null
                              }
                            </div>
                            </div>
                           {/* <div className="row"> */}
                           <p>Skills (optional)</p>
                            <div className="column right">
                            
                            <label>Skill1:</label>
                            <input type ="text"
                            value ={skill1}
                            onChange= {(e) => setSkill1(e.target.value)}
                            />
                        
                            <label>Skill2:</label>
                            <input type ="text" 
                            value ={skill2}
                            onChange= {(e) => setSkill2(e.target.value)}
                            />
                        
                            <label>Skill3:</label>
                            <input type ="text" 
                            value ={skill3}
                            onChange= {(e) => setSkill3(e.target.value)}
                            />
                        </div>
                       
                        <div align="left">
                            <button type ="submit">&#9998;Edit Pet</button>
                      
                        </div> 
                        </form>

</div>

                
            )
}
export default Update;