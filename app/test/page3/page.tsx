"use client"

import styles from '../../test.module.css'
import TestLayout from '../../components/TestLayout';
import { useEffect } from 'react';

const Test2 = () => {
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
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.questionWrapper}>
            <h1 className={styles.center}>Question2</h1>
            <p className={styles.center}>12*7=?</p>
          </div>
          <div className={styles.optionWrapper}>
            <div onClick={handleOption}>84</div>
            <div onClick={handleOption}>72</div>
            <div onClick={handleOption}>94</div>
            <div onClick={handleOption}>74</div>
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
    body: JSON.stringify({"message":"/third"})
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
      window.location.href = '/test/page4'
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export default Test2;