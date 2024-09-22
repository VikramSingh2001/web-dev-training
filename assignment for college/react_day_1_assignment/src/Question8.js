import React, { useState } from 'react'

const Question8 = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        onTextChange(event.target.value);
    };

    return <input type="text" value={text} onChange={handleChange} />;
}

export default Question8
