import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    IconButton,
} from "@mui/material";
import Pagination from "@mui/lab/Pagination";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MainContent = ({ searchQuery }) => {
    const [productData, setProductData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [lovedItems, setLovedItems] = useState(() => {
        const storedLovedItems = localStorage.getItem("lovedItems");
        return storedLovedItems ? JSON.parse(storedLovedItems) : [];
    });

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

    const toggleLovedItem = (product) => {
        const isLoved = lovedItems.some((item) => item.link === product.link);

        if (isLoved) {
            const newLovedItems = lovedItems.filter(
                (item) => item.link !== product.link
            );
            setLovedItems(newLovedItems);
            localStorage.setItem("lovedItems", JSON.stringify(newLovedItems));
        } else {
            const newLovedItems = [...lovedItems, product];
            setLovedItems(newLovedItems);
            localStorage.setItem("lovedItems", JSON.stringify(newLovedItems));
        }
    };

    const renderProducts = () => {
        if (!productData) {
            return <Typography variant="h6">Please enter a search query.</Typography>;
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
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={() => toggleLovedItem(product)}
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                    <Typography gutterBottom variant="h5" component="div">
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
