import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

type TransformationType = 'background' | 'fantasy' | '3d-print';

interface TransformationOption {
  id: TransformationType;
  title: string;
  description: string;
  icon: JSX.Element;
}

const transformationOptions: TransformationOption[] = [
  {
    id: 'background',
    title: 'Background Magic',
    description: 'Transform your photo\'s background to any scene',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'fantasy',
    title: 'Fantasy Character',
    description: 'Transform yourself into a fantasy character',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    id: '3d-print',
    title: '3D Print Ready',
    description: 'Convert your photo into a 3D printable model',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const TransformationInterface: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedTransformation, setSelectedTransformation] = useState<TransformationType | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };

  const handleTransformationSelect = (type: TransformationType) => {
    setSelectedTransformation(type);
  };

  const handleTransform = async () => {
    if (!selectedImage || !selectedTransformation) return;

    setIsProcessing(true);
    try {
      // TODO: Implement actual transformation logic here
      // This will involve calling your AI service/API
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
      console.log('Transforming image:', selectedImage.name, 'with type:', selectedTransformation);
    } catch (error) {
      console.error('Error transforming image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Image Upload Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Upload Your Image</h2>
          <ImageUpload onImageSelect={handleImageSelect} />
        </section>

        {/* Transformation Options */}
        {selectedImage && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Choose Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {transformationOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleTransformationSelect(option.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedTransformation === option.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${
                      selectedTransformation === option.id ? 'text-primary-500' : 'text-gray-400'
                    }`}>
                      {option.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{option.title}</h3>
                      <p className="text-sm text-gray-500">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Transform Button */}
        {selectedImage && selectedTransformation && (
          <section className="text-center">
            <button
              onClick={handleTransform}
              disabled={isProcessing}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-500 hover:bg-primary-600'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Processing...</span>
                </span>
              ) : (
                'Transform Image'
              )}
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default TransformationInterface; 