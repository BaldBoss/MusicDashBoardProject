import React, { useRef, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from 'react';
export default function CarouselSlider({playah}) {
    const songRef = useRef(playah)
    const [isAudio1Play,setIsAudio1Play] = useState(false)
    const start = () => {
        return playah.play
    }
    useEffect(()=>{
        window.document.getElementById("audio1").addEventListener
        ("loadedmetadata",(e)=>{
            songRef.current = e.target
        })
    },[])
    return (
    <Carousel >
        <div>
            <div className="imgWrapper">
                <img src="https://i.ytimg.com/vi/d44UTUSTYKU/maxresdefault.jpg"></img>
                <div className="imgComponent">
                    <h6>//TRENDING</h6>
                    <h1>THE PLAYAH</h1>
                    <h5>- SOOBIN X SLIMV</h5>
                    <div className="d-flex">
                        <button onClick={()=> {
                            if(isAudio1Play === false){
                                songRef.current.play()
                                setIsAudio1Play(!isAudio1Play)
                            }else{
                                songRef.current.pause()
                                setIsAudio1Play(!isAudio1Play)
                            }
                            }} className="playbutton">play <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                        </svg></button>
                        <audio src={process.env.PUBLIC_URL + '/assets/ThePlayahSpecialPerformance_-Soobin.mp3'} id="audio1"></audio>
                        <button className="sharebutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-share " viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
             
        </div>
        <div>
        <div className="imgWrapper">
                <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg"></img>
                <div className="imgComponent">
                    <h6>//TRENDING</h6>
                    <h1>MUON ROI MA SAO CON</h1>
                    <h5>- SON TUNG MTP</h5>
                    <div className="d-flex">
                        <button onClick={()=>start} className="playbutton">play <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                        </svg></button>
                        <button className="sharebutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-share " viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
        <div className="imgWrapper">
                <img src="https://i.ytimg.com/vi/fTXd-DpN3AI/maxresdefault.jpg"></img>
                <div className="imgComponent">
                    <h6>//TRENDING</h6>
                    <h1>BONG HOA DEP NHAT</h1>
                    <h5>- QUAN AP</h5>
                    <div className="d-flex">
                        <button onClick={()=>start} className="playbutton">play <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                        </svg></button>
                        <button className="sharebutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-share " viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </Carousel>
    )
}
