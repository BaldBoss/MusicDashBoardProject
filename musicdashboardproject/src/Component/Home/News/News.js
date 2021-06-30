import React from 'react'
import styles from "./News.module.css"

export default function News() {
    return (
        <div>
            <h3>More news</h3>
            <div className="row">
                <div className="col-m-12 col-lg-4 mb-3">
                    <div className={styles.newsBox}>
                            <div className={styles.hoverBox}></div>
                            <h4>Thomas Bank</h4>
                            <p>Working in his new album</p>
                            
                    </div>
                </div>
                <div className="col-m-12 col-lg-4 mb-3">
                    <div className={`${styles.newsBox} ${styles.bg1}`}>
                            <div className={styles.hoverBox}></div>
                            <h4>Art</h4>
                            <p>Music and museums</p>
                        
                    </div>
                </div>
                <div className="col-m-12 col-lg-4 mb-3">
                    <div className={`${styles.newsBox} ${styles.bg2}`}>
                            <div className={styles.hoverBox}></div>
                            <h4>News</h4>
                            <p>Chill out for our mind</p>
                    </div>
                </div>
                <div className="col-m-12 col-lg-8 mb-3">
                    <div className={`${styles.newsBox} ${styles.bg3}`}>
                            <div className={styles.hoverBox}></div>
                            <h4>News</h4>
                            <p>Chill out for our mind</p>
                    </div>
                </div>
                <div className="col-m-12 col-lg-4 mb-3">
                    <div className={`${styles.newsBox} ${styles.bg4}`}>
                            <div className={styles.hoverBox}></div>
                            <h4>News</h4>
                            <p>Chill out for our mind</p>
                    </div>
                </div>
            </div>


        </div>
        
    )
}
