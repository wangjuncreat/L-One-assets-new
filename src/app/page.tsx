'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#fafafa' }}>
      <div className="text-center">
        <h1 
          className="text-4xl font-light mb-4 tracking-wide"
          style={{ color: '#1a1a1a', fontWeight: 300 }}
        >
          L-One的素材库
        </h1>
        <p 
          className="text-lg mb-8"
          style={{ color: '#888', fontWeight: 300 }}
        >
          电影画面分镜素材库
        </p>
        
        <Link 
          href="/assets"
          className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          进入素材库 →
        </Link>
      </div>
      
      <footer 
        className="absolute bottom-8 text-center"
        style={{ color: '#bbb' }}
      >
        <p className="text-sm">点击上方按钮访问素材库</p>
      </footer>
    </div>
  );
}
