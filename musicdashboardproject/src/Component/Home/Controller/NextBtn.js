import React from 'react'

export default function NextBtn({goToNextSong}) {
    return (
        <svg onClick={()=>goToNextSong(1)} xmlns="http://www.w3.org/2000/svg" className="btn" fill="#fff" viewBox="0 0 24 24" stroke="#fff">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
    )
}
