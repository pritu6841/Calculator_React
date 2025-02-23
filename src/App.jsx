import styles from './App.module.css'
import { useState } from 'react'
import AppDisplay from './component/AppDisplay'
import AppButtonGrp from './component/AppButtonGrp'
function App() {
  const [inputVal, setInputVal] = useState("")
  const touchButton = (buttonName) => {
    if (buttonName === 'c') {
      setInputVal("")

    } else if (buttonName === '=') {
      let result = eval(inputVal)
      setInputVal(result)

    } else {
      let value = inputVal + buttonName
      setInputVal(value)
    }

  }

  return (
    <div className={styles.calcualtor}>
      <AppDisplay inputVal={inputVal}></AppDisplay>
      <AppButtonGrp touchButton={touchButton}></AppButtonGrp>
    </div>
  )

}

export default App
