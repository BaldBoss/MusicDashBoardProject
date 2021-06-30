import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Genre.module.css'
import {Animated} from "react-animated-css";
export default function Genre() {
    const [artist, setArtist] = useState([])
    const [artistFound, setArtistFound] = useState([])
    const [theLoai, setTheLoai] = useState([])
    const [available, setAvailable] = useState(false)

    const getTheLoai = () =>{
        axios.get("http://localhost:3001/api/TheLoaiNhac").then((response)=>{
            console.log(response);
            setTheLoai(response.data.TheLoaiNhac)
            console.log(theLoai)
        })
    }
    const getArtist = () =>{
        axios.get("http://localhost:3001/api/Artist").then((response)=>{
            setArtist(response.data.Artist)
            console.log(artist)
        })

    }

    const foundArtis = (e) =>{
        const found = artist.filter(elem => elem.TheLoai === e )
        setArtistFound(found)
        setAvailable(true)
        console.log(found)
        
    }

    useEffect(() =>{ 
        getArtist()
        getTheLoai()
    },[])
    return (
        <div className={styles.GenreRoot}>
            <h3 className="mb-3">Popular genres</h3>
            <div className={styles.btnContainer}>
                {theLoai.map(e => (
                    <div key={e.id} className="p-2" >
                        <button className={styles.btnTheloai} onClick={()=> foundArtis(e.theLoai)}>{e.theLoai}</button>
                    </div>
                ))}
            </div>
            <div className="w-100 d-flex  flex-wrap justify-content-around mt-5 ms-3">
                 {available && artistFound.map(e =>(
                     <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
                         <div key={e.name} className="d-flex flex-column text-center justify-content-center align-items-center p-3">
                             <div className={styles.imgZoom}>
                                <img src={e.img} width='110px' height="110px" className="rounded-circle animate__zoomInDown mb-3"></img>
                             </div>
                            <h5>{e.name}</h5>
                        </div>
                     </Animated>
                
                ))}
            </div>
     
        </div>
    )
}
