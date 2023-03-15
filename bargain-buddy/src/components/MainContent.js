import React, { useEffect, useState } from 'react';
import { getProductDetails } from '../product/amazonApi';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MainContent = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductDetails('B08H8VZ6PV', 'US');
            setProductData(data);
        };
        fetchData();
    }, []);

    return (
        <>
            {productData ? (
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={productData.image}
                        alt={productData.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {productData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {productData.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description: {productData.description}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="h6">Loading...</Typography>
            )}
        </>
    );
};

export default MainContent;
