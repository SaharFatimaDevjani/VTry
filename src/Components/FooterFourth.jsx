import React from 'react';

const FooterInternational = () => {
  const countries = [
    {
      id: 'pk',
      name: 'Pakistan',
      url: '//www.daraz.pk/?scm=1003.4.icms-zebra-5029545-2834483.OTHER_5372735181_2485585',
      flag: 'https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png'
    },
    {
      id: 'bd',
      name: 'Bangladesh',
      url: '//www.daraz.com.bd/?scm=1003.4.icms-zebra-5029545-2834483.OTHER_5372735171_2485585',
      flag: 'https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png'
    },
    {
      id: 'lk',
      name: 'Sri Lanka',
      url: '//www.daraz.lk/?scm=1003.4.icms-zebra-5029545-2834483.OTHER_5372735173_2485585',
      flag: 'https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png'
    },
    {
      id: 'mm',
      name: 'Myanmar',
      url: '//www.shop.com.mm/?scm=1003.4.icms-zebra-5029545-2834483.OTHER_5372735176_2485585',
      flag: 'https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png'
    },
    {
      id: 'np',
      name: 'Nepal',
      url: '//www.daraz.com.np/?scm=1003.4.icms-zebra-5029545-2834483.OTHER_5372735178_2485585',
      flag: 'https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png'
    }
  ];

  const socialMedia = [
    {
      id: 'facebook',
      url: '//www.facebook.com/daraznp/?scm=1003.4.icms-zebra-100024112-2890917.OTHER_5439624051_2540324',
      icon: 'https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png'
    },
    {
      id: 'twitter',
      url: '//twitter.com/darazpk?scm=1003.4.icms-zebra-5029545-2833168.OTHER_5370750445_2485565',
      icon: 'https://img.lazcdn.com/us/domino/77ab92ab-17ae-40ce-aa8b-e8de5974939d_PK-76-76.png'
    },
    {
      id: 'instagram',
      url: '//www.instagram.com/daraz_np/?scm=1003.4.icms-zebra-100024112-2890917.OTHER_5439624052_2540324',
      icon: 'https://img.lazcdn.com/us/domino/f03a43e7-3655-4049-8c12-b1614ac2a2d4_PK-75-76.png'
    },
    {
      id: 'youtube',
      url: '//www.youtube.com/channel/UC2BZLVEe9yLof1ghc_YI0_A?scm=1003.4.icms-zebra-5029545-2833168.OTHER_5370750456_2485565',
      icon: 'https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png'
    },
    {
      id: 'blog',
      url: '//blog.daraz.pk/?scm=1003.4.icms-zebra-5029545-2833168.OTHER_5370750453_2485565',
      icon: 'https://img.lazcdn.com/us/domino/cea1aedb-aa69-44d5-bbaf-ca5901797dea_PK-76-76.png'
    }
  ];

  return (
    <div className="bg-white py-8 px-4 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Daraz International Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Daraz International</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {countries.map((country) => (
                <a 
                  key={country.id}
                  href={country.url}
                  className="flex flex-col items-center hover:text-orange-500"
                >
                  <img 
                    loading="lazy" 
                    src={country.flag} 
                    alt={country.id}
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm">{country.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  className="hover:opacity-80"
                >
                  <img 
                    loading="lazy" 
                    src={social.icon} 
                    alt={social.id}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="w-full md:w-1/4 flex items-end justify-end">
            <div className="text-sm text-gray-500">
              © Daraz 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInternational;