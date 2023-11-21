import { forwardRef } from "react"

const Input = forwardRef(function Input({texttarea, label, ...props}, ref) {

    const classes = "w-full p-2 <border-b-3></border-b-3> rounded-sm border-stone-350 bg-stone-200 text-stone-700 focus:outiline-none focus:border-stone-600"
   
    return (
   
        <p className="flex flex-col gap-1 my-4">
            
            <label className="text-sm font-bold uppercase text-stone-800">{label}</label>

            { texttarea ? 

                <textarea ref={ref} className={classes} {...props}></textarea> 
                    
                : <input ref={ref} className={classes} {...props}></input>
                    
            }

        </p>
   
    )

})

export default Input;