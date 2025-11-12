import React from 'react';
import { NavLink } from './NavLink';

interface Section {
  id: string;
  title: string;
}

interface NavigationProps {
  sections: Section[];
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ sections, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 flex items-center z-50 pointer-events-none">
      <div className="flex flex-col space-y-2 p-4 pointer-events-auto">
        {sections.map((section) => (
          <NavLink
            key={section.id}
            // 수정: href가 #jpmorgan-1, #google-1처럼
            // 각 섹션의 첫 페이지 ID를 가리키도록 수정합니다.
            href={`#${section.id}-1`}
            isActive={activeSection === section.id}
          >
            {section.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};