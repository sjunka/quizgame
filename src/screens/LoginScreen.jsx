import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const LoginScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default LoginScreen;