import React from 'react';
import { Section } from '../Section';

const Page05_GOV_04_Lesson = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Lesson
        </h2>
        <p className="text-2xl md:text-3xl font-light max-w-4xl leading-relaxed mb-12">
          기술의 발전 속도와 무관하게
          <br />
          <span className="font-bold text-red-400">'정치적 리스크'</span>가
          언제든 혁신의 "발목을 잡을 수 있음"<div>을 보여주었습니다.</div>
        </p>

        {/* SCC 스타일의 강조 블록 */}
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold italic">
            "혁신은 빠르지만, 정치는 느리다.<div>규제 리스크는 여전히 가장 큰 변수."</div>
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page05_GOV_04_Lesson;