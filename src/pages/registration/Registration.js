import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/AuthProvider';

const Registration = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='mb-5 mt-5'>
            <h2>Register</h2>
           <Form className='mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Signed Up, please <Link to='/login'>log in</Link> 
                </Form.Text>
            </Form>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" size="lg">
                <FaGoogle></FaGoogle> Sign in with GOOGLE
            </Button>
        </div>
    );
};

export default Registration;