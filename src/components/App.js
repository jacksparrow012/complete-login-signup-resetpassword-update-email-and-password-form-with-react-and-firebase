import SignUp from "./SignUp"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container className="d-flex justify-content-center align-items-center mt-2">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignUp />
          </div>


        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
