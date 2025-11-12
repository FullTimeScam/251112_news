import React from 'react';
import { Section } from '../Section';

const Page04_Amazon = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 이미지 섹션 */}
          <div>
            <img
              src="public\img\OpenAI+Amazon.png"
              alt="Amazon OpenAI Partnership"
              className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[500px]"
            />
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              3. 아마존 & OpenAI: 380억 달러의 AI 전쟁
            </h2>
            <ul className="space-y-3 text-xl md:text-2xl font-light list-disc list-inside">
              <li>
                아마존, OpenAI와{' '}
                <span className="font-bold text-yellow-300">
                  380억 달러(약 40조 원)
                </span>{' '}
                규모의 초대형 파트너십 발표.
              </li>
              <li>
                전략: MS가 독점하던 AI 패권을 되찾기 위한 아마존(AWS)의 승부수.
              </li>
              <li>
                의미: AI 경쟁은 이제 거대 자본(클라우드)의 전쟁이 됨.
              </li>
              <li>
                영향: AI 모델 개발 가속화 및{' '}
                <span className="font-bold">연산 비용(Inference Cost) 하락.</span>
              </li>
              <li>
                크립토 연관성: AI 연산 비용 하락은{' '}
                <span className="font-bold text-teal-300">
                  '탈중앙화 AI(DeAI)'
                </span>{' '}
                및 <span className="font-bold">'AI의 온체인 활용'</span>을 가속화.
              </li>
            </ul>
          </div>
        </div>

        {/* 태그라인 */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold italic p-4 bg-gray-900 rounded-lg shadow-lg">
            "거대 자본의 AI 전쟁이 '탈중앙화 AI'의 비용 장벽을 낮추고 있다."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page04_Amazon;