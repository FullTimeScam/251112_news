import React from 'react';
import { Section } from '../Section';

const Page06_Conclusion = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          최종 결론: 경계가 허물어지다
        </h2>
        <h3 className="text-3xl md:text-4xl font-light mb-12 text-gray-300">
          The Lines are Blurring
        </h3>

        <div className="max-w-4xl w-full space-y-6 text-left">
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">
              <span className="text-blue-300">TradFi → Web3</span>:
              <span className="font-light ml-2">
                JP모건이 퍼블릭 L2를 채택하며 '기관용 디파이' 인프라 구축.
              </span>
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">
              <span className="text-purple-300">Web3 → Web2</span>:
              <span className="font-light ml-2">
                구글이 온체인 데이터를 '주류 정보'로 편입.
              </span>
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">
              <span className="text-teal-300">AI ↔ Web3</span>:
              <span className="font-light ml-2">
                거대 자본의 AI 전쟁이 '탈중앙화 AI'의 기술적 기반을 가속화.
              </span>
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">
              <span className="text-red-400">Wildcard</span>:
              <span className="font-light ml-2">
                이 모든 혁신은 '정치적 리스크'라는 변수 위에서 아슬아슬하게 진행
                중.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold p-4 text-white">
            시장은 더 이상 TradFi, Big Tech, Crypto로 나뉘지 않습니다.
          </h3>
          <h3 className="text-4xl font-bold p-4 text-yellow-300 animate-pulse">
            이 모든 것이 융합되고 있습니다.
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page06_Conclusion;