import NavbarDropdownUL from "./NavbarDropdownUL";

export default function NavbarULItem({name, hasDropdown}) {
    return (
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{name}</a>
            {hasDropdown && <NavbarDropdownUL />}
        </li>
    )
}