import NavbarULItem from "./NavbarULItem"

export default function NavbarUL() {
    return (
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarULItem name="Home" />
            <NavbarULItem name="Link" />
            <NavbarULItem name="Dropdown" hasDropdown={true}/>
            <NavbarULItem name="Disabled" />
        </ul>
    )
}