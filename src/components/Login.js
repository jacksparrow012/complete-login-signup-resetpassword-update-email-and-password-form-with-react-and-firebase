import React, { useRef, useState } from 'react';
import { Button, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../components/context/AuthContext"
import { Link, useHistory } from "react-router-dom"
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { Login } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(false)
            await Login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Cannot Log in")
            setLoading(true)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>

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

                        <Button type="submit" className="w-100" disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Need an acount? <Link to="/signup">  Sign Up</Link>

            </div>
        </>
    )
}
export default Login;