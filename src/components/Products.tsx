import Image from 'next/image';
import React from 'react';
import { ProductProps } from '../../type';

const Products = ({ productData }: any) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                src={image}
                width={300}
                height={300}
                alt="productImage"
              />
            </div>
            <hr />
            <div>x</div>
          </div>
        ),
      )}
    </div>
  );
};

export default Products;
