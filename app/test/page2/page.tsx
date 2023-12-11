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
      <div className={[styles.container, styles.page2].join(' ')}>
        <div className={styles.contentWrapper}>
          <div className={styles.questionWrapper}>
            <h1 className={styles.center}>問題2</h1>
            <p className={styles.center}>ここに説明文を入れます。</p>
          </div>
          <div className={styles.optionWrapper}>
            <div onClick={handleOption}>option1</div>
            <div onClick={handleOption}>option1</div>
            <div onClick={handleOption}>option1</div>
            <div onClick={handleOption}>option1</div>
          </div>
        </div>
        <div className={styles.submit}>
          <a href='test/page2'>次へ</a>
        </div>
      </div>
    </TestLayout>
  )
}

async function startEyeTracker() {
  await fetch('http://127.0.0.1:8000/api/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: "start" })
  })
    .then(async (res) => {
      const response = await res.json()
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export default Test2;