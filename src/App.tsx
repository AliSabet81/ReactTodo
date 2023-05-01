import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { routes } from './routes';
import { TodoType } from './screens/types';

const App = () => {
  const [todosList , setTodosList] = useState<TodoType>({
    title:"",
    desc:"",
  })
  return (
    <Layout>
      <Routes>
        {routes.map((i) => (
          <Route key={i.path} path={i.path} element={i.element}/>
        ) )}
      </Routes>
    </Layout>
  )
}

export default App
