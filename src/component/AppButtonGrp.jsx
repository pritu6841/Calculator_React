import styles from './AppButtonGrp.module.css'
import AppButtons from './AppButtons';
const AppButtonGrp = ({ touchButton }) => {
  let buttons = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']


  return (<div className={styles.buttonGrp}>
    <AppButtons buttons={buttons} touchButton={touchButton}></AppButtons>
  </div>)
}
export default AppButtonGrp;