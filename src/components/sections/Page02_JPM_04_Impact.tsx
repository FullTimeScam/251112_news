import React from 'react';
import { Section } from '../Section';

const Page02_JPM_04_Impact = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Impact
        </h2>
        <p className="text-2xl md:text-3xl font-light max-w-4xl leading-relaxed mb-12">
          365일 24시간 실시간 결제가 가능해지며
          <br />
          RWA(실물자산)의 '원자적 결제'를 위한 핵심 인프라가 됩니다.
        </p>

        {/* SCC 스타일의 강조 블록 */}
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold italic">
            "전통 금융(TradFi)이 '퍼블릭' 블록체인으로."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page02_JPM_04_Impact;