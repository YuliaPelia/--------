import { useState } from 'react';


import List from "./components/List";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalVisible, setModalVisible] = useState(false);


  const showModalHandler = () => {
    setModalVisible(true)
  }

  const hideModalHandler = (e) => {
    if (e.target === e.currentTarget) {
        setModalVisible(false)
    }

}
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <List isPosting={modalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App;
