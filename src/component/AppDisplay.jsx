import { useState } from 'react'
import styles from './AppDisplay.module.css'
const AppDisplay = ({ inputVal }) => {
  return (<input id={styles.display} type="text" value={inputVal} readOnly />)
}
export default AppDisplay