

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
// import Counter from './components/Counter'
import Habit from './components/Habit'
import { RootState } from './store/store'
import { Box, CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material'
import { toggleDarkMode } from './store/themeSlice'
import { darkTheme, lightTheme } from './theme'
import {MyInput,MyButton} from '@my-monorepo/ui'

function App() {
const dispatch=useDispatch()
  const darkMode=useSelector((state:RootState)=>state.theme.darkMode)
  return (
    <ThemeProvider theme={darkMode ?darkTheme:lightTheme}>

<Box sx={{display:"flex",justifyContent:"flex-end",p:2}}>
  <FormControlLabel
 control={
  <Switch checked={darkMode} 
  onChange={() =>dispatch(toggleDarkMode())}/>
 }
 label="Dark mode"
 ></FormControlLabel>

</Box>
  {/* <Counter/> */}

  <CssBaseline/>
<Habit/>

<MyInput label="Post Title"
          value="hi"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => alert(e.target.value)}
          placeholder="Enter post title"/>

       <button
          style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',}}
          onClick={() => alert("Post Added")}
        >
          Add Post
        </button>
    </ThemeProvider>
  )
}

export default App
