import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const Sidebar = () => {
    return (
        <List>
            {categories.map((category, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={category} />
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;
