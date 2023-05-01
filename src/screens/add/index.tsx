import { EyeSvgIcone } from '@/assets/svgs'
import { Butten, Textfield } from '@/components'
import { FormEvent, useContext, useState } from 'react'
import { TodoType } from '../types'
import { store } from '@/context'
import { toast } from 'react-toastify';



const AddTodoScreen = () => {
  const [todo , setTodo] = useState<TodoType>({
    title:"",
    desc:""
  })

  const {todosList , setTodosList} = useContext(store)

  const handleAddNewTodo = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (!todo.title) return toast.error('Title Is Required')
    setTodosList([...todosList , todo])
    toast.success("New Todo Created Succesfully")
    setTodo(
      {
        title:"",
        desc:""
      }
    )
  }
  return (
    <form onSubmit={(e:FormEvent<HTMLFormElement>) => handleAddNewTodo(e)}
      className="flex flex-col gap-2 mt-5">
      <Textfield
      value={todo.title}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
      setTodo({
        ...todo,
        title:e.target.value,
      })}} variant="standard" placeholder="Enter The Title" />
      <Textfield 
      value={todo.desc}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
      setTodo({
        ...todo,
        desc:e.target.value,
      })}} variant="standard" placeholder="Enter The Desc" />
      <Butten type="submit">Add Todo</Butten>
    </form>
  )
}

export default AddTodoScreen
