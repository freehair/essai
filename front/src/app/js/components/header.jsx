import React from 'react'
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, NavItemLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './home.jsx'
import Test from './test.jsx'
import Test2 from './test2.jsx'
import { Router, Route, Link } from 'react-router'




export default class Header extends React.Component {
	render() {
		return (
			<Navbar inverse>
				<NavBrand>Titre de l'appli à définir</NavBrand>
				<Nav className = 'nav'>
					<LinkContainer to="/home">
		         		<NavItem>Home</NavItem>
		         	</LinkContainer>
		         	<LinkContainer to="/test">
		         		<NavItem>Test1</NavItem>
		         	</LinkContainer>
		         	<LinkContainer to="/test2">
		         		<NavItem>Test2</NavItem>
		         	</LinkContainer>
		   
				</Nav>
			</Navbar>
		)
	}
};




