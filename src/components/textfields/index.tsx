import React, { ReactElement } from "react"

interface TextfieldType extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: "standard" | "outlined" | "contained";
    label ?: string;
    endicone ?: string | ReactElement;
    startIcone ?: string;
}

export const Textfield = (props: TextfieldType) =>{
    function textfieldClassName() {
        switch (props.variant) {
            case "contained": return `w-full my-1
            block border border-transparent focus-within:border focus-within:border-green-400
            bg-slate-100 rounded-md  `
            case "outlined": return `w-full my-1
            block  focus-within:border focus-within:border-green-400
            bg-slate-50 rounded-md border border-slate-200`
            default:
                return `w-full my-1
                block  focus-within:border-bottom focus-within:border-green-400
                bg-slate-50 border-b border-slate-200`
        }
    }
    return(
        <>
        <label htmlFor={props.id}>
            <span>{props.label}</span>
        </label>
        <div className={`${textfieldClassName()} rounded-sm flex p-1 items-center`}>
            <span>{props.startIcone}</span> 
            <input {...props} className="px-1 py-2 bg-transparent outline-none w-full" type="text" />
            <span>{props.endicone}
            </span>
        </div>
        </>
      )
}
 