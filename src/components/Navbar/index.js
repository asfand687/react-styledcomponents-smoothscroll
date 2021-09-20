import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>HOME</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<div className='nav-links'>
							<NavItem>
								<NavLinks to='about'>About</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='discover'>Discover</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='services'>Services</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='signup'>Signup</NavLinks>
							</NavItem>
						</div>
						<NavBtn>
							<NavBtnLink to='/signin'>Sign In</NavBtnLink>
						</NavBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
