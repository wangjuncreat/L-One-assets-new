'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getEventById } from '@/data/detailedData';

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('事件ID不存在');
        }
        
        const eventId = parseInt(id);
        if (isNaN(eventId)) {
          throw new Error('无效的事件ID');
        }
        
        const eventData = getEventById(eventId);
        if (eventData) {
          setEvent(eventData);
          setError(null);
        } else {
          throw new Error('找不到该事件的信息');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载事件信息失败');
        setEvent(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
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

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">事件未找到</h1>
          <p className="mb-6">{error || '抱歉，找不到该事件的信息。'}</p>
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
      {/* 事件头部 */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4"
        >
          ← 返回上一页
        </button>
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-gray-600 mb-4">
          {event.year < 0 ? `公元前${Math.abs(event.year)}年` : `${event.year}年`}
        </p>
        <p className="text-lg mb-6">{event.description}</p>
      </div>

      {/* 事件详情 */}
      <div className="space-y-8">
        {/* 事件意义 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">事件意义</h2>
          <p>{event.significance}</p>
        </div>

        {/* 事件地点 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">事件地点</h2>
          <p>{event.location}</p>
        </div>

        {/* 事件影响 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">历史影响</h2>
          <p>{event.impact}</p>
        </div>

        {/* 相关人物 */}
        {event.keyFigures && event.keyFigures.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">相关人物</h2>
            <ul className="space-y-2">
              {event.keyFigures.map((figureId: number, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                  <a href={`/person/${figureId}`} className="text-blue-600 hover:underline">
                    人物 {figureId}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}