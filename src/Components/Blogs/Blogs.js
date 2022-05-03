import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-4 blog'>
            <h1 className='pb-2'>Blogs</h1>
            <div className='text-start blogs p-4'>
           
            <h4><strong>Question-1: </strong>  When should you use node.js and when should you use mongodb?</h4>
            <p><strong>Answer: </strong>We should use node.js for backend API services and non blocking servers. We should use mongodb when we want to  store any type of file which can be any size without effecting our stack.</p>
            <h4><strong>Question-2: </strong>What are the differences between sql and nosql databases?</h4>
            <p><strong>Answer: </strong>The differences between sql and nosql databases are - SQL databases are vertically scalable,  NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </p>
            <h4><strong>Question-3: </strong> What is the purpose of JWT? How does it work?</h4>
            <p><strong>Answer: </strong>The purpose of JWT is an  sharing security information between two parties - client and server., When the user logs in using their credentials, a JSON Web Token will be returned. Whenever the user wants to access a protected route , the user agent send the JWT. . The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources.</p>
            </div>
        </div>

    );
};

export default Blogs;