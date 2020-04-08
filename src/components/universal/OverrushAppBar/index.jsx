import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class OverrushAppBar extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                        justify='space-between'
                    >
                        <Grid item>
                            <div>
                                <Grid container alignItems='center'>
                                    <IconButton color='inherit'>
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant='h6'>
                                        Overrush PH
                                    </Typography>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='inherit'>
                                SIGN IN
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}
