import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2>Blog</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors ?</Accordion.Header>
                    <Accordion.Body>
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    Implementing Firebase Authentication is relatively fast and easy. From the Firebase console, just choose from the popular login methods that you want to offer (like Facebook, Google, Twitter and email/password) and then add the Firebase SDK to your app. Because of it created by google, it is more secure comparatively.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. 
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </div>
    );
};

export default Blogs;