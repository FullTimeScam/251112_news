import React, { useState } from 'react';
import { Section } from '../Section';
import { ImageModal } from '../ImageModal'; // ImageModal 임포트

const Page04_AMZN_02_What = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <Section>
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The "What"
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              아마존이 OpenAI와{' '}
              <span className="font-bold text-yellow-300">
                <div>380억 달러 (약 40조 원)</div>
              </span>{' '}
              규모의 초대형 파트너십을<div>발표했습니다.</div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              MS가 주도하던 AI 패권 경쟁에{' '}
              <div><span className="font-bold">아마존(AWS)</span>이 공식 참전한
              것입니다.</div>
            </p>
          </div>

          {/* 이미지 섹션 (SVG -> IMG 태그로 변경 및 Modal 적용) */}
          <div className="flex justify-center items-center">
            <img
              src="/img/OpenAI+Amazon.png" // public 폴더의 이미지 경로
              alt="OpenAI Amazon Partnership"
              className="rounded-lg shadow-2xl object-contain max-h-[400px] cursor-pointer"
              onClick={() => openModal('/OpenAI+Amazon.png')}
            />
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImage}
      />
    </Section>
  );
};

export default Page04_AMZN_02_What;