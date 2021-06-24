import React from "react"
import "./NavBar.css"
import { Navbar, NavbarBrand, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"
import { useHistory } from "react-router-dom"

export const NavBar = () => {
    const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem("tech_token")
        localStorage.removeItem("is_logged_in")
        history.push("/login")
    }
    return (
        <div className="navBarSection">
            <Navbar color="black">
                <NavbarBrand href="/">Tech</NavbarBrand>
                {(localStorage.getItem("tech_token") !== null) && (
                    <>
                        <UncontrolledDropdown nav inNavbar className="navItem">
                            <DropdownToggle nav caret>Profile</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={handleLogout}>
                                    <div className="navText">Logout</div>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </>
                )}
                <NavbarText>Welcome</NavbarText>
            </Navbar>
        </div>
    )
}
