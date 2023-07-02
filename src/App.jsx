import './App.css'
// import { motion } from 'framer-motion'
// import { useContext } from 'react'
// import { mouse_context } from './CursorContext/CursorContext'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  // const { variants, cursorVariant } = useContext(mouse_context);

  return (
    <>
      {/* <motion.div variants={variants} animate={cursorVariant} className='cursor'></motion.div> */}
        <RouterProvider router={router} />
    </>
  )
}

export default App
