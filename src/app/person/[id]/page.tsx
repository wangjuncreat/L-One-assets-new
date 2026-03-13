'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPersonById } from '@/data/detailedData';

export default function PersonDetail() {
  const params = useParams();
  const router = useRouter();
  const [person, setPerson] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('人物ID不存在');
        }
        
        const personId = parseInt(id);
        if (isNaN(personId)) {
          throw new Error('无效的人物ID');
        }
        
        const personData = getPersonById(personId);
        if (personData) {
          setPerson(personData);
          setError(null);
        } else {
          throw new Error('找不到该人物的信息');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载人物信息失败');
        setPerson(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerson();
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

  if (error || !person) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">人物未找到</h1>
          <p className="mb-6">{error || '抱歉，找不到该人物的信息。'}</p>
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
      {/* 人物头部 */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4"
        >
          ← 返回上一页
        </button>
        <h1 className="text-4xl font-bold mb-2">{person.name}</h1>
        <p className="text-gray-600 mb-4">
          {person.birthYear && person.deathYear ? 
            `${person.birthYear}年 - ${person.deathYear}年` : 
            person.birthYear ? `${person.birthYear}年 - ?` : 
            person.deathYear ? `? - ${person.deathYear}年` : 
            '年代不详'
          }
        </p>
        <p className="text-lg mb-6">{person.description}</p>
      </div>

      {/* 人物详情 */}
      <div className="space-y-8">
        {/* 生平简介 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">生平简介</h2>
          <p>{person.biography}</p>
        </div>

        {/* 主要成就 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">主要成就</h2>
          <ul className="space-y-2">
            {person.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* 代表作品 */}
        {person.works && person.works.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">代表作品</h2>
            <ul className="space-y-2">
              {person.works.map((work: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                  {work}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 经典语录 */}
        {person.quotes && person.quotes.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">经典语录</h2>
            <div className="space-y-4">
              {person.quotes.map((quote: string, index: number) => (
                <div key={index} className="border-l-4 border-black pl-4 py-2">
                  <p className="italic">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}