import { TodoType } from "@/screens/types";
import { ReactElement, createContext, useState } from "react";

export const store = createContext({
    todosList:[],
    setTodosList: ()=> {},
}as{
    todosList : TodoType[],
    setTodosList: React.Dispatch<React.SetStateAction<TodoType[]>>
})

export const StoreProvider = ({children}: {children:ReactElement}) =>{
    const [todosList , setTodosList] = useState<TodoType[]>([])

    const storeValues = {
        todosList : todosList,
        setTodosList : setTodosList
    }

    return <store.Provider value={storeValues}>{children}</store.Provider>
} 