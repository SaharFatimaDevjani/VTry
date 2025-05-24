import React from 'react';

const products = [
  {
    id: 1,
    title: 'Hair Straightener Brush 2-in-1',
    price: 'Rs.1,099',
    discount: '-45%',
    rating: 4.5,
    reviews: 962,
    img: 'https://img.drz.lazcdn.com/static/pk/p/1c2eeec860c7d7f19ccb33c5ec482cf4.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 2,
    title: 'Mini Wireless Bluetooth Earbuds',
    price: 'Rs.699',
    discount: '-56%',
    rating: 4.2,
    reviews: 643,
    img: 'https://img.drz.lazcdn.com/static/pk/p/f1e807670f4b48d351503533223a2552.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 3,
    title: 'Portable Juicer Blender 6 Blade',
    price: 'Rs.1,299',
    discount: '-40%',
    rating: 4.6,
    reviews: 752,
    img: 'https://img.drz.lazcdn.com/static/pk/p/8c94c1e1344afc245b2759a0fdca34a0.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 4,
    title: 'LED Ring Light with Tripod',
    price: 'Rs.799',
    discount: '-70%',
    rating: 4.3,
    reviews: 312,
    img: 'https://img.drz.lazcdn.com/g/kf/Sc7383cd3bcfa489bb1b738176134db44d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 5,
    title: 'Rechargeable Hair Trimmer for Men',
    price: 'Rs.549',
    discount: '-61%',
    rating: 4.4,
    reviews: 430,
    img: 'https://img.drz.lazcdn.com/static/pk/p/6670fd9a754004456ce6c98cc9f42a0d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 6,
    title: '2 in 1 Electric Lint Remover Shaver',
    price: 'Rs.349',
    discount: '-50%',
    rating: 4.1,
    reviews: 521,
    img: 'https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 1,
    title: 'Hair Straightener Brush 2-in-1',
    price: 'Rs.1,099',
    discount: '-45%',
    rating: 4.5,
    reviews: 962,
    img: 'https://img.drz.lazcdn.com/static/pk/p/1c2eeec860c7d7f19ccb33c5ec482cf4.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 2,
    title: 'Mini Wireless Bluetooth Earbuds',
    price: 'Rs.699',
    discount: '-56%',
    rating: 4.2,
    reviews: 643,
    img: 'https://img.drz.lazcdn.com/static/pk/p/f1e807670f4b48d351503533223a2552.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 3,
    title: 'Portable Juicer Blender 6 Blade',
    price: 'Rs.1,299',
    discount: '-40%',
    rating: 4.6,
    reviews: 752,
    img: 'https://img.drz.lazcdn.com/static/pk/p/8c94c1e1344afc245b2759a0fdca34a0.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 4,
    title: 'LED Ring Light with Tripod',
    price: 'Rs.799',
    discount: '-70%',
    rating: 4.3,
    reviews: 312,
    img: 'https://img.drz.lazcdn.com/g/kf/Sc7383cd3bcfa489bb1b738176134db44d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 5,
    title: 'Rechargeable Hair Trimmer for Men',
    price: 'Rs.549',
    discount: '-61%',
    rating: 4.4,
    reviews: 430,
    img: 'https://img.drz.lazcdn.com/static/pk/p/6670fd9a754004456ce6c98cc9f42a0d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 6,
    title: '2 in 1 Electric Lint Remover Shaver',
    price: 'Rs.349',
    discount: '-50%',
    rating: 4.1,
    reviews: 521,
    img: 'https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 1,
    title: 'Hair Straightener Brush 2-in-1',
    price: 'Rs.1,099',
    discount: '-45%',
    rating: 4.5,
    reviews: 962,
    img: 'https://img.drz.lazcdn.com/static/pk/p/1c2eeec860c7d7f19ccb33c5ec482cf4.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 2,
    title: 'Mini Wireless Bluetooth Earbuds',
    price: 'Rs.699',
    discount: '-56%',
    rating: 4.2,
    reviews: 643,
    img: 'https://img.drz.lazcdn.com/static/pk/p/f1e807670f4b48d351503533223a2552.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 3,
    title: 'Portable Juicer Blender 6 Blade',
    price: 'Rs.1,299',
    discount: '-40%',
    rating: 4.6,
    reviews: 752,
    img: 'https://img.drz.lazcdn.com/static/pk/p/8c94c1e1344afc245b2759a0fdca34a0.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 4,
    title: 'LED Ring Light with Tripod',
    price: 'Rs.799',
    discount: '-70%',
    rating: 4.3,
    reviews: 312,
    img: 'https://img.drz.lazcdn.com/g/kf/Sc7383cd3bcfa489bb1b738176134db44d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 5,
    title: 'Rechargeable Hair Trimmer for Men',
    price: 'Rs.549',
    discount: '-61%',
    rating: 4.4,
    reviews: 430,
    img: 'https://img.drz.lazcdn.com/static/pk/p/6670fd9a754004456ce6c98cc9f42a0d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 6,
    title: '2 in 1 Electric Lint Remover Shaver',
    price: 'Rs.349',
    discount: '-50%',
    rating: 4.1,
    reviews: 521,
    img: 'https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 1,
    title: 'Hair Straightener Brush 2-in-1',
    price: 'Rs.1,099',
    discount: '-45%',
    rating: 4.5,
    reviews: 962,
    img: 'https://img.drz.lazcdn.com/static/pk/p/1c2eeec860c7d7f19ccb33c5ec482cf4.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 2,
    title: 'Mini Wireless Bluetooth Earbuds',
    price: 'Rs.699',
    discount: '-56%',
    rating: 4.2,
    reviews: 643,
    img: 'https://img.drz.lazcdn.com/static/pk/p/f1e807670f4b48d351503533223a2552.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 3,
    title: 'Portable Juicer Blender 6 Blade',
    price: 'Rs.1,299',
    discount: '-40%',
    rating: 4.6,
    reviews: 752,
    img: 'https://img.drz.lazcdn.com/static/pk/p/8c94c1e1344afc245b2759a0fdca34a0.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 4,
    title: 'LED Ring Light with Tripod',
    price: 'Rs.799',
    discount: '-70%',
    rating: 4.3,
    reviews: 312,
    img: 'https://img.drz.lazcdn.com/g/kf/Sc7383cd3bcfa489bb1b738176134db44d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 5,
    title: 'Rechargeable Hair Trimmer for Men',
    price: 'Rs.549',
    discount: '-61%',
    rating: 4.4,
    reviews: 430,
    img: 'https://img.drz.lazcdn.com/static/pk/p/6670fd9a754004456ce6c98cc9f42a0d.jpg_200x200q80.jpg_.webp',
  },
  {
    id: 6,
    title: '2 in 1 Electric Lint Remover Shaver',
    price: 'Rs.349',
    discount: '-50%',
    rating: 4.1,
    reviews: 521,
    img: 'https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_200x200q80.jpg_.webp',
  },
];

export default function JustForYou() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">Just For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map(({ id, title, price, discount, rating, reviews, img }) => (
          <div
            key={id}
            className="border border-neutral-200 rounded-md p-2 hover:shadow-md transition duration-200"
          >
            <img src={img} alt={title} className="w-full h-[160px] object-contain mb-2" />
            <div className="text-sm font-medium leading-tight line-clamp-2 mb-1">{title}</div>
            <div className="text-orange-600 font-semibold">{price}</div>
            <div className="text-xs text-neutral-500">{discount}</div>
            <div className="text-xs text-yellow-500">
              {'★'.repeat(Math.round(rating))}{' '}
              <span className="text-neutral-500">({reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
