import React, { Component} from 'react';

import { Container, Button, Form } from 'react-bootstrap';
class TaskAdd extends Component {
    
    render() { 
        return ( 
            <Container>
                <Form>
                <div>
                    <input
                    type="task"
                    placeholder="Add your task here"
                    />
                    <Button>
                    add task
                    </Button>
                </div>  
                </Form>
            </Container>
         );
    }
}
 
export default TaskAdd;