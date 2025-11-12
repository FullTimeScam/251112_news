import React from 'react';
import { Section } from '../Section';

const Page02_JPM_03_Why = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 이미지 섹션 */}
          <div className="hidden md:flex justify-center items-center">
            <svg
              className="w-64 h-64 text-green-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The "Why"
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              세계 최대 투자 은행이{' '}
              <span className="font-bold">
                <div>퍼블릭 L2의 보안성과 효율성을</div>
              </span>
              공식 인정한 것입니다. <div>(vs. 고립된 프라이빗 체인)</div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              또한 '예금 토큰' 방식은{' '}
              <span className="font-bold text-green-300">
                <div>가장 규제 친화적인</div>
              </span>{' '}
              접근입니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Page02_JPM_03_Why;