import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    hoverBgColor="hover:bg-blue-700",
    className='',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg duration-200 ${bgColor} ${textColor} ${hoverBgColor} ${className}`} {...props}>{children}</button>
    )
}

export default Button
