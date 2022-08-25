import React from 'react'
import { Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <>
        <h1 style={{textAlign: 'center'}}>Admin Dashboard</h1>
        <Nav variant='tabs'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/overview'>
            <Nav.Link>Overview</Nav.Link>
          </LinkContainer>
        </Nav>
        <Outlet/>
    </>
  )
}
