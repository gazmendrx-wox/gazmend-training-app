import { useState } from "react"

export default function NavbarDropdownItem({name}) {
    const [data, setData] = useState(null);

    const hello = () => {
        //whatever function
        setData({id: name}) //gazmend
    }

    return (
        <li><a class="dropdown-item" href="#">{name}</a></li>
    )
}