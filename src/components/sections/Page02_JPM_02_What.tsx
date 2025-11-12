import React, { useState } from 'react';
import { Section } from '../Section';
import { ImageModal } from '../ImageModal'; // ImageModal 임포트

const Page02_JPM_02_What = () => {
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
              JP모건이 기관 고객용 'JPM 토큰'을<div>공식 출시했습니다.</div>
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              핵심은 프라이빗 체인이 아닌{' '}
              <span className="font-bold text-blue-300">
                <div>코인베이스의 'Base' (이더리움 L2)</div>
              </span>{' '}
              위에서 운영된다는 점입니다.
            </p>
          </div>

          {/* 이미지 섹션 (SVG -> IMG 태그로 변경 및 Modal 적용) */}
          <div className="flex justify-center items-center">
            <img
              src="/img/JPM_token.png" // public 폴더의 이미지 경로
              alt="JPM Coin Token"
              className="rounded-lg shadow-2xl object-contain max-h-[400px] cursor-pointer"
              onClick={() => openModal('/JPM_token.png')}
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

export default Page02_JPM_02_What;