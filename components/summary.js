import jsonData from '../public/data.json'
import Image from 'next/image'
import styles from './summary.module.css'

export default function Summary() {

    const icons = [
        "images/icon-reaction.svg",
        "images/icon-memory.svg",
        "images/icon-verbal.svg",
        "images/icon-visual.svg"
    ];

    return (
        <section className={styles.summary}>
            <p className={styles.title}>Summary</p>
            {jsonData.map((item, index) => (
                <div key={index} className={item.category.toLowerCase()}>
                    <div className={styles.left}>
                        <Image
                            src={icons[index]}
                            width={20}
                            height={20}
                            alt="category icon"
                            priority={true}
                        />
                        <p>{item.category}</p>
                    </div>
                    <p className={styles.right}> <span>{item.score}</span> / 100 </p>
                </div>
            ))}
            <button className={styles.button}>Continue</button>
        </section>
    );
}