import React from 'react'
import styles from '../end.module.css'
//import { Link} from 'react-router-dom'
import Link from 'next/link';

const EndPage = () => (
        <div className={`${styles.main} ${styles.end}`}>
            <div className={styles.container}>
                <div className={styles.center}>
                    This is the end of the questionnaire. Thanks for your participant!
                </div>
               <div className={styles.button}>
                <Link  href="../" passHref legacyBehavior>
                    <a>Back to home page</a>
                </Link>
                </div>   
            </div>
        </div>
);
export default EndPage;