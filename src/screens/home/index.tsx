import { store } from "@/context"
import { useContext } from "react"
import { TodoType } from "../types"

const HomeScreen = (props:any) => {
  
  const {todosList} = useContext(store)

  return (
    <div className="flex flex-col mx-xxl">
      {todosList.map(({title , desc}:TodoType)=>(
        <li className="px-2 py-3 border-b flex flex-col gap-2">
          <h3 className="text-slate-700">{title}</h3>
          <p className="text-slate-800">{desc}</p>
        </li>
      ))}
    </div>
    )
  }
  
  export default HomeScreen
  