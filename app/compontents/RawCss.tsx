import React from "react";
import Image from 'next/image';
import styles from "./RawCss.module.css"


const rawCss = () => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.image}>
                <Image src="/img/games.png" alt="games" width={400} height={400}/>
            </div>
            <div>
                <h5 className={styles.title}>Videogames</h5>
                <p className={styles.flexItem}>Playing video games has always been a passion of mine. Whether its
                    exploring vast open worlds, solving intricate puzzles, or competing in intense multiplayer matches,
                    I find video games to be a great way to unwind and challenge myself. They offer a unique blend of
                    storytelling, art, and technology that I deeply appreciate. Through gaming, I ve developed
                    problem-solving skills, strategic thinking, and the ability to stay calm under pressure. Its not
                    just a hobby, but a way to connect with friends and join a global community of players.</p>
            </div>
        </div>
    );
}

export default rawCss