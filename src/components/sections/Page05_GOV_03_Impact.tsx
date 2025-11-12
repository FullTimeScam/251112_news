import React from 'react';
import { Section } from '../Section';

const Page05_GOV_03_Impact = () => {
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
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Impact
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              가장 직접적인 영향은{' '}
              <div><span className="font-bold">'규제 지연'</span>입니다.</div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              <span className="font-bold text-gray-400">
                '암호화폐 시장 구조 법안'
              </span>{' '}
              <div>등 핵심 입법 논의가 '올스톱'되며</div><div>산업 전체의 불확실성이
              <div>증대되었습니다.</div></div>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Page05_GOV_03_Impact;