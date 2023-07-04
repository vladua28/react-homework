import React from 'react';
import styles from './Character.module.css';

const Character = ({ id, name, status, species, gender, src }) => {
    return (
        <div className={styles.character}>
            <img className={styles.image} src={src} alt={name} />
            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.info}>
                    <span className={styles.label}>ID:</span>
                    <span>{id}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>Status:</span>
                    <span>{status}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>Species:</span>
                    <span>{species}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>Gender:</span>
                    <span>{gender}</span>
                </div>
            </div>
        </div>
    );
};

export default Character;
