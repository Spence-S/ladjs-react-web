import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

export default function SignInModal({
  show,
  isSignIn,
  handleClose,
  showSignIn,
  showCreateAccount,
  toggleSignIn,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="text-center d-block" closeButton>
        <Modal.Title className="d-inline-block ml-4">
          {isSignIn ? "Welcome Back!" : "Sign Up Now"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email address"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Text size="small" className="text-right">
              <Link to="/en/forgot-password" className="text-secondary">
                Forgot your password?
              </Link>
            </Form.Text>
          </Form.Group>
        </Form>
        <Button variant="success" size="lg" block>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Button>
        <Alert
          variant="light"
          className="alert alert-light border mt-3 text-center mb-0"
        >
          {isSignIn ? "Need an account? " : "Already have an accout? "}
          <Link onClick={toggleSignIn} to="#">
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
          {isSignIn ? null : (
            <p className="mt-3 mb-0 text-center">
              Read our <Link to="#">Privacy Policy </Link>
              and <Link to="#">terms</Link>
            </p>
          )}
        </Alert>
      </Modal.Body>
    </Modal>
  );
}
