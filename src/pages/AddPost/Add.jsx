import React, { useState } from 'react';
import './Add.css';
import { useDispatch } from 'react-redux';
import setAuthorsAction from '../../store/actions/authors.actions';

const Add = () => {

    const dispatch = useDispatch();

    const [ inputs, setInputs ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, }))
    }  

    const resetForm = ( ) => {
        setInputs('');
    }

    const handleSubmit  = ( event ) => {

        event.preventDefault();

        if( inputs.author?.trim() ) {

            dispatch(setAuthorsAction({
                name: inputs.author,
                content: inputs.content,
                media: inputs.media,
                date: inputs.date
            }));
    
            resetForm();

        } else {

            alert('Choose an author from the list!');
            
        }
        
    }

    return (
        <div className='content column'>
            <h1 className='title'>Add post</h1>
            <form className='form column'  onSubmit={handleSubmit}>
                <label className='form-label row'>
                    <span>Choose an author from the list:</span>
                    <select name='author' value={inputs.author || 'authors_2'}  onChange={handleChange}>
                        <option value="author_1">Severus Snape</option>
                        <option value="author_2">Luna Lovegood</option>
                        <option value="author_3">Draco Malfoy</option>
                        <option value="author_4">Lucius Malfoy</option>
                        <option value="author_5">Lord Voldemort</option>
                    </select>
                </label>
                <label className='form-label row'>
                    <span>Enter the date</span>
                    <input type='date' name='date' value={inputs.date || ''} required="required" onChange={handleChange} />
                </label>
                <label className='form-label row'>
                    <span>Enter the text of the publication</span>
                    <input placeholder='Max. length - 200 characters' type='text' maxLength={200} name='content' value={inputs.content || ''} required="required" onChange={handleChange} />
                </label>
                <label className='form-label row'>
                    <span>Enter image link</span>
                    <input type='text' placeholder='https://example.com/...' name='media' value={inputs.media || ''} required="required" onChange={handleChange} />
                </label>
                <input type="submit" value='submit' className='form-submit' />
            </form>
        </div>
    );
};

export default Add;