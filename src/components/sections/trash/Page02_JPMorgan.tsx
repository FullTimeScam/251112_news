import React from 'react';
import { Section } from '../Section';

const Page02_JPMorgan = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 이미지 섹션 */}
          <div>
            <img
              src="public\img\JPM_token.png"
              alt="JPM Coin on Base"
              className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[500px]"
            />
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              1. JP모건, 퍼블릭 L2에서 'JPM 코인'을 출시하다
            </h2>
            <ul className="space-y-3 text-xl md:text-2xl font-light list-disc list-inside">
              <li>
                JP모건, 기관 고객용 'JPM 코인' 공식 출시.
              </li>
              <li>
                핵심: 프라이빗 체인이 아닌{' '}
                <span className="font-bold text-blue-300">
                  코인베이스의 'Base' (이더리움 L2)
                </span>
                에서 운영.
              </li>
              <li>
                의미: 세계 최대 투자 은행이 퍼블릭 L2의 보안성/효율성 공식 인정.
              </li>
              <li>
                '예금 토큰' 방식: 은행 예금을 직접 토큰화.{' '}
                <span className="font-bold text-green-300">규제 친화적.</span>
              </li>
              <li>
                기능: 365일 24시간 실시간 결제, RWA 원자적 결제(Atomic
                Settlement) 인프라.
              </li>
            </ul>
          </div>
        </div>

        {/* 태그라인 */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold italic p-4 bg-gray-900 rounded-lg shadow-lg">
            "전통 금융(TradFi)이 '퍼블릭' 블록체인의 광장으로 들어섰다."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page02_JPMorgan;