import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user =result.user;
            console.log(user); 
            form.reset();
            navigate(from, { replace: true });   
        })
        .catch(error => {
            console.error(error)
            alert(error.message)
        });
    }


    return (
        <div className='mb-5 mt-5'>
            <h2>Please Log In</h2>
           <Form onSubmit={handleSubmit} className='mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Don't Have account, please <Link to='/reg'>Sign Up</Link> 
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;