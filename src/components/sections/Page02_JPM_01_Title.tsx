import React from 'react';
import { Section } from '../Section';

const Page02_JPM_01_Title = () => {
  return (
    <Section
      style={{
        backgroundImage: `url('http://googleusercontent.com/image_collection/image_retrieval/18160925323262392397_0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center text-center h-full bg-black bg-opacity-70 p-10">
        <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
          News #1
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg">
          JP모건, 퍼블릭 L2에서
          <br />
          'JPM 코인'을 출시하다
        </h1>
      </div>
    </Section>
  );
};

export default Page02_JPM_01_Title;