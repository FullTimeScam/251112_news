import React from 'react';
import { Section } from '../Section';

const Page05_Shutdown = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 텍스트 섹션 (순서 변경) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              4. 역대 최장 셧다운과 암호화폐 규제 지연
            </h2>
            <ul className="space-y-3 text-xl md:text-2xl font-light list-disc list-inside">
              <li>
                미국 연방 정부 셧다운, 36일째를 맞이하며{' '}
                <span className="font-bold text-red-400">'역대 최장'</span> 기록
                경신.
              </li>
              <li>
                11월 10일, 상원이 종료 법안을 통과시키며 사태는 일단락됨.
              </li>
              <li>
                직접적 영향:{' '}
                <span className="font-bold">
                  '암호화폐 시장 구조 법안'
                </span>{' '}
                등 핵심 입법 논의 '올스톱'.
              </li>
              <li>
                리스크: SEC, CFTC 등 규제 기관의 업무가 마비되며 산업 전체의
                불확실성 증대.
              </li>
              <li>
                교훈: 기술의 발전 속도와 무관하게,{' '}
                <span className="font-bold text-gray-400">
                  '정치적 리스크'
                </span>
                가 언제든 시장의 발목을 잡을 수 있음.
              </li>
            </ul>
          </div>

          {/* 이미지 섹션 */}
          <div>
            <img
              src="public\img\USshutdown.png"
              alt="US Capitol Shutdown"
              className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>

        {/* 태그라인 */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold italic p-4 bg-gray-900 rounded-lg shadow-lg">
            "혁신은 빠르지만, 정치는 느리다. 규제 리스크는 여전히 가장 큰 변수."
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Page05_Shutdown;