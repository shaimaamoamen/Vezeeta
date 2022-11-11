import React,{useState} from "react";
import "./searchbar.css"
function Searchbar({placeholder,data}){
    const [filtereddata,setfiltereddata]=useState([])
    const [wordentered,setwordentered]=useState("")
    const handlefilter=(event)=>{
        const searchword=event.target.value;
        setwordentered(searchword)
        const newfilter=data.filter((value)=>{
            return value.title.toLowerCase().includes(searchword.toLowerCase())
        })
        if(searchword===""){
            setfiltereddata([])
        }
        else{
            setfiltereddata(newfilter)
        }
    }
    const clearinput=()=>{
        setfiltereddata([]);
        setwordentered("");
    }
    return(
        <div className="search" >
            <div className="searchinputs"  >
              <input type="text" placeholder={placeholder} value={wordentered} onChange={handlefilter}/>
              {filtereddata.length===0?<img  className="img2" src="images/10.png" /> :
              <button id="clearbtn" onClick={clearinput}>
                <img className="img3" src="images/11.png"/>
              </button>
              }
            </div>
            {filtereddata.length !=0 &&(
            <div className="datares">
                {filtereddata.slice(0,6).map((value,key)=>{
                    return (
                   
                        <a className="datait" href={value.link} target="_blank">
                            <div>
                                {value.title}
                            </div>
                        </a>
             
                    )
                })}
              </div>
)}
        </div>
    )
}
export default Searchbar;