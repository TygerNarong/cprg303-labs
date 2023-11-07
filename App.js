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
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}