'use client';

import React, { useState } from 'react';
import { CityInfo, NewsItem, TravelGuide, CityImage } from '@/data/cityInfo';

interface CityInfoPanelProps {
  cityInfo: CityInfo;
}

type TabType = 'news' | 'guides' | 'practical' | 'gallery';

export default function CityInfoPanel({ cityInfo }: CityInfoPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('practical');
  const [selectedImage, setSelectedImage] = useState<CityImage | null>(null);

  const tabs = [
    { id: 'news', label: '最新资讯', count: cityInfo.news.length },
    { id: 'guides', label: '游玩攻略', count: cityInfo.travelGuides.length },
    { id: 'practical', label: '实用信息', count: 0 },
    { id: 'gallery', label: '图库', count: cityInfo.images.length },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 标签页导航 */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'border-b-2 border-black text-black' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* 最新资讯 */}
        {activeTab === 'news' && (
          <div className="space-y-4">
            {cityInfo.news.map((item: NewsItem) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.summary}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-3">{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="ml-4 text-blue-500">→</div>
                </div>
              </a>
            ))}
            {cityInfo.news.length === 0 && (
              <p className="text-gray-500 text-center py-8">暂无最新资讯</p>
            )}
          </div>
        )}

        {/* 游玩攻略 */}
        {activeTab === 'guides' && (
          <div className="space-y-4">
            {cityInfo.travelGuides.map((guide: TravelGuide) => (
              <div
                key={guide.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg">{guide.title}</h4>
                  {guide.author && (
                    <span className="text-xs text-gray-500">{guide.author}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3 whitespace-pre-line">{guide.content}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {cityInfo.travelGuides.length === 0 && (
              <p className="text-gray-500 text-center py-8">暂无游玩攻略</p>
            )}
          </div>
        )}

        {/* 实用信息 */}
        {activeTab === 'practical' && (
          <div className="space-y-6">
            {/* 最佳旅行季节 */}
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">🌸</span>
                最佳旅行季节
              </h4>
              <p className="text-gray-700">{cityInfo.practicalInfo.bestSeason}</p>
            </div>

            {/* 交通提示 */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">🚇</span>
                交通提示
              </h4>
              <p className="text-gray-700">{cityInfo.practicalInfo.transportTips}</p>
            </div>

            {/* 美食推荐 */}
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">🍜</span>
                美食推荐
              </h4>
              <div className="flex flex-wrap gap-2">
                {cityInfo.practicalInfo.foodRecommendations.map((food: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-red-200 text-red-700 rounded-full text-sm"
                  >
                    {food}
                  </span>
                ))}
              </div>
            </div>

            {/* 小众秘境 */}
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">🏕️</span>
                小众秘境
              </h4>
              <div className="flex flex-wrap gap-2">
                {cityInfo.practicalInfo.hiddenGems.map((place: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-purple-200 text-purple-700 rounded-full text-sm"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 图库 */}
        {activeTab === 'gallery' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cityInfo.images.map((image: CityImage) => (
                <div
                  key={image.id}
                  className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {cityInfo.images.length === 0 && (
              <p className="text-gray-500 text-center py-8">暂无图片</p>
            )}

            {/* 图片预览弹窗 */}
            {selectedImage && (
              <div 
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 text-white">
                    <h4 className="text-xl font-semibold">{selectedImage.title}</h4>
                    {selectedImage.description && (
                      <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
