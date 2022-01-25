import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import Contactform from '../pure/forms/contactForm';

const ContactListComponent = () => {
    
    const contact1 = new Contact('NameContact1', 'SurnameContact1', 'contact1@mail.com', false);
    const contact2 = new Contact('NameContact2', 'SurnameContact2', 'contact2@mail.com', true);
    const contact3 = new Contact('NameContact3', 'SurnameContact3', 'contact3@mail.com', false);
    const contact4 = new Contact('NameContact4', 'SurnameContact4', 'contact4@mail.com', true);

    const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Contact state has been modified');
        setLoading(false);
        return () => {
            console.log('Contact list component is going to unmount');
        };
    }, [contacts]);

    function connectContact(contact){
        console.log('Connect this contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function removeContact(contact){
        console.log('Remove this contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        console.log('Add this contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Contact list
                        </h5>
                    </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Surname</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Connection status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map((contact, index) => {
                                return (
                                       <ContactComponent
                                       key = {index}
                                       contact = {contact}
                                       connect = { connectContact }
                                       remove = { removeContact }
                                       >
                                       </ContactComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <Contactform add={ addContact }></Contactform>
        </div>
    );
}

export default ContactListComponent;
