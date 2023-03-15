import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const deals = ['Deal 1', 'Deal 2', 'Deal 3', 'Deal 4'];

const TodayDeals = () => {
    return (
        <List>
            {deals.map((deal, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={deal} />
                </ListItem>
            ))}
        </List>
    );
};

export default TodayDeals;
