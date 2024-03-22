import NavbarDropdownDivider from "./NavbarDropdownDivider";
import NavbarDropdownItem from "./NavbarDropdownItem";

export default function NavbarDropdownUL() {

    const myFunction = () => {
        //do Something;

        //mundet me kon funksion ce e bllokon load of page per 5 seconds;
    }

    return (
        <ul class="dropdown-menu">
            <NavbarDropdownItem name="Action" />
            <NavbarDropdownItem name="Another Action" />
            <NavbarDropdownDivider />
            <NavbarDropdownItem name="Something else"/>
        </ul>
    )
}