import React, { useState } from 'react';
import { Section } from '../Section';
import { ImageModal } from '../ImageModal'; // ImageModal 임포트

const Page03_GOOG_02_What = () => {
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
          {/* 이미지 섹션 (SVG -> IMG 태그로 변경 및 Modal 적용) */}
          <div className="flex justify-center items-center">
            <img
              src="public/img/googleXPoly.png" // public 폴더의 이미지 경로
              alt="Google Polymarket Integration"
              className="rounded-lg shadow-2xl object-contain max-h-[400px] cursor-pointer"
              onClick={() => openModal('/googleXPoly.png')}
            />
          </div>

          {/* 텍스트 섹션 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The "What"
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              구글이 암호화폐 기반 예측 플랫폼{' '}
              <span className="font-bold text-purple-300">
                <div>'폴리마켓(Polymarket)'</div>
              </span>
              과 파트너십을 맺었습니다.
            </p>
            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
              구글 파이낸스 검색 시 <div>예측 확률이 검색 결과에</div>{' '}
              <span className="font-bold">'직접 통합'</span>됩니다.
            </p>
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

export default Page03_GOOG_02_What;