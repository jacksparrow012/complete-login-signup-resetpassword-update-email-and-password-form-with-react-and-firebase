import React, { useRef, useState } from 'react';
import { Button, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../components/context/AuthContext"
import { Link, useHistory } from "react-router-dom"
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { Signup } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password does not match, check again")
        }
        try {
            setError("")
            setLoading(false)
            await Signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Cannot create acount")
            setLoading(true)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button type="submit" className="w-100" disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Already have an acount? <Link to="/login">Log In</Link>

            </div>
        </>
    );
};

export default SignUp;