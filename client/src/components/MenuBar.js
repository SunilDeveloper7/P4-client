    import React, { useContext, useState } from 'react';
    import { Menu } from 'semantic-ui-react';
    import { Link } from 'react-router-dom';

    import { AuthContext } from '../context/auth';

    function MenuBar() {
    const { user, logout } = useContext(AuthContext);
    const pathname = window.location.pathname;

    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = user ? (
        <Menu pointing secondary size="massive" color="pink">
        <Menu.Item name={user.username} active as={Link} to="/" />

        <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={logout} />
        </Menu.Menu>
        </Menu>
    ) : (
        <Menu pointing secondary size="massive" color="green">
        <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
        />

        <Menu.Menu position="right">
            <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
            />
            <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
            />
            <Menu.Item
            name="chat"
            active={activeItem === 'chat'}
            onClick={handleItemClick}
            as={Link}
            to="/chat"
            />
        </Menu.Menu>
        </Menu>
    );

    return menuBar;
    }

    export default MenuBar;



















    // import React, { useState } from 'react'
    // import { Menu} from 'semantic-ui-react'
    // import {Link} from 'react-router-dom'
    // import { AuthContext } from '../context/auth';




    // function MenuBar() {

    //     const pathname= window.location.pathname;

    //     const path = pathname === '/' ? 'home' :pathname.substr(0)
    //     const [ activeItem, setActiveItem] = useState('home');



    //     const handleItemClick = (e, {name}) => setActiveItem(name);

    //     return (
    //         <Menu pointing secondary size='massive' color='green'>
    //             <Menu.Item
    //             name='home'
    //             active={activeItem==='home'}
    //             onClick={handleItemClick}
    //             as={Link}
    //             to="/"
    //         />
    //         <Menu.Item
    //             name='message'
    //             active={activeItem==='message'}
    //             onClick={handleItemClick}
    //             as={Link}
    //             to='/message'
    //             />
            
    //         <Menu.Menu position='right'>
    //         <Menu.Item
    //         name='register'
    //         active={activeItem==='register'}
    //         onClick={handleItemClick}
    //         as={Link}
    //         to="/register"
    //         />
    //         <Menu.Item
    //             name='login'
    //             active={activeItem==='login'}
    //             onClick={handleItemClick}
    //             as={Link}
    //             to="/login"
    //             />
    //         </Menu.Menu>
            

    //             </Menu>
    //     )
    // }

    // export default MenuBar