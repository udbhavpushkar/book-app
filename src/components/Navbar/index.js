import React from 'react';
import {AppBar, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Brightness2, Brightness7, LibraryBooks, Search} from "@material-ui/icons";
import useStyles from "./style";

const Navbar = ({setMode, mode}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color={mode?"default":"primary"} position="sticky">
                <Toolbar>
                    <LibraryBooks/>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Book App
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton onClick={()=>setMode(!mode)} color="inherit">
                        {mode?<Brightness7/>:<Brightness2/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;