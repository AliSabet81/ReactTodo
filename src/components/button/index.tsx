import { ButtonHTMLAttributes } from "react";

interface IButten extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Butten = (props:IButten) =>{
    return <button  {...props} className={`${props.className} w-full bg-green-500 text-white font-bold rounded-sm text-center py-3`}/>
}