import React from 'react';
import { Section } from '../Section';

const Page03_GOOG_04_Impact = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Impact
        </h2>
        <p className="text-2xl md:text-3xl font-light max-w-4xl leading-relaxed mb-12">
          웹 2.0의 거인이 웹 3.0의 데이터를 공신력 있는 정보로 인정
          <br /><div>.</div>
          이는 향후 다양한 '온체인 데이터'가 주류로 편입되는 신호탄입니다.
        </p>

        {/* SCC 스타일의 강조 블록 */}
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold italic">
            "웹 3.0의 데이터가 웹 2.0의 '검증된 정보'가 되다."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page03_GOOG_04_Impact;