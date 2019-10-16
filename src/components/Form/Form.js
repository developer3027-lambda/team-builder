import React, {useState} from 'react';

const Form = (props) => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value})
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name:'',email:'',role:''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
            type='input'
            value={member.name}
            name='name'
            id='name'
            onChange={changeHandler}
            placeholder='full name' />

            <label htmlFor='email'>Email</label>
            <input
            type='email'
            value={member.email}
            name='email'
            id='email'
            onChange={changeHandler}
            placeholder='Email' />

            <label htmlFor='role'>Role</label>
            <input
            type='input'
            value={member.role}
            name='role'
            id='role'
            onChange={changeHandler}
            placeholder='Role' />
            <button type='submit'>click</button>
        </form>
    )
}
export default Form;