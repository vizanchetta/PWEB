import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

class Container extends React.Component {
    constructor(props) {
        super()
        this.state = {
            menuOpen: false
        }
    }

    sidebar = () => {
        const navigateToPage = (destination) => {
            window.location.assign(destination)
        }
        return (
            <Drawer open={this.state.menuOpen}
                onClose={() => { this.setState({ menuOpen: false }) }}
            >
                <ListItem button onClick={() => { navigateToPage("/") }}>
                    <ListItemText primary={"Quem sou eu"} />
                </ListItem>

                <ListItem button onClick={() => { navigateToPage("/movie") }}>
                    <ListItemText primary={"O filme"} />
                </ListItem>
                
                <ListItem button onClick={() => { navigateToPage("/character") }}>
                    <ListItemText primary={"Personagens"} />

                </ListItem>

            </Drawer>
        )
    }

    header = () => {
        return (
            <AppBar position="static" >
                <Toolbar style={{ position: "static", backgroundColor: "#e53935"}}>
                    <IconButton
                        onClick={() => { this.setState({ menuOpen: true }) }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        O Fabuloso Destino de Amélie Poulain
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

    footer = () => {
        return (
            <Toolbar style={{ position: "absolute", backgroundColor: "#b71c1c", height: "8vh", color: "white" }}>
                <p>Esse site foi desenvolvido para o trabalho de Portfólio para a matéria de PWEB - <i>professora Denilce</i></p>
            </Toolbar>
        )
    }

    render() {
        return (
                <div>
                    {this.sidebar()}
                    {this.header()}
                    <div style={{height: "100vh"}}>
                        {this.props.children}
                    </div>
                    {this.footer()}
                </div>
        )
    }
}

export default Container;