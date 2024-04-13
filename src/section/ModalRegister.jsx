
import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const ModalRegister = (props) => {
   

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleshow =()=>setShow(true);
  
    return (
        <div className="modal show"
            style={{ display: 'block', position: 'initial' }}>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register New Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action=''>
                    <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">FullName</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="fullname" required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="email" required  placeholder='jonson@gmail.com'/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="phonenumber" required />
                            </div>
                        </div>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}

export default ModalRegister
