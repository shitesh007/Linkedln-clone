import React from 'react';
import { X } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full mx-4">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="bg-white rounded-full overflow-hidden aspect-square border-4 border-white shadow-2xl max-w-[300px] sm:max-w-[400px] mx-auto">
           <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="text-center mt-8 text-white">
           <h3 className="text-xl font-semibold">{altText}</h3>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};