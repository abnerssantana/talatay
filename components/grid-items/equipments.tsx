import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GridItemInterface } from '@/config/site-config';

interface Props {
  item: GridItemInterface;
}

const ImageComparison: React.FC<Props> = ({ item }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const images = Array.isArray(item.images) ? item.images.filter(Boolean) : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setVisible(true);
        }, 500); // Tempo da transição para ocultar a imagem
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const renderMedia = () => {
    if (item.video) {
      return (
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/98 to-neutral-950/99" />
          <video
            className="z-0 object-cover object-center w-full h-full"
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      );
    } else if (images.length > 0) {
      return (
        <div className="w-full h-[310px] relative">
          <Image
            className={`z-0 object-cover object-center w-full h-full transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            src={images[imageIndex] || ''}
            alt="image"
            layout="fill"
            onLoadingComplete={(image) => image.classList.add('opacity-100')}
          />
        </div>
      );
    } else if (item.image) {
      return (
        <div className="w-full h-[310px] relative">
          <Image
            className="z-0 object-cover object-center w-full h-full transition-opacity duration-500 ease-in-out opacity-0"
            src={item.image}
            alt="image"
            layout="fill"
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-lg layout-${item.layout}`}>
      {renderMedia()}
      <div className="relative z-20 w-full p-6 space-y-3 md:p-8 bg-white dark:bg-neutral-900 rounded-b-lg">
        <div className="text-sm font-normal text-black dark:text-white">{item.title}</div>
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment, index) => (
            <div
              className="px-2 py-1 text-sm font-normal bg-gray-200 rounded-lg dark:bg-neutral-700"
              key={index}
            >
              {equipment.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
