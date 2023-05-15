import React, { useState } from 'react';
import './Add.css';

const Add = () => {

    const [ inputs, setInputs ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }  
    
    const handleSubmit  = ( event ) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <div className='content column'>
            <h1 className='title'>Add post</h1>
            <form className='form column'  onSubmit={handleSubmit}>
                <label className='form-label row'>
                    <span>Choose an author from the list:</span>
                    <select name='author' value={inputs.author || ''}  onChange={handleChange}>
                        <option value="authors_1">Severus Snape</option>
                        <option value="authors_2">Luna Lovegood</option>
                        <option value="authors_3">Draco Malfoy</option>
                        <option value="authors_4">Lucius Malfoy</option>
                        <option value="authors_5">Lord Voldemort</option>
                    </select>
                </label>
                <label className='form-label row'>
                    <span>Enter the text of the publication</span>
                    <input placeholder='Max. length - 200 characters' type='text' maxLength={200} name='content' value={inputs.content || ''}  onChange={handleChange} />
                </label>
                <label className='form-label row'>
                    <span>Enter image link</span>
                    <input type='text' placeholder='https://example.com/...' name='media' value={inputs.media || ''}  onChange={handleChange} />
                </label>
                <input type="submit" value='submit' className='form-submit' />
            </form>
        </div>
    );
};

export default Add;