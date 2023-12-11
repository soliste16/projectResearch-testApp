import styles from '../test.module.css'

const TestLayout = ({ children }: any) => {
  return (
    <div className={styles.test}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default TestLayout;