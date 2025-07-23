
import React from 'react';
const HowAllStartedSection = () => (

     <section className="started-section mt-10">
      <div className="started-image">
        <img
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
          alt="Drawing Jewelry"
          className="w-full h-64 object-cover rounded-md mb-8"
        />
      </div>
      <div className="started-content flex flex-col md:flex-row gap-10 mt-8">
        <div className="started-title flex-1">
          <small className="text-gray-600 text-xs uppercase tracking-wide">About us</small>
          <h2 className="text-2xl font-semibold mt-2">HOW IT ALL STARTED</h2>
        </div>
        <div className="started-text flex-2">
          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-3 uppercase tracking-wide">
            ETIAM VIVAMUS MATTIS MAURIS, ET TEMPOR URNA LUCTUS NON.
          </h4>
          <p className="text-sm text-gray-700 mb-4">
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <b className="font-semibold text-gray-900">700+ Established</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <b className="font-semibold text-gray-900">700+ Vision International</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <b className="font-semibold text-gray-900">700+ Super Potential</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <b className="font-semibold text-gray-900">200+ Installations</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section> 
);

export default HowAllStartedSection;