import React from 'react'
import { Container, Navbar } from 'react-bootstrap'



function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-cart-shopping fa-beat-fade"></i>
           
            Product List 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header