import React from 'react';
import { Section } from '../Section';

const Page04_AMZN_04_Impact = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Impact (on Crypto)
        </h2>
        <p className="text-2xl md:text-3xl font-light max-w-4xl leading-relaxed mb-12">
          AI 연산 비용 하락은
          <br />
          <span className="font-bold text-teal-300">
            '탈중앙화 AI(DeAI)'
          </span>{' '}
          및{' '}
          <span className="font-bold text-teal-300">
            'AI의 온체인 활용'
          </span>
          을 가속화시킵니다.
        </p>

        {/* SCC 스타일의 강조 블록 */}
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold italic">
            "거대 자본의 AI 전쟁이 '탈중앙화 AI'의 <div>비용 장벽을 낮추고 있다."</div>
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page04_AMZN_04_Impact;