import React from 'react';
import { Section } from '../Section';

const Page01_Cover = () => {
  return (
    <Section
      style={{
        backgroundImage: `url('http://googleusercontent.com/image_collection/image_retrieval/18160925323262392397_0')`, // JPM 이미지 재활용
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center text-center h-full bg-black bg-opacity-70 p-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-shadow-lg">
          2025년 11월 2주차
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-shadow-lg">
          주요 뉴스 정리
        </h2>
        <p className="text-2xl mt-8 animate-pulse text-gray-400">
          Scroll to explore
        </p>
      </div>
    </Section>
  );
};

export default Page01_Cover;