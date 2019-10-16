import React from 'react';

const FormInfo = props => {
    console.log(props)
    return (
        <div>
            {props.memberList.map((info, index) => {
                return (
                    <div key={index}>
                    <h2>{info.name}</h2>
                    <p>{info.email}</p>
                    <p>{info.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default FormInfo