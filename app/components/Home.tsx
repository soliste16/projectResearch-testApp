import React from 'react'
import styles from '../page.module.css'
//import { Link} from 'react-router-dom'
import Link from 'next/link';

const Home = () => (
    <main id={styles.main}>
        <div id={styles.description}>
            {/*<Link className={styles.start} to="/">Start</Link>
            */}
            <Link  href="../test/page1" passHref legacyBehavior>
                <a className={styles.start} >Enter Test</a>
            </Link>
            {/*<Link  href="../test/page1_2" passHref legacyBehavior>
                <a className={styles.start} >Enter Test2</a>
        </Link>*/}
        </div>
    </main>
);
export default Home;