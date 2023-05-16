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

            console.log(inputs)

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
                        <option value="Severus Snape">Severus Snape</option>
                        <option value="Luna Lovegood">Luna Lovegood</option>
                        <option value="Draco Malfoy">Draco Malfoy</option>
                        <option value="Lucius Malfoy">Lucius Malfoy</option>
                        <option value="Lord Voldemort">Lord Voldemort</option>
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
                <input type="submit" value='submit' className='form-submit' />
            </form>
        </div>
    );
};

export default Add;