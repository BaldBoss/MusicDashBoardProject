import React, { useEffect,useState } from 'react'

const userData = [
    {
        id:1,
        name: "Annette Watson",
        value: 365
    },
    {
        id:2,
        name: "Calvin Steward",
        value: 256
    },
    {
        id:3,
        name: "Raplh Richards",
        value: 40
    },
    {
        id:4,
        name: "Bernard Murphy",
        value: 331
    },
    {
        id:5,
        name: "Arlene Robertson",
        value: 115
    },
    {
        id:6,
        name: "Jane Lane",
        value: 87
    },
    {
        id:7,
        name: "Pat McKinney",
        value: 500
    },

]
export default function Payer() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('asc');

    useEffect(() =>{
        const sortArray = type =>{
            if(type === 'asc'){
                const sorted = [...userData].sort((a,b) => b.value - a.value)
                setData(sorted)
            }else{
                const sorted = [...userData].sort((a,b) => a.value - b.value)
                setData(sorted)
            }
        }
        sortArray(sortType)
    },[sortType])
   
    return (
 
                <div className="fanBox-Wrapper">
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
                                <div className="d-flex justify-content-between align-items-center fanItem mx-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="fanImgHolder"></div>
                                        <h5>{e.name}</h5>
                                    </div>
                                    <div><h6>${e.value}</h6></div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
    )
}
