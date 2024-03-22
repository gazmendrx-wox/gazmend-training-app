import NavbarUL from "./NavbarUL"
import NavbarForm from "./NavbarForm"
import NavbarToggle from "./NavbarToggle"
import NavbarBrand from "./NavbarBrand"

export default function Navbar(){
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <NavbarBrand />
            <NavbarToggle />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarUL />
            <NavbarForm />
          </div>
        </div>
      </nav>
    )
}