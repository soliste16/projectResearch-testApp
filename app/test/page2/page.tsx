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
            <p className={styles.center}>ここは説明文です。選択１が正しいです。選択１を選んでください。もし選択１を選びたくなければ、選択４にしても構いませんよ。</p>
          </div>
          <div className={styles.optionWrapper}>
            <div onClick={handleOption}>選択１</div>
            <div onClick={handleOption}>選択２</div>
            <div onClick={handleOption}>選択３</div>
            <div onClick={handleOption}>選択４</div>
          </div>
        </div>
        <div className={styles.submit}>
          <a onClick={() => endEyeTracker()}>次へ</a>
        </div>
      </div>
    </TestLayout>
  )
}

async function startEyeTracker() {
  await fetch('http://127.0.0.1:8000/api/start', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'http://127.0.0.1:8000',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify({ message: "start_first" })
  })
    .then(async (res) => {
      const response = await res.json()
    })
    .catch((reason) => {
      console.log(reason)
    })
}

async function endEyeTracker() {
  await fetch('http://127.0.0.1:8000/api/end', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'http://127.0.0.1:8000',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify({ message: "end_first" })
  })
    .then(async (res) => {
      const response = await res.json()
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export default Test2;