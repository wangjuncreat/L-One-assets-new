'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCityById } from '@/data/cities';
import { getEventsByCityId, getPersonsByCityId, getCulturesByCityId, getFoodsByCityId } from '@/data/detailedData';
import { TimelinePoint } from '@/data/timelineData';
import { getCityInfoById } from '@/data/cityInfo';
import Timeline from '@/components/Timeline';
import TimelineBanner from '@/components/TimelineBanner';
import CityInfoPanel from '@/components/CityInfoPanel';

export default function CityDetail() {
  const params = useParams();
  const router = useRouter();
  const [city, setCity] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [persons, setPersons] = useState<any[]>([]);
  const [cultures, setCultures] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [selectedTimelinePoint, setSelectedTimelinePoint] = useState<TimelinePoint | null>(null);
  const [cityInfo, setCityInfo] = useState<any>(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('城市ID不存在');
        }
        
        const cityId = parseInt(id);
        if (isNaN(cityId)) {
          throw new Error('无效的城市ID');
        }
        
        const cityData = getCityById(cityId);
        if (cityData) {
          setCity(cityData);
          setEvents(getEventsByCityId(cityId));
          setPersons(getPersonsByCityId(cityId));
          setCultures(getCulturesByCityId(cityId));
          setFoods(getFoodsByCityId(cityId));
          setCityInfo(getCityInfoById(cityId));
          setError(null);
        } else {
          throw new Error('找不到该城市的信息');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载城市信息失败');
        setCity(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCity();
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

  if (error || !city) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">城市未找到</h1>
          <p className="mb-6">{error || '抱歉，找不到该城市的信息。'}</p>
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

  const tabs = [
    { id: 'overview', label: '概览' },
    { id: 'timeline', label: '历史时间轴' },
    { id: 'info', label: '实用资讯' },
    { id: 'geo', label: '地质地貌' },
    { id: 'history', label: '历史文化' },
    { id: 'modern', label: '现代人文' },
    { id: 'travel', label: '旅行打卡' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 城市头部 */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4"
        >
          ← 返回首页
        </button>
        <h1 className="text-4xl font-bold mb-2">{city.name}</h1>
        <p className="text-gray-600 mb-4">
          建立于: {city.foundingYear < 0 ? `公元前${Math.abs(city.foundingYear)}年` : `${city.foundingYear}年`}
        </p>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            坐标: {city.latitude.toFixed(2)}, {city.longitude.toFixed(2)}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            重要性: {'★'.repeat(city.importance)}
          </span>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium transition-colors ${activeTab === tab.id ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 标签页内容 */}
      <div className="tab-content">
        {/* 概览 */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">城市概览</h2>
              <p className="mb-6">
                {city.name}是一座历史悠久的城市，拥有丰富的文化遗产和现代化的城市景观。
                它位于{city.info.geo.landform.join('、')}地区，属于{city.info.geo.climate.join('、')}气候。
              </p>
              
              <h3 className="text-xl font-semibold mb-3">历史沿革</h3>
              <div className="space-y-4">
                {events.map((event: any) => (
                  <div key={event.id} className="border-l-4 border-black pl-4 py-2">
                    <div className="font-semibold">
                      <a href={`/event/${event.id}`} className="text-blue-600 hover:underline">
                        {event.year < 0 ? `公元前${Math.abs(event.year)}年` : `${event.year}年`}: {event.title}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">快速信息</h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">地理位置</h4>
                <ul className="space-y-1 text-sm">
                  <li>纬度: {city.latitude.toFixed(4)}</li>
                  <li>经度: {city.longitude.toFixed(4)}</li>
                  <li>地形: {city.info.geo.landform.join('、')}</li>
                  <li>气候: {city.info.geo.climate.join('、')}</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">主要河流</h4>
                <ul className="space-y-1 text-sm">
                  {city.info.geo.rivers.map((river: string, index: number) => (
                    <li key={index}>{river}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">主要山脉</h4>
                <ul className="space-y-1 text-sm">
                  {city.info.geo.mountains.length > 0 ? (
                    city.info.geo.mountains.map((mountain: string, index: number) => (
                      <li key={index}>{mountain}</li>
                    ))
                  ) : (
                    <li className="text-gray-400">无</li>
                  )}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">著名景点</h4>
                <ul className="space-y-1 text-sm">
                  {city.info.geo.attractions.map((attraction: string, index: number) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 历史时间轴 */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <TimelineBanner 
              point={selectedTimelinePoint}
              onClose={() => setSelectedTimelinePoint(null)}
            />
            <Timeline 
              cityId={city.id}
              onSelectPoint={setSelectedTimelinePoint}
            />
          </div>
        )}

        {/* 实用资讯 */}
        {activeTab === 'info' && cityInfo && (
          <div className="space-y-6">
            <CityInfoPanel cityInfo={cityInfo} />
          </div>
        )}

        {/* 地质地貌 */}
        {activeTab === 'geo' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">地质地貌</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">地形特征</h3>
                <ul className="space-y-2">
                  {city.info.geo.landform.map((landform: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      {landform}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">气候特征</h3>
                <ul className="space-y-2">
                  {city.info.geo.climate.map((climate: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      {climate}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">主要河流</h3>
                <ul className="space-y-2">
                  {city.info.geo.rivers.map((river: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {river}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">主要山脉</h3>
                <ul className="space-y-2">
                  {city.info.geo.mountains.length > 0 ? (
                    city.info.geo.mountains.map((mountain: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {mountain}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">无</li>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">著名自然景观</h3>
              <ul className="space-y-2">
                {city.info.geo.attractions.map((attraction: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 历史文化 */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">历史文化</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">重要历史事件</h3>
              <div className="space-y-4">
                {events.map((event: any) => (
                  <div key={event.id} className="border-l-4 border-black pl-4 py-2">
                    <div className="font-semibold">
                      <a href={`/event/${event.id}`} className="text-blue-600 hover:underline">
                        {event.year < 0 ? `公元前${Math.abs(event.year)}年` : `${event.year}年`}: {event.title}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">文化特色</h3>
                <ul className="space-y-2">
                  {cultures.map((culture: any) => (
                    <li key={culture.id} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      <a href={`/culture/${culture.id}`} className="text-blue-600 hover:underline">
                        {culture.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">历史名人</h3>
                <ul className="space-y-2">
                  {persons.map((person: any) => (
                    <li key={person.id} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      <a href={`/person/${person.id}`} className="text-blue-600 hover:underline">
                        {person.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 现代人文 */}
        {activeTab === 'modern' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">现代人文</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">当地美食</h3>
                <ul className="space-y-2">
                  {foods.map((food: any) => (
                    <li key={food.id} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <a href={`/food/${food.id}`} className="text-blue-600 hover:underline">
                        {food.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">非物质文化遗产</h3>
                <ul className="space-y-2">
                  {city.info.modern.intangibleHeritage.map((heritage: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {heritage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">生活习惯特色</h3>
                <ul className="space-y-2">
                  {city.info.modern.lifestyle.map((lifestyle: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {lifestyle}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">消费娱乐</h3>
                <ul className="space-y-2">
                  {city.info.modern.entertainment.map((entertainment: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {entertainment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">地标建筑</h3>
              <ul className="space-y-2">
                {city.info.modern.landmarks.map((landmark: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 旅行打卡 */}
        {activeTab === 'travel' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">旅行打卡</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">推荐景点</h3>
                <ul className="space-y-2">
                  {city.info.geo.attractions.map((attraction: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">美食推荐</h3>
                <ul className="space-y-2">
                  {foods.map((food: any) => (
                    <li key={food.id} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <a href={`/food/${food.id}`} className="text-blue-600 hover:underline">
                        {food.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">打卡拍照位置</h3>
              <ul className="space-y-2">
                {city.info.modern.landmarks.map((landmark: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">旅行小贴士</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-2 mt-2"></span>
                  <span>最佳旅行时间：根据{city.info.geo.climate[0]}特点，建议选择春秋季节前往。</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-2 mt-2"></span>
                  <span>交通方式：可通过飞机、高铁等方式到达{city.name}。</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-2 mt-2"></span>
                  <span>当地特色：体验{city.info.modern.lifestyle[0]}等当地生活方式。</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}