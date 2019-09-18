import React from 'react';
import './Card.css';

function TeamCard() {

    return (
        <div className='base'>
        <form className='formBase'>
        <fieldset className='form'>
            <legend>Team Members</legend>
            <label htmlFor='fName'>First Name</label>
                <input type='text' value='' id='fName' name='fName' />
            <label htmlFor='lName'>Last Name</label>
                <input type='text' value='' id='lName' name='lName' />
            <label htmlFor='email'>Email</label>
                <input type='email' value='' id='email' name='email' />
            <label htmlFor='role'>Role</label>
                <input type='text' value='' id='role' name='role' />
        </fieldset>
        </form>
        </div>
    )
}
export default TeamCard