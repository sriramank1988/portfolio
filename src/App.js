import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

function Home (){
  return(
    <section>
      <h1>!!Home sweet Home!!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio provident molestias vero, totam cum tenetur sequi minima rem neque, praesentium blanditiis reiciendis aut quam rerum? Sit cum numquam reprehenderit!</p>
    </section>
  )
}
function Project (){
  return(
    <section>
      <h1>!!Project Details!!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio provident molestias vero, totam cum tenetur sequi minima rem neque, praesentium blanditiis reiciendis aut quam rerum? Sit cum numquam reprehenderit!</p>
    </section>
  )
}
function Story (){
  return(
    
    <section>
    <h1>!! My Story!!</h1>
    <h3>First role – Regression, smoke and sanity testing. (Quality Associate)</h3>
    <p>
      System – Kindle<br/> 
      Environment – Agile, CI/CD<br/> 
      Tools used – SpiraTest, Putty.
    </p>
    <p>
      Built auditing process using Perl script which translates key press events from logs to human readable format and in this process learned regular expressions. I was internally referred by my manager, I left this role to continue to learn and grow in a new role. 
    </p>
    <h3>Second role – Regex, customer tickets, auto alert tickets, con-calls. (Support Engineer)</h3>
    <p>
      System – Open Source Web interface<br/> 
      Environment – Linux<br/> 
      Tools used – developer tools in chrome 
    </p>
    <p>
      I was applying my regular expressions knowledge. A pilot team in which again I was entrusted to develop the processes and procedures. I was placed as a SPOC (single point of contact for APAC) because of my strong communication particularly with non-technical audiences. Here I learnt the philosophy of its okay to make a mistake, but we must learn from it.
    </p>
    <h3>Third Role</h3>
    </section>
  )
}
function Contact (){
  return(
    <section>
      <h1>!!Contact!!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio provident molestias vero, totam cum tenetur sequi minima rem neque, praesentium blanditiis reiciendis aut quam rerum? Sit cum numquam reprehenderit!</p>
    </section>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/projects">Projects</Link>
          <Link to ="/story">My Story</Link>
          <Link to ="/contact">Contact Me</Link>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/story">
              <Story />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
