import Image from 'next/image';
import React from 'react';

import coffee from '@/public/images/coffee.png';

const ImageRendering = () => {
  return (
    <div className="relative h-80">
      <div>{'Here are some images'}</div>

      {/* static image */}
      <div className="h-20">
        <Image src={coffee} alt="coffee" />
      </div>

      {/* remote image*/}
      <div className="h-20">
        <Image
          src="https://bit.ly/react-cover"
          alt="coffee"
          fill
          className="object-contain"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority
        />
      </div>
    </div>
  );
};

export default ImageRendering;
