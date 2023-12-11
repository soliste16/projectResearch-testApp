"use client"

import styles from '../../test.module.css'
import TestLayout from '../../components/TestLayout';

const Test = () => {
  const handleOption = (e: any) => {
    const element = e.target;
    const parent = element.parentNode;

    for (const child of parent.children) {
      child.setAttribute('selected', "false")
    }

    element.setAttribute("selected", "true")
  }

  return (
    <TestLayout>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.questionWrapper}>
            <h1 className={styles.center}>問題</h1>
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
          <a onClick={() => test()}>次へ</a>
        </div>
      </div>
    </TestLayout>
  )
}

async function test() {
  await fetch('http://127.0.0.1:8000/api/stop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: "stop" })
  })
    .then(async (res) => {
      const response = await res.json()
      window.location.href = '/test/page2'
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export default Test;