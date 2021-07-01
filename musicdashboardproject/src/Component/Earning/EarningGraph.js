import React from 'react'
import EarningAreaGraph from './EarningAreaGraph'
import EarningPieChart from './EarningPieChart'
export default function EarningGraph() {
    return (
        <div className="row">
            <div className="col-m-12 col-lg-7">
                <EarningAreaGraph></EarningAreaGraph>
            </div>
            <div className="col-m-12 col-lg-5">
                <EarningPieChart></EarningPieChart>
            </div>
        </div>
    )
}
