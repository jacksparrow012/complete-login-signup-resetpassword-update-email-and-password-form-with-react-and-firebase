import React, { useRef, useState } from 'react';
import { Button, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../components/context/AuthContext"
import { Link, useHistory } from "react-router-dom"
const ForgetPassword = () => {
    const emailRef = useRef();


    const { resetPassword } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage("")
            setError("")
            setLoading(false)
            await resetPassword(emailRef.current.value)
            setMessage("Plz check Your Mail inbox for further Instruction")
        } catch {
            setError("Cannot Reset Password/ make sure you Registered")

        }
        setLoading(true)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success" >{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} />
                        </Form.Group>


                        <Button type="submit" className="w-100" disabled={loading}>Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Log In?</Link>
                    </div>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Need an acount? <Link to="/signup">  Sign Up</Link>

            </div>
        </>
    )
}
export default ForgetPassword;