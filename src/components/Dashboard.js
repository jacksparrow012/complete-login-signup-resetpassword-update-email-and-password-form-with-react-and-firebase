import React, { useState } from 'react';
import { Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../components/context/AuthContext"
import { useHistory } from "react-router-dom"
const Dashboard = () => {
    const [error, setError] = useState("")
    const { currentUser, Logout } = useAuth()
    const history = useHistory();
    async function handleLogout() {
        try {
            setError("")
            await Logout();
            history.push("/login")
        }
        catch {
            setError("Cannot Log out")
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email</strong>: {currentUser.email}
                    <Button to="/update-profile" className="btn btn-primary w-100">Update Profile</Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log out</Button>
            </div>
        </>
    );
};

export default Dashboard;