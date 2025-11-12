import React from 'react';
import { Section } from '../Section';

const Page03_Google = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 텍스트 섹션 (순서 변경) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              2. 구글, '예측 시장' 데이터를 검색 결과에 통합하다
            </h2>
            <ul className="space-y-3 text-xl md:text-2xl font-light list-disc list-inside">
              <li>
                구글, 암호화폐 기반 예측 플랫폼{' '}
                <span className="font-bold text-purple-300">
                  '폴리마켓(Polymarket)'
                </span>
                과 파트너십 체결.
              </li>
              <li>
                방식: 구글 파이낸스 검색 시, 폴리마켓의 예측 확률이 검색 결과에{' '}
                <span className="font-bold">'직접 통합'</span>.
              </li>
              <li>
                의미: 웹 2.0의 거인이 웹 3.0의 '데이터'를 공신력 있는 정보 소스로
                인정.
              </li>
              <li>
                이유: 돈이 오가는 예측 시장의 '집단 지성'이 기존 여론조사보다
                정확함이 증명됨.
              </li>
              <li>
                확장성: 향후 DeFi 이자율, NFT 가격 등 다양한{' '}
                <span className="font-bold text-green-300">
                  '온체인 데이터'의 주류 편입 신호탄.
                </span>
              </li>
            </ul>
          </div>

          {/* 이미지 섹션 */}
          <div>
            <img
              src="public\img\googleXPoly.png"
              alt="Google Polymarket Integration"
              className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>

        {/* 태그라인 */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold italic p-4 bg-gray-900 rounded-lg shadow-lg">
            "웹 3.0의 데이터가 웹 2.0의 '검증된 정보'가 되다."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page03_Google;