import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
  <div className="group relative flex flex-col rounded-xl bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
    <div className="relative">
      <img
        src={product.images[0] || product.thumbnail}
        alt={product.title}
        className="mx-auto h-40 w-full rounded-lg bg-gray-50 object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-2 left-2 rounded bg-pink-500 px-2 py-1 text-xs font-bold text-white shadow">
        ${product.price}
      </span>
      {product.discountPercentage > 0 && (
        <span className="absolute top-2 right-2 rounded bg-green-500 px-2 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage}%
        </span>
      )}
    </div>
    <div className="mt-4 flex flex-1 flex-col gap-2">
      <h2 className="text-md truncate font-semibold text-gray-900">{product.title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-600">{product.category}</span>
        <span className="flex items-center gap-1">
          <svg
            className="inline-block h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.955L10 1.5l2.951 5.455 6.561.955-4.756 3.635 1.122 6.545z" />
          </svg>
          {product.rating}
        </span>
      </div>
      <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
    </div>
    <button
      className="mt-4 rounded-lg bg-blue-600 py-2 font-medium text-white shadow transition-colors duration-200 group-hover:scale-105 hover:bg-blue-700 active:scale-95"
      onClick={() => onAddToCart?.(product)}
      aria-label={`Add ${product.title} to cart`}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
