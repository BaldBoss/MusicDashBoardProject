import React from 'react'
import Payer from './Payer'
import MapChart from './WorldMap'
export default function MapAndPayer() {
    return (
        <div className="row">
            <div className="col-m-12 col-lg-7">
                <MapChart></MapChart>
            </div>
            <div className="col-m-12 col-lg-5">
                <Payer></Payer>
            </div>
        </div>
    )
}
