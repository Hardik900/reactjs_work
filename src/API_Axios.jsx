import React, {useContext,useEffect, useState} from 'react';
import Use_Effect from './Use_Effect';
import Navbar from './Navbar';
import "./index.css";
// import axios from './axios';
import axios from 'axios';
import Note_Context from './Note_Context';

function API_Axios(){
        const [data, setData] = useState([])
        const [updateData, setUpdateData] = useState()
        const [deleteData, setDeleteData] = useState()
        const [error, setError] = useState("")
        const a = useContext(Note_Context)
        useEffect(()=>{
            a.update()
        },[])

        const post = async ()=>{
            try{
                const value = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(value,"dcdf")
                setData(value.data)
            }catch(error){
                setError(error.message)
            }
        }
        console.log(data,"data")

        useEffect(()=>{
            post();
        },[])

    return(
        <>
            <Navbar />
            <h1 style={{color:"white", textAlign:"center"}}>Axios</h1>
            {error !== "" && <h1 style={{color:"orange",textAlign:"center"}}>{error}</h1>}
            <div className='grid'>
                <table className="Card" >
                    <tr>
                        <td style={{border: "1px solid white", padding:".5rem", color:"aqua"}}>ID</td>
                        <td style={{border: "1px solid white", padding:".5rem", color:"aqua"}}>Title</td>
                        <td style={{border: "1px solid white", padding:".5rem", color:"aqua"}}>Body</td>
                        {/* <td style={{border: "1px solid white", padding:".5rem", color:"aqua"}}>Methods</td> */}
                    </tr>
                        {
                            data.slice(0,6).map((item)=>{
                                const {title, body, id} =item
                                return(
                                        <tr >
                                            <td style={{color: "red", border: "1px solid white",padding:".5rem"}}>{id}</td>
                                            <td style={{color: "red", border: "1px solid white",padding:".5rem"}}>{title.slice(0,15).toUpperCase()}</td>
                                            <td style={{border: "1px solid white",padding:".5rem"}}>{body.slice(0,70)}</td>
                                            {/* <button className='button' onClick={()=>{update_data(id)}}>Update data</button>
                                            <button className='button' onClick={()=>{delete_data(id)}} >Delete data</button> */}
                                        </tr>)
                            })    
                        }
                </table>
            </div>
            <h1 style={{color:"yellow", textAlign:"center"}}>Context Api</h1>
            <h3 style={{color:"blue", textAlign: "center"}}>Data will change in 3 second</h3>
            <h2 style={{color:"white", textAlign:"center"}}>This is About {a.state.name} and he is in class {a.state.class}</h2>
        </>
    )
}

export default API_Axios;