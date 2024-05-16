import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    const submitted = ({isActive}) => (isActive ? 'submitted' : '')
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/request' className={submitted}>Запросы</NavLink>
                    </li>
                    <li>
                        <NavLink to='/create' className={submitted}>Создать пост</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;