import React from 'react'

const TextInput = ({ value, setValue = f => f, ...props }) => {
    return (
        <input
            {...props}
            type="text"
            className='text-input'
            value={value}
            onChange={e => setValue(e.target.value)} />
    )
}

export default TextInput
