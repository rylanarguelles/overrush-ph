import React from 'react';
import Grid from '@material-ui/core/Grid';
import OverrushAppBar from './components/universal/OverrushAppBar';

export default class App extends React.Component {
    render() {
        return (
            <Grid container direction='column'>
                <Grid item>
                    <OverrushAppBar />
                </Grid>
            </Grid>
        );
    }
}
