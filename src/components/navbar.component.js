import React,{Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'; 
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";

import ExerciseList from './exercises-list.component';
import CreateExercise from './create-exercise.component';
import CreateUsers from './create-user.component';
import EditExercise from './edit-exercise.component';

export default class NavbarComp extends Component{
    render() {
        return(
            <BrowserRouter>
                <div>
                    
                    <Navbar bg="dark" variant="dark">
                      <Container>
                        <Navbar.Brand as={Link} to="/">ExcerTracker</Navbar.Brand>
                        <Nav className="me-auto">
                          <Nav.Link as={Link} to="/">Exercises</Nav.Link>
                          <Nav.Link as={Link} to="/create">Create Exercise Log</Nav.Link>
                          <Nav.Link as={Link} to="/user">Create User</Nav.Link>
                        </Nav>
                      </Container>
                    </Navbar>
                  
                    <Routes>
                        <Route path="/" element={<ExerciseList />}/>
                        <Route path="/create" element={<CreateExercise/>}/>
                        <Route path="/user" element={<CreateUsers/>}/>
                        <Route path="/edit/:id" element={<EditExercise/>}/>            
                    </Routes>  
                           
                </div>
            </BrowserRouter>
        )
    }
} 