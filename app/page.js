"use client"
import React, {useState} from "react";

const page = () =>{
    const [title,settitle] = useState("");
    const [desc,setdesc] = useState("");
    const [maintask, setmaintask] = useState([]);


    const submitHandler = (e)=>{
        e.preventDefault();
        setmaintask([...maintask,{title,desc}]);
        settitle("");
        setdesc("");
        console.log(maintask);
        const deletetask = (i) => {
            let copytask = [...maintask]
            copytask.splice(i,1)
            setmaintask(copytask)

        }
    }

    let renderTask =<h2>No Task Availabel</h2>
    if(maintask.length>0){
        renderTask = maintask.map((t,i)=>{
            return<li key={i} className="flex items-center justify-between mb-8">
                 <div className="flex items-center justify-between w-2/3">
                <h5 className="text-2x1 font-semibold">{t.title}</h5>
                <h6 className="text-x1 font-semibold">{t.desc}</h6>
            </div>
            <button 
            onClick={()=> {
                deletetask (i)
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
            </li>
        })
    
    }

    return (
        <>
          <h1 className="p-5 text-xl bg-black text-white text-center ">
            MyToDo List
            </h1>
         <form onSubmit={submitHandler}>
            <input 
            type="text"
             className="text-2xl border-zinc-800 border-2 m-8 py2 px-4" 
            placeholder="Enter Title here"
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}
            
            />
           <input
            type="text"
             className="text-2xl border-zinc-800 border-2 m-8 py2 px-4" 
            placeholder="Descripation"
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}
            
            />

            <button className="bg-white text-black  px-4 py-2 text-2xl font-bold rounded m-5 ">Add Task</button>

            </form>
            <hr />
            <div 
            className="p-15 bg-slate200">
                <ul>
                    {renderTask}
                </ul>


            </div>
        </>
    )


}

export default page
