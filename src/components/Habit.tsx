import { Container, Typography } from '@mui/material'
import AddHabitForm from './add-habit-form'
import HabitList from './habit-list'


const Habit = () => {
  return (
    <div>
        <Container maxWidth="md">
<Typography component="h1" variant='h2' align='center'>
    Habit Tracker
</Typography>
<AddHabitForm/>
<HabitList/>
        </Container>
    </div>
  )
}

export default Habit