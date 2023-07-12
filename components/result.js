import styles from './result.module.css'
import jsonData from '../public/data.json'

export default function Result() {

    // calculating score from JSON file
    const score = Math.floor(
    jsonData
    .map(item => item.score)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / jsonData.length);

    return (
        <section className={styles.result}>
            <p className={styles.title}>Your Result</p>
            <div className={styles.gradientCircle}>
                <span className={styles.score}>{score}</span>
                <p>of 100</p>
            </div>
            <p className={styles.scoreText}>Great</p>
            <p className={styles.description}>
                You scored higher than 65% of the people who have taken these tests
            </p>
        </section>
    );
}