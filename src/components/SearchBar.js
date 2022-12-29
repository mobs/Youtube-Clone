import React from 'react';
import { Paper, TextField } from '@mui/material';

class SearchBar extends React.Component {
    state = {
        searchText: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({ searchText: e.target.value});
    }

    handleSubmit = (e) => {
        const { searchText } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchText);
        e.preventDefault();

    }

    render () {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;