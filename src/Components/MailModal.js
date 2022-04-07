import React from 'react';  
import { Button,Modal} from 'react-bootstrap';  
class MailModal extends React.Component {  
  constructor(){  
    super();  
    this.state={  
      show:false  
    }  
  }  
  handleModal(){  
    this.setState({show:!this.state.show})  
  }  
  render(){  
    return (  
      <div>  
        <h2 align='center'>Example of Modal in Reactjs</h2>  
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
          <Modal.Body>This is a Modal Body</Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal>  
      </div>  
    )  
  }  
}  
export default MailModal;  