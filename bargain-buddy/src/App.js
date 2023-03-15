import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import TodayDeals from './components/TodayDeals';
import MainContent from './components/MainContent';

function App() {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SearchBar />
                        <MainContent />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TodayDeals />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
