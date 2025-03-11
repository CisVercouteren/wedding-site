import React from "react";

const Button = ({className, children, onClick}) => (
    <div onClick={onClick} className={`${className} hover:cursor-pointer hover:text-gray-500/70 hover:border-gray-500/70 hover:fill-gray-500/70`}>
        {children}
    </div>
)


export default Button;