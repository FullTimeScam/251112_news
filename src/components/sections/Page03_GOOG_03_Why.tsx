import React from 'react';
import { Section } from '../Section';

const Page03_GOOG_03_Why = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The "Why"
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              이유는 <span className="font-bold text-yellow-300">'정확성'</span>
              입니다. <div>돈이 오가는 예측 시장의 '집단 지성'이</div> <div> 기존 여론조사보다 <div>더
              정확하다고 판단하고 있습니다.</div></div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              '코인판 도박'이 아닌,{' '}
              <span className="font-bold text-green-300">
                <div>'검증된 금융 데이터'</div>
              </span>
              로 격상된 것입니다.
            </p>
          </div>

          {/* 이미지 섹션 */}
          <div className="hidden md:flex justify-center items-center">
            <svg
              className="w-64 h-64 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Page03_GOOG_03_Why;