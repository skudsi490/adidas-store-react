import React from 'react';
import Product from '../product/Product';
import './Products.css';
import UltraboostImage from '../../assets/ultraboost-shoe.jpg';
import SuperstarImage from '../../assets/superstar1.webp';
import StansmithImage from '../../assets/Stansmith.jpg';
import AdidasMarathon from '../../assets/sz_666449_a.jpg'; 

const products = [
  {
    id: 1,
    image: UltraboostImage,
    title: 'Ultraboost',
    description: 'Embrace the comfort with Ultraboost, featuring BOOST technology for incredible energy return and cushioning.',
    price: 19.99,
  },
  {
    id: 2,
    image: SuperstarImage,
    title: 'Superstar',
    description: 'Step into an icon. Superstar shoes redefine style with their classic silhouette and rubber shell toe.',
    price: 29.99,
  },
  {
    id: 3,
    image: StansmithImage,
    title: 'Stan Smith',
    description: 'Classic. Minimalist. Essential. The Stan Smith offers a simple yet elegant style for everyday wear.',
    price: 39.99,
  },
  {
    id: 4,
    image: AdidasMarathon,
    title: 'Marathon',
    description: 'Built for endurance, the Marathon series offers superior stability and support for long-distance runners.',
    price: 49.99,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
