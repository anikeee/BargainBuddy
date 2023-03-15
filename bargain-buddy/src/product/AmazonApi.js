import axios from "axios";

export const getProductDetails = async (asin, country) => {
    const options = {
        method: 'GET',
        url: 'https://amazon23.p.rapidapi.com/product-details',
        params: {asin: asin, country: country},
        headers: {
            'X-RapidAPI-Key': '6e3bc1d031msh5140980f27995c8p1559e5jsn6a707fc97c99',
            'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios(options);
        const { data } = response;
        console.log(data);
        if (data) {
            return {
                title: data.title || '',
                image: data.main_image || '',
                price: data.price && data.price.current_price ? data.price.current_price : '',
                description: data.feature_bullets ? data.feature_bullets.join(', ') : ''
            };
        }

        return null;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error);
        return null;
    }
};
