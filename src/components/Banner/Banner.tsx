import React from 'react';
// import raj from '../../assets/rajasthan.png';
import fashion from '../../assets/clothe_brand.png';

const Banner: React.FC = () => (
  <section className="mb-8 w-full border-b border-gray-200 bg-white">
    <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row">
      {/* Banner Text */}
      <div className="flex-1 space-y-5 text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Welcome to{' '}
          <span className="rounded-xl bg-violet-50 px-2 py-1 text-violet-600">CLIC FASHION</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-700 md:mx-0 md:text-xl">
          Discover handpicked products, exclusive deals, and the latest trends.
          <br />
          Shop with confidence and enjoy a seamless experience across all your favorite categories!
        </p>
        <div className="mt-2 flex justify-center gap-3 md:justify-start">
          <span className="inline-block rounded-lg bg-violet-100 px-4 py-2 font-semibold text-violet-700 shadow">
            Trending Now
          </span>
          <span className="inline-block rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-700 shadow">
            Summer Collection
          </span>
        </div>
      </div>
      {/* Banner Image */}
      <div className="flex flex-1 justify-center md:justify-end">
        <div className="relative flex h-56 w-40 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg md:h-72 md:w-52">
          <img
            src={fashion}
            alt="Fashion Banner"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
