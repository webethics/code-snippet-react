import React from "react";
import useAuth from "../../authentication/useAuth";
import { useGetProductsQuery } from "../../store/slices/prodcuts";

// Define types for product data
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const Products: React.FC = () => {
    const { data, isLoading, isError } = useGetProductsQuery("");
    const { logout } = useAuth();

    if (isLoading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    if (isError) {
        return (
            <div className="text-center mt-4 text-red-500">Error fetching products. Please try again later.</div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((product: Product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-gray-800 font-semibold">${product.price}</p>
                            <p className="text-gray-600">
                                Rating: {product.rating.rate} ({product.rating.count} reviews)
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
