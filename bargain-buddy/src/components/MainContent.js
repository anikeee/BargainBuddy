// MainContent.js

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Pagination from "@mui/lab/Pagination";
import axios from "axios";

const MainContent = ({ searchQuery }) => {
    const [productData, setProductData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const fetchProductData = async (query) => {
        const options = {
            method: "GET",
            url: "https://pricer.p.rapidapi.com/str",
            params: { q: query },
            headers: {
                "X-RapidAPI-Key": "6e3bc1d031msh5140980f27995c8p1559e5jsn6a707fc97c99",
                "X-RapidAPI-Host": "pricer.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery) {
                const data = await fetchProductData(searchQuery);
                setProductData(data);
            } else {
                setProductData(null);
            }
        };
        fetchData();
    }, [searchQuery]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const renderProducts = () => {
        if (!productData) {
            return <Typography variant="h6">Please enter your product name</Typography>;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentProducts = productData.slice(startIndex, endIndex);

        if (currentProducts.length === 0) {
            return <Typography variant="h6">Product not found...</Typography>;
        }

        return (
            <>
                <Grid container spacing={2}>
                    {currentProducts.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.shop}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    count={Math.ceil(productData.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{ mt: 4 }}
                />
            </>
        );
    };

    return <>{renderProducts()}</>;
};

export default MainContent;
