import React from 'react'
import image from "../../assets/photographer.png"
import styles from '../../styles/style.module.css'

const Description = () => {
  return (
    <div>
        <h4 className={styles.descriptionTitle}>הצלם לאירוע שלך</h4>
        <img src={image} className={styles.descriptionImage} />
    </div>
  )
}

export default Description
