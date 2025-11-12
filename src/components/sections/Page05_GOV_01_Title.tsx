import React from 'react';
import { Section } from '../Section';

const Page05_GOV_01_Title = () => {
  return (
    <Section
      style={{
        backgroundImage: `url('http://googleusercontent.com/image_collection/image_retrieval/1276360086431190488_0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center text-center h-full bg-black bg-opacity-70 p-10">
        <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
          News #4
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg">
          역대 최장 셧다운과
          <br />
          암호화폐 규제 지연
        </h1>
      </div>
    </Section>
  );
};

export default Page05_GOV_01_Title;