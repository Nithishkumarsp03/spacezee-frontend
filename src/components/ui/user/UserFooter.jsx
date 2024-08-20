import React from "react";
import { Container } from "react-bootstrap";

const UserFooter = () => (
  <footer className="bg-light border-top py-3 mt-auto">
    <Container className="container-md">
      <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
        <ul className="nav mb-3 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="/faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="/privacy">
              Privacy policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="/terms">
              Terms and Conditions
            </a>
          </li>
        </ul>
        <span className="text-muted">© SL & IL Tech platform</span>
      </div>
    </Container>
  </footer>
);

export default UserFooter;
