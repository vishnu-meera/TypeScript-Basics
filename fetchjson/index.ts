import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const data = response.data as Todo;
  logToDo(data);
});

const logToDo = ({ id, title, completed }) => {
  console.log(`
    the todo ID is ${id}
    the todo name is ${title}
    is it finished ? ${completed ? 'YES' : 'NO'}
  `);
};
