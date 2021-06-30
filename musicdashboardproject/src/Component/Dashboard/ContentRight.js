import React, { useEffect,useState } from 'react'
import PieChart from './PieChart';
const userData = [
    {
        id:1,
        name: "Annette Watson",
        hour: 9.3
    },
    {
        id:2,
        name: "Calvin Steward",
        hour: 8.9
    },
    {
        id:3,
        name: "Raplh Richards",
        hour: 8.7
    },
    {
        id:4,
        name: "Bernard Murphy",
        hour: 8.2
    },
    {
        id:5,
        name: "Arlene Robertson",
        hour: 8.2
    },
    {
        id:6,
        name: "Jane Lane",
        hour: 8.1
    },
    {
        id:7,
        name: "Pat McKinney",
        hour: 7.9
    },

]
export default function ContentRight() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('asc');

    useEffect(() =>{
        const sortArray = type =>{
            if(type === 'asc'){
                const sorted = [...userData].sort((a,b) => b.hour - a.hour)
                setData(sorted)
            }else{
                const sorted = [...userData].sort((a,b) => a.hour - b.hour)
                setData(sorted)
            }
        }
        sortArray(sortType)
    },[sortType])
   
    const Asc = (e) =>{
          return userData.sort((a,b) => b.hour - a.hour)
        
    }
    const Des = () =>{
        userData.sort(function(a,b) {
        return b.hour - a.hour;
    })
}
    return (
        <div className="p-1">
            <div className="row">
                <div className="col-m-12 col-lg-6 fanBox-Wrapper">
                    <div className="fanContainer">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Fans/Hours listening to you</h5>
                            <select onChange={(e) => setSortType(e.target.value)}>
                                <option value="asc">Ascending</option>
                                <option value="des">Descending</option>
                            </select>
                        </div>
                    </div>
                    <div className="fanHourWrapper">
                        {data.map(e =>(
                            <div key={e.id}>
                                <div className="d-flex justify-content-between align-items-center fanItem">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="fanImgHolder"></div>
                                        <h5>{e.name}</h5>
                                    </div>
                                    <div><h6>{e.hour}</h6></div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-m-12 col-lg-6">
                        <PieChart></PieChart>
                </div>
            </div>
        </div>
    )
}
