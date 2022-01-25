import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class'

const Contactform = ({ add }) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact name'/>
                <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' required placeholder='Contact surname'/>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact email'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add contact</button>
        </form>
    );
}

Contactform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Contactform;
