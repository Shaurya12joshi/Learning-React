import React, {useId} from 'react'


const Input = React.forwardRef(function Input({
    label,
    type="text",
    className='',
    ...props
},ref){
    const id = useId()
    return (
        
        <div className='w-full'>
            {label && 
            (<label 
                className='inline-block mb-1 pl-1'  htmlfor={id}>
                    {label}
                </label>)}
                <input type={type} className={`w-full p-2 border border-gray-300 rounded-lg ${className}`} id={id} {...props} ref={ref}/>
        </div>
    )
}) 


export default Input
