'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCultureById } from '@/data/detailedData';

export default function CultureDetail() {
  const params = useParams();
  const router = useRouter();
  const [culture, setCulture] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('文化ID不存在');
        }
        
        const cultureId = parseInt(id);
        if (isNaN(cultureId)) {
          throw new Error('无效的文化ID');
        }
        
        const cultureData = getCultureById(cultureId);
        if (cultureData) {
          setCulture(cultureData);
          setError(null);
        } else {
          throw new Error('找不到该文化的信息');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载文化信息失败');
        setCulture(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCulture();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black mb-4"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (error || !culture) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">文化未找到</h1>
          <p className="mb-6">{error || '抱歉，找不到该文化的信息。'}</p>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 文化头部 */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4"
        >
          ← 返回上一页
        </button>
        <h1 className="text-4xl font-bold mb-2">{culture.name}</h1>
        <p className="text-lg mb-6">{culture.description}</p>
      </div>

      {/* 文化详情 */}
      <div className="space-y-8">
        {/* 历史渊源 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">历史渊源</h2>
          <p>{culture.history}</p>
        </div>

        {/* 主要特征 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">主要特征</h2>
          <ul className="space-y-2">
            {culture.characteristics.map((characteristic: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {characteristic}
              </li>
            ))}
          </ul>
        </div>

        {/* 代表作品/例子 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">代表作品/例子</h2>
          <ul className="space-y-2">
            {culture.examples.map((example: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {example}
              </li>
            ))}
          </ul>
        </div>

        {/* 文化意义 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">文化意义</h2>
          <p>{culture.significance}</p>
        </div>
      </div>
    </div>
  );
}