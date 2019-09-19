import React, {useState} from 'react';
import './Card.css';

const TeamCard = props => {
    console.log('propsCard', props);
    const [info, setInfo] = useState({ fName: '', lName: '', email: '', role: ''});

    const handleChanges = e => {
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewCard(info);
        setInfo({fName: '', lName: '', email: '', role: ''});
    };


    return (
        <div className='base'>
        <form className='formBase' onSubmit={submitForm}>
        <fieldset className='form'>
            <legend>Team Members</legend>
            <label htmlFor='fName'>First Name</label>
                <input onChange={handleChanges} type='text' value={info.fName} id='fName' name='fName' />
            <label htmlFor='lName'>Last Name</label>
                <input onChange={handleChanges} type='text' value={info.lName} id='lName' name='lName' />
            <label htmlFor='email'>Email</label>
                <input onChange={handleChanges} type='email' value={info.email} id='email' name='email' />
            <label htmlFor='role'>Role</label>
                <input onChange={handleChanges} type='text' value={info.role} id='role' name='role' />
            <button type="submit">Submit</button>
        </fieldset>
        </form>
        </div>
    );
};
export default TeamCard;