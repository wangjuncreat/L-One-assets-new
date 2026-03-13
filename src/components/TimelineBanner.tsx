'use client';

import React from 'react';
import { TimelinePoint } from '@/data/timelineData';

interface TimelineBannerProps {
  point: TimelinePoint | null;
  onClose?: () => void;
}

export default function TimelineBanner({ point, onClose }: TimelineBannerProps) {
  if (!point) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-2xl">
        <div className="flex items-center justify-center h-48">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">历史时间轴</div>
            <p className="text-gray-400">点击时间轴上的事件查看详细信息</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        >
          <span className="text-xl">✕</span>
        </button>
      )}

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              {point.image ? (
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-2">📜</div>
                  <div className="text-gray-400 text-sm">暂无图片</div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
                {point.year < 0 ? `公元前${Math.abs(point.year)}年` : `${point.year}年`}
                {point.month && ` ${point.month}月`}
              </span>
            </div>

            <h2 className="text-3xl font-bold mb-4">{point.title}</h2>
            
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              {point.description}
            </p>

            {point.significance && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">历史意义</h3>
                <p className="text-gray-200">{point.significance}</p>
              </div>
            )}

            {point.relatedPersons && point.relatedPersons.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">相关人物</h3>
                <div className="flex flex-wrap gap-2">
                  {point.relatedPersons.map((person, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {point.relatedEvents && point.relatedEvents.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">相关事件</h3>
                <div className="flex flex-wrap gap-2">
                  {point.relatedEvents.map((event, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
