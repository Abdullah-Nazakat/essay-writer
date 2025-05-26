import React from 'react';
import Deploy from '../../../public/deploying.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Image
          src={Deploy}
          width={100}
          height={100}
          alt="Deploying"
        />
      </div>
    </div>
  );
};

export default Page;
