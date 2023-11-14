import { SafeAreaView } from 'react-native';
import ToDoList from './assets/ToDoList';
import ToDoForm from './assets/ToDoForm';
import {useState} from 'react';

export default function App() {
 
  const [tasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);

  const addTask = (newTask) => {
    if (!tasks.includes(newTask)) {
      setTasks(prevTasks => [...prevTasks, newTask]);
    } else {
      Alert.alert('Error', 'Task already exists.'); 
    }
  }
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm onAdd={addTask}/>
        </SafeAreaView>
    );
}