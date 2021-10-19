import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import About from './components/about us/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import  NotFound  from './components/NotFound/NotFound';




function App() {
  return (
    
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/details/:serviceId">
           <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route exact path='/contact'>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
      <Register></Register>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
  
     
     
    </div>
  );
}

export default App;
