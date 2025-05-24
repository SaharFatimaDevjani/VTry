import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


/**
 * Categories component: displays a grid of category cards
 * Props:
 * - items: array of { id, name, img: { src, alt }, href }
 */
export default function Categories({
  items = defaultCategories
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6   ">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6   gap-1">
        {items.map(({ id, name, img, href }) => (
          
          <Link
            key={id}
            to={`/product/${id}`}
            state={{ name }}
            className="flex flex-col items-center text-center hover:text-orange-600 border p-3 rounded-md hover:shadow-md transition-all bg-white"
          >
            <div
              className={classNames(
                'w-20 h-20 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-md',
                'flex-shrink-0'
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm leading-tight px-1">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const defaultCategories = [
  {
    id: '1',
    name: 'Skincare Essentials',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/27c292344c649a62a9c5e4a784517a7e.png_170x170q80.png_.webp',
      alt: 'Skincare Essentials'
    },
    href: '#'
  },
  {
    id: '2',
    name: 'Headphones',
    img: {
      src: 'https://img.drz.lazcdn.com/collect/sg/p/36f4dcfe5599d89f52c5ed8e2d29baad.jpg_170x170q80.jpg_.webp',
      alt: 'Headphones'
    },
    href: '#'
  },
  {
    id: '3',
    name: 'Hair Oils',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/fcb238de9dcac44b9424f3601b94e671.jpg_170x170q80.jpg_.webp',
      alt: 'Hair Oils'
    },
    href: '#'
  },
  {
    id: '4',
    name: 'Power Banks',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/8a6f179291c33c5a61957e859f9c9a12.jpg_170x170q80.jpg_.webp',
      alt: 'Power Banks'
    },
    href: '#'
  },
  {
    id: '5',
    name: 'Men\'s Fashion',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/4998f23dff70c207f1b225a8a4b6bd12.jpg_170x170q80.jpg_.webp',
      alt: 'Men\'s Fashion'
    },
    href: '#'
  },
  {
    id: '6',
    name: 'Shampoo & Conditioner',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/7046c42bbc1c1b78909a8026785da7da.jpg_170x170q80.jpg_.webp',
      alt: 'Shampoo & Conditioner'
    },
    href: '#'
  },
  {
    id: '7',
    name: 'Foundation & Base',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/efd8439eed7af8ee79f1e48c537ddf41.jpg_170x170q80.jpg_.webp',
      alt: 'Foundation & Base'
    },
    href: '#'
  },
  {
    id: '8',
    name: 'Makeup Tools',
    img: {
      src: 'https://img.drz.lazcdn.com/g/kf/S6b9a75433a1a4c7eadb0950d352d306fe.jpg_170x170q80.jpg_.webp',
      alt: 'Makeup Tools'
    },
    href: '#'
  },
  {
    id: '9',
    name: 'Imported Gadgets',
    img: {
      src: 'https://img.drz.lazcdn.com/3rd/q/aHR0cDovL1pmVzZqLmxoam9tLnRvcC90cmFkZS8yLzI0MDcxMC85ODhjYWE4NDJjOTBmZjNiMDgzNC5qcGc=_170x170q80.png_.webp',
      alt: 'Imported Gadgets'
    },
    href: '#'
  },
  {
    id: '10',
    name: 'Women\'s Fashion',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/70bc16edda3ec385ac280ccd8cc5a3f5.jpg_170x170q80.jpg_.webp',
      alt: 'Women\'s Fashion'
    },
    href: '#'
  },
  {
    id: '10',
    name: 'Women\'s Fashion',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/70bc16edda3ec385ac280ccd8cc5a3f5.jpg_170x170q80.jpg_.webp',
      alt: 'Women\'s Fashion'
    },
    href: '#'
  },
  {
    id: '10',
    name: 'Women\'s Fashion',
    img: {
      src: 'https://img.drz.lazcdn.com/static/pk/p/70bc16edda3ec385ac280ccd8cc5a3f5.jpg_170x170q80.jpg_.webp',
      alt: 'Women\'s Fashion'
    },
    href: '#'
  }
  
];
