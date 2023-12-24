"use client"

import styles from '../../test.module.css'
import TestLayout from '../../components/TestLayout';
import { useEffect } from 'react';

const Test3 = () => {
  const handleOption = (e: any) => {
    const element = e.target;
    const parent = element.parentNode;

    for (const child of parent.children) {
      child.setAttribute('selected', "false")
    }

    element.setAttribute("selected", "true")
  }

  useEffect(() => {
    startEyeTracker()
  }, [])

  return (
    <TestLayout>
      <div className={[styles.container, styles.horizontal].join(' ')}>
        <div className={styles.contentWrapper}>
          <div className={styles.questionWrapper}>
            <h1 className={styles.center}>Question2</h1>
            <p className={styles.center}>37+26=?</p>
          </div>
          <div className={styles.optionWrapper}>
            <div onClick={handleOption}>65</div>
            <div onClick={handleOption}>73</div>
            <div onClick={handleOption}>75</div>
            <div onClick={handleOption}>63</div>
          </div>
        </div>
        <div className={styles.submit}>
          <a onClick={() => endEyeTracker()}>next</a>
        </div>
      </div>
    </TestLayout>
  )
}

async function startEyeTracker() {
  await fetch('http://127.0.0.1:8000/api/start2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"message":"/fourth"})
  })
    .then(async (res) => {
      const response = await res.json()
    })
    .catch((reason) => {
      console.log(reason)
    })
}

async function endEyeTracker() {
  await fetch('http://127.0.0.1:8000/api/stop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})
  })
    .then((res) => {
      window.location.href = '/test/page5'
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export default Test3;