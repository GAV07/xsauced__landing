import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { BiGroup, BiPaint, BiHappy, BiLogInCircle, BiHeart } from 'react-icons/bi'

const Conduct = () => {

    return (
        <section className="conduct">
            <div>
                <h1>Code of Conduct</h1>
            </div>
            <div className="conduct__list">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <BiPaint/>
                    </ListItemIcon>
                    <ListItemText> 
                        This is a community. Act like you live here too. (or we’ll kick you out)
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BiGroup/>
                    </ListItemIcon>
                    <ListItemText> 
                        Shoes are wearable art. Treat them accordingly.
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BiHappy/>
                    </ListItemIcon>
                    <ListItemText> 
                        Together we’re better. Help out where you can. We’re all figuring it out.
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BiLogInCircle/>
                    </ListItemIcon>
                    <ListItemText> 
                        Pay it forward. Manifest your future. Stop the short-term BS. That’s it.
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BiHeart/>
                    </ListItemIcon>
                    <ListItemText> 
                        There’s beauty in everything. Love yourself. Appreciate what you have.
                    </ListItemText>
                </ListItem>
            </List>
        </div>
        </section>
    )
}

export default Conduct