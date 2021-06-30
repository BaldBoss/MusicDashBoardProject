import styles from './Home.module.css'
import CarouselSlider from './Carousel'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PrevBtn from './Controller/PrevBtn';
import PlayAndPauseBtn from './Controller/PlayAndPauseBtn';
import NextBtn from './Controller/NextBtn';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import audios from '../../static/audio';
import Wave from "@foobar404/wave"
import News from './News/News';
import Genre from './Genre/Genre';

export default function Home(params) {
    const songRef = useRef(null)
    const [wave] = useState(new Wave()) ;
    const [currentSongIndex,setCurrentSongIndex] = useState(0);
    const [barValue,setBarValue] = useState(0)
    const [isPaused,setIsPaused] = useState(true)
    const [songChanged, setSongChanged] = useState(false)
    const currentSong = audios[currentSongIndex];
    const playah = process.env.PUBLIC_URL + '/assets/ThePlayahSpecialPerformance_-Soobin.mp3'
    useEffect(()=>{
        window.document.getElementById("audio_element").addEventListener
        ("loadedmetadata",(e)=>{
            songRef.current = e.target
        })
        wave.fromElement('audio_element','canvas_element', {
            type:'flower',
            colors:['#101820FF','#FEE715FF']
        })
    },[wave])

    const goToNextSong = (value) =>{
        const nextSongIndex = currentSongIndex + value;
        const firstSongIndex = 0;
        const lastSongIndex = audios.length -1;

        if(nextSongIndex >= audios.length){
            setCurrentSongIndex(firstSongIndex)
        }else if(nextSongIndex < firstSongIndex){
            setCurrentSongIndex(lastSongIndex)
        }else{
            setCurrentSongIndex(nextSongIndex)
        }
        setSongChanged(true);
        setIsPaused(false)
    }

    return(
        <div className={styles.home}>
            <div className={styles.searchbar}>
                <form className={styles.form}> 
                    <div className={styles.searchbarContainer}>
                        <input type="search" placeholder="&#xF002; Search for new music, news, artists..." aria-describedby="button-addon4" className="form-control bg-none border-0"/>   
                    </div>
                </form>
            </div>
            <div className="Home-container">
                <div className="row">
                    <div className="col-m-12 col-lg-6 p-3">
                        <h3 className="mb-3">Trendings</h3>
                        <CarouselSlider playah={playah}></CarouselSlider>
                    </div>
                    <div className="col-m-12 col-lg-6 p-3">
                        <h3 className="mb-3">Artist of the week</h3>
                        <div className="d-flex">
                            <div className="artist">
                                <h1>Quan AP</h1>
                            </div>
                            <div className="artis-music mx-auto">
                                <div className="artist-musicplayer">
                                    <div className="lazyimage-Container">
                                        <LazyLoadImage
                                            effect="blur"
                                            placeholderSrc={currentSong.placeholder}
                                            src={currentSong.img}
                                            width="250px"
                                            className={!isPaused ? "animation-spin" : null}
                                         ></LazyLoadImage>
                                        <canvas width="250px" height="250px" id="canvas_element"></canvas>
                                    </div>
                                
                                    <div className="song-info">
                                        <h1>{currentSong.songName}</h1>
                                        <p>{currentSong.singer}</p>
                                        <audio autoPlay={songChanged} onEnded={() => goToNextSong(1)} src={currentSong.src} id="audio_element" onTimeUpdate={()=>setBarValue(songRef.current.currentTime)}></audio>
                                    </div>
                                    <div className="w-100">
                                        <input value={barValue} type="range" min={0} max={songRef.current?.duration} className="input-slide"
                                         onChange={(e)=> (songRef.current.currentTime = e.target.value)}></input>
                                    </div>
                                    <div className="controller">
                                        <PrevBtn goToNextSong={goToNextSong}></PrevBtn>
                                        <PlayAndPauseBtn songRef={songRef} isPaused={isPaused} setIsPaused={setIsPaused}></PlayAndPauseBtn>
                                        <NextBtn goToNextSong={goToNextSong}></NextBtn>
                                  </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-m-12 col-lg-6 p3">
                        <News></News>
                    </div>
                    <div className="col-m-12 col-lg-6 p3">
                        <Genre></Genre>
                    </div>
                </div>
            </div>
            
        </div>
    )
};
