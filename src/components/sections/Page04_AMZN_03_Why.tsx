import React from 'react';
import { Section } from '../Section';

const Page04_AMZN_03_Why = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 이미지 섹션 */}
          <div className="hidden md:flex justify-center items-center">
            <svg
              className="w-64 h-64 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Impact (on AI)
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              AI 경쟁은 이제 아무나 낄 수 없는{' '}
              <div><span className="font-bold">거대 자본(클라우드)의 전쟁</span>이
              <div>되었습니다.</div></div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              결과: AI 모델 개발은 가속화되고,{' '}
              <span className="font-bold text-green-300">
                <div>'연산 비용'은 하락</div>
              </span>
              할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Page04_AMZN_03_Why;