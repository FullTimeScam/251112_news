import React, { useState, useRef, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import './App.css';

// 18개의 세분화된 페이지 컴포넌트 임포트
import Page01_Cover from './components/sections/Page01_Cover';
import Page02_JPM_01_Title from './components/sections/Page02_JPM_01_Title';
import Page02_JPM_02_What from './components/sections/Page02_JPM_02_What';
import Page02_JPM_03_Why from './components/sections/Page02_JPM_03_Why';
import Page02_JPM_04_Impact from './components/sections/Page02_JPM_04_Impact';
import Page03_GOOG_01_Title from './components/sections/Page03_GOOG_01_Title';
import Page03_GOOG_02_What from './components/sections/Page03_GOOG_02_What';
import Page03_GOOG_03_Why from './components/sections/Page03_GOOG_03_Why';
import Page03_GOOG_04_Impact from './components/sections/Page03_GOOG_04_Impact';
import Page04_AMZN_01_Title from './components/sections/Page04_AMZN_01_Title';
import Page04_AMZN_02_What from './components/sections/Page04_AMZN_02_What';
import Page04_AMZN_03_Why from './components/sections/Page04_AMZN_03_Why';
import Page04_AMZN_04_Impact from './components/sections/Page04_AMZN_04_Impact';
import Page05_GOV_01_Title from './components/sections/Page05_GOV_01_Title';
import Page05_GOV_02_What from './components/sections/Page05_GOV_02_What';
import Page05_GOV_03_Impact from './components/sections/Page05_GOV_03_Impact';
import Page05_GOV_04_Lesson from './components/sections/Page05_GOV_04_Lesson';
import Page06_Conclusion from './components/sections/Page06_Conclusion';

// 네비게이션은 6개의 메인 주제만 표시합니다.
const navSections = [
  { id: 'cover', title: '표지' },
  { id: 'jpmorgan', title: 'JP모건' },
  { id: 'google', title: '구글' },
  { id: 'amazon', title: '아마존' },
  { id: 'shutdown', title: '셧다운' },
  { id: 'conclusion', title: '결론' },
];

function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 섹션이 50% 보일 때 활성화
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // DOM의 id (예: "jpmorgan-1")에서 메인 주제(예: "jpmorgan")를 추출합니다.
          const rootId = entry.target.id.split('-')[0];
          setActiveSection(rootId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((sectionEl) => {
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ref를 동적으로 할당하기 위한 헬퍼 함수
  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="bg-black text-white">
      <Navigation sections={navSections} activeSection={activeSection} />
      <main>
        {/* 각 페이지는 '주제-페이지번호' 형식의 id를 가집니다. */}
        <div id="cover-1" ref={setRef('cover-1')}>
          <Page01_Cover />
        </div>

        {/* JP모건 섹션 (4페이지) */}
        <div id="jpmorgan-1" ref={setRef('jpmorgan-1')}>
          <Page02_JPM_01_Title />
        </div>
        <div id="jpmorgan-2" ref={setRef('jpmorgan-2')}>
          <Page02_JPM_02_What />
        </div>
        <div id="jpmorgan-3" ref={setRef('jpmorgan-3')}>
          <Page02_JPM_03_Why />
        </div>
        <div id="jpmorgan-4" ref={setRef('jpmorgan-4')}>
          <Page02_JPM_04_Impact />
        </div>

        {/* 구글 섹션 (4페이지) */}
        <div id="google-1" ref={setRef('google-1')}>
          <Page03_GOOG_01_Title />
        </div>
        <div id="google-2" ref={setRef('google-2')}>
          <Page03_GOOG_02_What />
        </div>
        <div id="google-3" ref={setRef('google-3')}>
          <Page03_GOOG_03_Why />
        </div>
        <div id="google-4" ref={setRef('google-4')}>
          <Page03_GOOG_04_Impact />
        </div>

        {/* 아마존 섹션 (4페이지) */}
        <div id="amazon-1" ref={setRef('amazon-1')}>
          <Page04_AMZN_01_Title />
        </div>
        <div id="amazon-2" ref={setRef('amazon-2')}>
          <Page04_AMZN_02_What />
        </div>
        <div id="amazon-3" ref={setRef('amazon-3')}>
          <Page04_AMZN_03_Why />
        </div>
        <div id="amazon-4" ref={setRef('amazon-4')}>
          <Page04_AMZN_04_Impact />
        </div>

        {/* 셧다운 섹션 (4페이지) */}
        <div id="shutdown-1" ref={setRef('shutdown-1')}>
          <Page05_GOV_01_Title />
        </div>
        <div id="shutdown-2" ref={setRef('shutdown-2')}>
          <Page05_GOV_02_What />
        </div>
        <div id="shutdown-3" ref={setRef('shutdown-3')}>
          <Page05_GOV_03_Impact />
        </div>
        <div id="shutdown-4" ref={setRef('shutdown-4')}>
          <Page05_GOV_04_Lesson />
        </div>

        {/* 결론 섹션 (1페이지) */}
        <div id="conclusion-1" ref={setRef('conclusion-1')}>
          <Page06_Conclusion />
        </div>
      </main>
    </div>
  );
}

export default App;