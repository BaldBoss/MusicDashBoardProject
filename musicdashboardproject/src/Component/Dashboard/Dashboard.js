import styles from './Dashboard.module.css'
import Graph from './Graph'
import ContentRight from './ContentRight'

export default function Dashboard(params) {
    return(
        <div className={styles.dashboard}>
            <div className={styles.dashboard_header}>
                <div className={styles.HeaderTitle}>
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
                    <button className="d-flex justify-content-around align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        <p>New dashboard</p>
                    </button>
                </div>
            </div>
        
            <div className={styles.dashboardContent_Container}>
                <div className="d-flex flex-wrap align-items-center">
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={styles.ContentBox_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#6F52ED" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>62</h1>
                                <h5>Listener</h5>
                            </div>
                        </div>     
                    </div>
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon} ${styles.green}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#21B8C7" className="bi bi-graph-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>25</h1>
                                <h5>New followers</h5>
                            </div>
                        </div>     
                    </div>
                    <div className={styles.ContentBox_Wrapper}>
                        <div className={styles.ContentBox}>
                            <div className={`${styles.ContentBox_icon} ${styles.red}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FF4C61" className="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z"/>
                            </svg>
                            </div>
                            <div className={styles.ContentBox_text}>
                                <h1>3</h1>
                                <h5>Unfollows</h5>
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

            <div className="row">
                <div className="col-m-12 col-lg-12 ">
                    <div className="d-flex flex-wrap align-items-center">
                        <div className={styles.ContentBox_Wrapper2}>
                            <div className={styles.ContentBox}>
                                    <div className={`${styles.ContentBox_icon} ${styles.orange}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FFB800" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                        </svg>
                                    </div>
                                    <div className={styles.ContentBox_text}>
                                        <h1>25</h1>
                                        <h5>Saved as playlist</h5>
                                    </div>
                                </div>     
                        </div>
                        <div className={styles.ContentBox_Wrapper2}>
                                <div className={styles.ContentBox}>
                                        <div className={`${styles.ContentBox_icon} ${styles.blue}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#4CB8FF" classname="bi bi-clock" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.ContentBox_text}>
                                            <h1>1396</h1>
                                            <h5>Steams total hours</h5>
                                        </div>
                                    </div>     
                            </div>
                    </div>
                    <div className="p-3">
                        <Graph></Graph>
                    </div>
                </div>
                <div className="col-m-12 col-lg-12">
                    <div className="p-3">
                        <ContentRight></ContentRight>
                    </div>
                        
                </div>
            </div>
        </div>
    )
};
