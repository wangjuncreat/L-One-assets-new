'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getFoodById } from '@/data/detailedData';

export default function FoodDetail() {
  const params = useParams();
  const router = useRouter();
  const [food, setFood] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('美食ID不存在');
        }
        
        const foodId = parseInt(id);
        if (isNaN(foodId)) {
          throw new Error('无效的美食ID');
        }
        
        const foodData = getFoodById(foodId);
        if (foodData) {
          setFood(foodData);
          setError(null);
        } else {
          throw new Error('找不到该美食的信息');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载美食信息失败');
        setFood(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFood();
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

  if (error || !food) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">美食未找到</h1>
          <p className="mb-6">{error || '抱歉，找不到该美食的信息。'}</p>
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
      {/* 美食头部 */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4"
        >
          ← 返回上一页
        </button>
        <h1 className="text-4xl font-bold mb-2">{food.name}</h1>
        <p className="text-lg mb-6">{food.description}</p>
      </div>

      {/* 美食详情 */}
      <div className="space-y-8">
        {/* 历史渊源 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">历史渊源</h2>
          <p>{food.history}</p>
        </div>

        {/* 主要食材 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">主要食材</h2>
          <ul className="space-y-2">
            {food.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* 制作方法 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">制作方法</h2>
          <p>{food.preparation}</p>
        </div>

        {/* 文化意义 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">文化意义</h2>
          <p>{food.culturalSignificance}</p>
        </div>

        {/* 推荐品尝地点 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">推荐品尝地点</h2>
          <ul className="space-y-2">
            {food.recommendedPlaces.map((place: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}