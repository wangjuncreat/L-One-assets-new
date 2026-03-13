'use client';

import { useState, useEffect, useRef } from 'react';
import { assets, categories, getAssetsByCategory, Asset } from '@/data/assets';

export default function AssetsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(assets);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(2);
      } else if (width < 1024) {
        setColumns(3);
      } else if (width < 1440) {
        setColumns(4);
      } else {
        setColumns(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let result = assets;

    if (selectedCategory !== 'all') {
      result = result.filter(asset => asset.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(asset =>
        asset.name.toLowerCase().includes(query) ||
        asset.movie.toLowerCase().includes(query) ||
        asset.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredAssets(result);
  }, [selectedCategory, searchQuery]);

  const handleAssetClick = (asset: Asset) => {
    setSelectedAsset(asset);
    setIsPlaying(false);
  };

  const handleClosePreview = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedAsset(null);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClosePreview();
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <header 
        className="sticky top-0 z-50 px-6 py-5"
        style={{ 
          backgroundColor: 'rgba(250, 250, 250, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.04)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 
            className="text-2xl font-light mb-1 tracking-wide"
            style={{ color: '#1a1a1a', fontWeight: 300 }}
          >
            L-One的素材库
          </h1>
          <p 
            className="text-sm mb-5"
            style={{ color: '#888', fontWeight: 300 }}
          >
            电影画面分镜素材库 · {filteredAssets.length} 个素材
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div 
              className="flex gap-2 overflow-x-auto pb-2 md:pb-0"
              style={{ maxWidth: '70%' }}
            >
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor: selectedCategory === 'all' ? '#1a1a1a' : 'transparent',
                  color: selectedCategory === 'all' ? '#fff' : '#666',
                  border: selectedCategory === 'all' ? 'none' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: selectedCategory === 'all' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                全部
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#1a1a1a' : 'transparent',
                    color: selectedCategory === category.id ? '#fff' : '#666',
                    border: selectedCategory === category.id ? 'none' : '1px solid rgba(0,0,0,0.08)',
                    boxShadow: selectedCategory === category.id ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div 
              className="relative w-full md:w-72"
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              <input
                type="text"
                placeholder="搜索素材..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 bg-transparent outline-none text-sm"
                style={{ color: '#1a1a1a' }}
              />
              <svg 
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" 
                style={{ color: '#999' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredAssets.length === 0 ? (
          <div 
            className="flex flex-col items-center justify-center py-24"
            style={{ color: '#999' }}
          >
            <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <p className="text-lg font-light">没有找到相关素材</p>
          </div>
        ) : (
          <div 
            className="grid gap-4"
            style={{ 
              gridTemplateColumns: `repeat(${columns}, 1fr)` 
            }}
          >
            {filteredAssets.map((asset, index) => (
              <div
                key={asset.id}
                onClick={() => handleAssetClick(asset)}
                className="group cursor-pointer"
                style={{
                  animationDelay: `${index * 30}ms`
                }}
              >
                <div 
                  className="aspect-square rounded-lg overflow-hidden relative transition-all duration-300"
                  style={{
                    backgroundColor: '#f5f5f5',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  {asset.type === 'video' || asset.type === 'gif' ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          el.muted = true;
                        }
                      }}
                      src={asset.path}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.play();
                        setTimeout(() => {
                          if (video && !video.paused) {
                            video.pause();
                            video.currentTime = 0;
                          }
                        }, 5000);
                      }}
                      onMouseLeave={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={asset.path}
                      alt={asset.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}
                    >
                      {asset.type === 'video' || asset.type === 'gif' ? (
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1a1a1a' }}>
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1a1a1a' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {asset.duration && (
                    <div 
                      className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#fff'
                      }}
                    >
                      {asset.duration}s
                    </div>
                  )}
                </div>

                <div className="mt-3 px-1">
                  <h3 
                    className="text-sm font-medium truncate"
                    style={{ color: '#1a1a1a' }}
                  >
                    {asset.name}
                  </h3>
                  <p 
                    className="text-xs truncate mt-0.5"
                    style={{ color: '#999' }}
                  >
                    {asset.movie}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={handleOverlayClick}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full rounded-2xl overflow-hidden"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePreview}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1a1a1a' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div 
              className="flex flex-col lg:flex-row"
              style={{ maxHeight: '85vh' }}
            >
              <div 
                className="flex-1 flex items-center justify-center bg-gray-50 relative"
                style={{ minHeight: '300px' }}
                onMouseEnter={() => setIsHoveringPreview(true)}
                onMouseLeave={() => setIsHoveringPreview(false)}
              >
                {selectedAsset.type === 'video' || selectedAsset.type === 'gif' ? (
                  <>
                    <video
                      ref={videoRef}
                      src={selectedAsset.path}
                      className="max-w-full max-h-[60vh] lg:max-h-[75vh] object-contain"
                      loop
                      playsInline
                      onClick={togglePlay}
                    />
                    {!isPlaying && (
                      <button
                        onClick={togglePlay}
                        className="absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                        }}
                      >
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1a1a1a' }}>
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    )}
                    {isPlaying && isHoveringPreview && (
                      <button
                        onClick={togglePlay}
                        className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1a1a1a' }}>
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      </button>
                    )}
                  </>
                ) : (
                  <img
                    src={selectedAsset.path}
                    alt={selectedAsset.name}
                    className="max-w-full max-h-[60vh] lg:max-h-[75vh] object-contain"
                  />
                )}
              </div>

              <div 
                className="w-full lg:w-80 p-6 lg:overflow-y-auto"
                style={{ 
                  backgroundColor: '#fff',
                  borderLeft: '1px solid rgba(0,0,0,0.04)'
                }}
              >
                <h2 
                  className="text-xl font-light mb-1"
                  style={{ color: '#1a1a1a' }}
                >
                  {selectedAsset.name}
                </h2>
                <p 
                  className="text-sm mb-6"
                  style={{ color: '#999' }}
                >
                  {selectedAsset.movie}
                </p>

                <div className="space-y-5">
                  <div>
                    <label 
                      className="text-xs uppercase tracking-wider mb-2 block"
                      style={{ color: '#bbb' }}
                    >
                      标签
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedAsset.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.04)',
                            color: '#666'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedAsset.shotType && (
                    <div>
                      <label 
                        className="text-xs uppercase tracking-wider mb-2 block"
                        style={{ color: '#bbb' }}
                      >
                        景别
                      </label>
                      <p className="text-sm" style={{ color: '#1a1a1a' }}>{selectedAsset.shotType}</p>
                    </div>
                  )}

                  {selectedAsset.cameraMovement && (
                    <div>
                      <label 
                        className="text-xs uppercase tracking-wider mb-2 block"
                        style={{ color: '#bbb' }}
                      >
                        镜头运动
                      </label>
                      <p className="text-sm" style={{ color: '#1a1a1a' }}>{selectedAsset.cameraMovement}</p>
                    </div>
                  )}

                  <div>
                    <label 
                      className="text-xs uppercase tracking-wider mb-2 block"
                      style={{ color: '#bbb' }}
                    >
                      分类
                    </label>
                    <p className="text-sm" style={{ color: '#1a1a1a' }}>
                      {categories.find(c => c.id === selectedAsset.category)?.name}
                    </p>
                  </div>
                </div>

                <div 
                  className="mt-8 pt-6"
                  style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <a
                    href={selectedAsset.path}
                    download
                    className="block w-full py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    下载素材
                  </a>
                  <p 
                    className="text-xs text-center mt-3"
                    style={{ color: '#bbb' }}
                  >
                    下载限制：720p 及以下
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
