import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"
//import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Button, List, ListItem, ListItemText, Drawer } from '@material-ui/core'
import { FaBars } from 'react-icons/fa'


const Header = () => {

    const [isDesktop, setIsDesktop] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
          
    }, [])

   
    const anchor = 'left'  
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemText> 
                        <Link to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText> 
                        <Link to="/investor">Our Story</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
        );
      

    if(isMobile) {
        return (
            <header>
                <Button onClick={toggleDrawer(anchor, true)}><FaBars/></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </header>
        )
    } else {

        
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">Our Story</Link>
                </nav>
            </header>
        )
    }
}

export default Header