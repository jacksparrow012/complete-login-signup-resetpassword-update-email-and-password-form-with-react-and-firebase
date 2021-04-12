import SignUp from "./SignUp"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRouter from "./PrivateRouter"
import ForgetPassword from "./ForgetPassword"
import UpdateProfile from "./UpdateProfile"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (


    <Container className="d-flex justify-content-center align-items-center mt-2">
      <div className="w-100" style={{ maxWidth: "400px" }}>

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRouter exact path="/" component={Dashboard} />
              <PrivateRouter exact path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forget-password" component={ForgetPassword} />
            </Switch>
          </AuthProvider>

        </Router>



      </div>


    </Container>


  );
}

export default App;
