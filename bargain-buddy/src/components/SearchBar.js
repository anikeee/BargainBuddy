import React from 'react';
import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: 2
            }}
        >
            <InputBase
                sx={{
                    marginLeft: 1,
                    flex: 1
                }}
                placeholder="Search…"
            />
            <SearchIcon />
        </Paper>
    );
};

export default SearchBar;
