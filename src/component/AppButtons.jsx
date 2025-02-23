import styles from './AppButtons.module.css'
const AppButtons = ({ buttons, touchButton }) => {
  return (
    <center className='calButton'>
      {buttons.map(but => <button className={styles.button} onClick={() => touchButton(but)}>{but}</button>)}
    </center>
  )
}
export default AppButtons;