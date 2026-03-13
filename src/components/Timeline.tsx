'use client';

import React, { useState, useMemo } from 'react';
import { TimelinePoint, Dynasty, dynasties, getTimelinePointsByCityId, getCityDynasties } from '@/data/timelineData';

interface TimelineProps {
  cityId: number;
  onSelectPoint?: (point: TimelinePoint | null) => void;
}

type ZoomLevel = 'dynasty' | 'year';

export default function Timeline({ cityId, onSelectPoint }: TimelineProps) {
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>('dynasty');
  const [hoveredPoint, setHoveredPoint] = useState<TimelinePoint | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<TimelinePoint | null>(null);

  const cityDynastyIds = useMemo(() => getCityDynasties(cityId), [cityId]);
  const cityDynasties = useMemo(() => 
    dynasties.filter(d => cityDynastyIds.includes(d.id)),
    [cityDynastyIds]
  );
  const timelinePoints = useMemo(() => 
    getTimelinePointsByCityId(cityId),
    [cityId]
  );

  const handleZoomIn = () => {
    if (zoomLevel === 'dynasty') {
      setZoomLevel('year');
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel === 'year') {
      setZoomLevel('dynasty');
    }
  };

  const renderDynastyView = () => {
    return (
      <div className="relative h-32 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-end">
          {cityDynasties.map((dynasty) => {
            const totalYears = cityDynasties.reduce((sum, d) => sum + (d.endYear - d.startYear), 0);
            const width = ((dynasty.endYear - dynasty.startYear) / totalYears * 100);
            const pointsInDynasty = timelinePoints.filter(p => p.dynastyId === dynasty.id);
            
            return (
              <div
                key={dynasty.id}
                className="h-full transition-all duration-300 hover:brightness-110 cursor-pointer relative group"
                style={{ 
                  width: `${width}%`, 
                  backgroundColor: dynasty.color 
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-xs font-bold">{dynasty.name}</div>
                  <div className="text-white/80 text-xs">
                    {dynasty.startYear < 0 ? `公元前${Math.abs(dynasty.startYear)}年` : `${dynasty.startYear}年`}
                    {' - '}
                    {dynasty.endYear < 0 ? `公元前${Math.abs(dynasty.endYear)}年` : `${dynasty.endYear}年`}
                  </div>
                </div>
                
                {pointsInDynasty.map((point, idx) => (
                  <div
                    key={point.id}
                    className="absolute top-2 w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform"
                    style={{ left: `${(idx + 1) / (pointsInDynasty.length + 1) * 80 + 10}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPoint(point);
                      onSelectPoint?.(point);
                    }}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredPoint(point);
                    }}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderYearView = () => {
    if (timelinePoints.length === 0) return null;

    const minYear = Math.min(...timelinePoints.map(p => p.year));
    const maxYear = Math.max(...timelinePoints.map(p => p.year));
    const yearRange = maxYear - minYear;

    return (
      <div className="relative h-32 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          {timelinePoints.map((point) => {
            const position = yearRange > 0 ? ((point.year - minYear) / yearRange) : 0.5;
            return (
              <div
                key={point.id}
                className="absolute top-0 bottom-0 cursor-pointer group"
                style={{ left: `${position * 100}%` }}
                onClick={() => {
                  setSelectedPoint(point);
                  onSelectPoint?.(point);
                }}
                onMouseEnter={() => setHoveredPoint(point)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="w-1 h-full bg-white/30 group-hover:bg-white/60 transition-colors" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full group-hover:scale-150 transition-transform" />
                </div>
                <div className="absolute bottom-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {point.year < 0 ? `公元前${Math.abs(point.year)}年` : `${point.year}年`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">历史时间轴</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel === 'dynasty'}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="text-sm font-medium">
            {zoomLevel === 'dynasty' ? '朝代视图' : '年份视图'}
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel === 'year'}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {zoomLevel === 'dynasty' ? renderDynastyView() : renderYearView()}

      {hoveredPoint && !selectedPoint && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="font-semibold text-lg">
            {hoveredPoint.year < 0 ? `公元前${Math.abs(hoveredPoint.year)}年` : `${hoveredPoint.year}年`}
            : {hoveredPoint.title}
          </div>
          <p className="text-gray-600 mt-2">{hoveredPoint.description}</p>
          {hoveredPoint.significance && (
            <p className="text-sm text-blue-600 mt-2">
              <strong>意义：</strong>{hoveredPoint.significance}
            </p>
          )}
          {hoveredPoint.relatedPersons && hoveredPoint.relatedPersons.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              <strong>相关人物：</strong>{hoveredPoint.relatedPersons.join('、')}
            </p>
          )}
        </div>
      )}

      {selectedPoint && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="font-semibold text-lg">
                {selectedPoint.year < 0 ? `公元前${Math.abs(selectedPoint.year)}年` : `${selectedPoint.year}年`}
                : {selectedPoint.title}
              </div>
              <p className="text-gray-600 mt-2">{selectedPoint.description}</p>
              {selectedPoint.significance && (
                <p className="text-sm text-green-600 mt-2">
                  <strong>意义：</strong>{selectedPoint.significance}
                </p>
              )}
              {selectedPoint.relatedPersons && selectedPoint.relatedPersons.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  <strong>相关人物：</strong>{selectedPoint.relatedPersons.join('、')}
                </p>
              )}
            </div>
            <button
              onClick={() => {
                setSelectedPoint(null);
                onSelectPoint?.(null);
              }}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
