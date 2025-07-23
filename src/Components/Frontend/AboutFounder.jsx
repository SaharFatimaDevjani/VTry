
import React from 'react';
const AboutFounder = () => (
  <div className="about-page max-w-7xl mx-auto px-5 py-10 font-serif text-gray-900">

    {/* About the Founder Section */}
    <section className="founder-section flex flex-col md:flex-row items-start gap-10 mb-10">
      <div className="founder-text flex-1">
        <small className="text-gray-600 text-xs uppercase tracking-wide">Meet the founder</small>
        <h2 className="text-2xl font-semibold mt-2">ABOUT THE FOUNDER</h2>
        <p className="subtitle text-sm text-gray-600 mt-3 uppercase tracking-wide">
          FUSCE EGESTAS SEM URNA, ID PLACERAT VELIT DICTUM EGET. MAURIS IN DOLOR VELIT.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Praesent fringilla dolor nec mauris euismod, eu rutrum mauris tincidunt. Mauris
          tincidunt, sem eu convallis dictum, massa erat cursus enim, nec dictum sem
          mauris eu erat. Suspendisse potenti. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className="founder-image flex-none w-64">
        <img
          src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
          alt="Founder"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
    </section>

  </div>

);

export default AboutFounder;