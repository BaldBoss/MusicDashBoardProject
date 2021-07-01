import styles from "./Earning.module.css"
import EarningGraph from "./EarningGraph"
import MapAndPayer from "./MapAndPayer"

export default function Earning(params) {
    return(
        <div className={styles.earning}>
            <div className={styles.earning_header}>
                <div className={styles.earningTitle}>
                    <h1>Dashboard</h1>
                    <p>My new amazing album</p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-warp">
                    <div className={styles.cog}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#969cba">
                        <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className={styles.LastSeven}>
                        <p>Last 7 days <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#969cba">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg></p>
                    </div>
                    <div className={styles.csv}>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#969cba">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg> Download as CSV </p>
                    </div>
                </div>
            </div>

            <div className={styles.earningContent_Container}>
                <div className="d-flex flex-wrap align-items-center">
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon} ${styles.green}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#2ED297" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                            </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>$630</h1>
                                <h5>Your Balance</h5>
                            </div>
                        </div>     
                    </div>
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon} ${styles.red}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#C887EB" className="bi bi-graph-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>23</h1>
                                <h5>Purchases</h5>
                            </div>
                        </div>     
                    </div>
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#6F52ED" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>13</h1>
                                <h5>New Customer</h5>
                            </div>
                        </div>     
                    </div>
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon} ${styles.blue}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#4CB8FF" className="bi bi-music-note" viewBox="0 0 16 16">
                                <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                <path fillRule="evenodd" d="M9 3v10H8V3h1z"/>
                                <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
                                </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>83%</h1>
                                <h5>New Streams</h5>
                            </div>
                        </div>     
                    </div>

                </div>
            </div>

            <div className={styles.earningGraph_Container}>
                <EarningGraph></EarningGraph>
            </div>
            
            <div className={styles.MapAndPayer_Container}>
                <MapAndPayer></MapAndPayer>
            </div>
        </div>
    )
};
