import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';



import { validateEmail } from '../../utils/helpers';

const styles = {

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: '1 0 50%',
        background: 'white'
    },

    box: {
        width: '100%',
        height: '100%',
    },

    h2: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: '1 0 20%',
        fontSize: '35px',
        paddingTop: '20px',
        color: 'black',
        fontFamily: 'Permanent Marker',
    },
    p: {

        textAlign: 'left',
        fontSize: '20px',
        color: 'black',
        fontFamily: 'Permanent Marker',
    },
    img: {
        bottom: '16px',
        right: '16px',
        height: '85%',
        width: '10%',
        display: 'flex',
        justifyContent: 'flex-start'

    },
    form: {

        textAlign: 'left',
        margin: '20px',
    },

    input: {
        display: 'block',
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%',
    },
    card: {
        width: '40rem',
        borderWidth: '2px',
        //borderColor:'DarkBlue'
        borderColor: 'black',
    },
    cardButton: {
        //backgroundColor:'DarkBlue',
        backgroundColor: 'black',
        color: 'white'
    }

};


export default function Contact() {

    // Create state variables for the fields in the form so we can clear the inputs after submitting 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorEmptyNameMessage, setErrorEmptyNameMessage] = useState('');
    const [errorInvalidEmailMessage, setErrorInvalidEmailMessage] = useState('');
    const [errorEmptyEmailMessage, setErrorEmptyEmailMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Create a function to handle the onChange event for the inputs 
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }

    };

    const handleFocusChange = (e) => {
        // Getting the value and name of the input which triggered the change 
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            if (!inputValue) {
                setErrorEmptyEmailMessage('Email is required.');
                return;
            }
            if (!validateEmail(inputValue)) {
                setErrorInvalidEmailMessage('Your email is invalid.');

                return;
            }

        } else if (inputType === 'name') {
            if (!inputValue) {
                setErrorEmptyNameMessage('Name is required.');
                return;
            }

        } else {
            if (!inputValue) {
                setErrorMessage('Message is required.');
                return;
            }

        }

        setErrorEmptyNameMessage('');
        setErrorEmptyEmailMessage('');
        setErrorInvalidEmailMessage('');
        setErrorMessage('');
    };


    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!name) {
            setErrorEmptyNameMessage('Name is required.');

            return;
        }

        if (!validateEmail(email)) {
            setErrorInvalidEmailMessage('Your email is invalid.');

            return;
        }

        if (!message) {
            setErrorMessage('Message is required.');

            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorEmptyNameMessage('');
        setErrorEmptyEmailMessage('');
        setErrorInvalidEmailMessage('');
        setErrorMessage('');
    };



    return (
        <div className="container" style={styles.div}>
            <div style={styles.box}>
                <h2 style={styles.h2}><b>Contact Me</b></h2>

                <Card style={styles.card}>
                    <Card.Body>
                        <form className="form" style={styles.form}>
                            <label htmlFor="name" style={styles.p}>Name:</label>
                            <input
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                onBlur={handleFocusChange}
                                type="text"
                                placeholder="Name"
                                style={styles.input}
                            />

                            {errorEmptyNameMessage && (
                                <div>
                                    <p className="error-text" style={styles.p}>{errorEmptyNameMessage}</p>
                                </div>
                            )}
                            <label htmlFor="email" style={styles.p}>Email:</label>
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleFocusChange}
                                type="email"
                                placeholder="Email"
                                style={styles.input}
                            />
                            {errorEmptyEmailMessage && (
                                <div>
                                    <p className="error-text" style={styles.p}>{errorEmptyEmailMessage}</p>
                                </div>
                            )}
                            {errorInvalidEmailMessage && (
                                <div>
                                    <p className="error-text" style={styles.p}>{errorInvalidEmailMessage}</p>
                                </div>
                            )}
                            <label htmlFor="message" style={styles.p}>Message:</label>
                            <textarea
                                rows="5"
                                value={message}
                                name="message"
                                onChange={handleInputChange}
                                onBlur={handleFocusChange}
                                type="text"
                                placeholder="Message"
                                style={styles.input}
                            />
                            {errorMessage && (
                                <div>
                                    <p className="error-text" style={styles.p}>{errorMessage}</p>
                                </div>
                            )}
                            <button type="button" style={styles.cardButton} onClick={handleFormSubmit}>Submit</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}