import useFetch from '../../hooks/useFetch'
import Section from '../UI/Section'
import TaskForm from './TaskForm'

const NewTask = (props) => {
  const generateNewTask = (taskText,taskObj) => {
    const generatedId = taskObj.name // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText }
    
    props.onAddTask(createdTask)
  }

  const { isLoading, error, sendRequest } = useFetch()
  

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      generateNewTask.bind(null, taskText),
      {
      url: 'https://reactguide-d1e11-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
    })
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask
