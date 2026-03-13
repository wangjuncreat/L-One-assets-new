'use client';
import React, { useState, useRef, useEffect } from 'react';

interface AIAssistantProps {
  onSearch: (query: string) => void;
}

export default function AIAssistant({ onSearch }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{
    role: 'user' | 'assistant';
    content: string;
  }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;

    // 添加用户消息
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsLoading(true);

    try {
      // 模拟AI回复
      setTimeout(() => {
        const response = `我正在搜索关于"${query}"的信息...\n\n这是一个模拟的AI回复，实际应用中会调用OpenAI API或本地知识库进行搜索。`;
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
        setQuery('');
      }, 1000);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '抱歉，搜索失败，请稍后重试。' }]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-assistant">
      {/* AI助手按钮 */}
      <button
        className={`w-16 h-16 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors ${isOpen ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">🤖</span>
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* 聊天头部 */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold">AI 助手</h3>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {/* 聊天内容 */}
          <div
            ref={chatContainerRef}
            className="h-80 overflow-y-auto px-4 py-3 space-y-4"
          >
            {/* 欢迎消息 */}
            {messages.length === 0 && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">你好！我是城市时间线的AI助手，可以帮你搜索城市相关的信息。请问有什么可以帮助你的？</p>
                </div>
              </div>
            )}

            {/* 消息列表 */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${message.role === 'user' ? 'justify-end' : ''}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${message.role === 'user' ? 'bg-black text-white' : 'bg-gray-100'}`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">你</span>
                  </div>
                )}
              </div>
            ))}

            {/* 加载状态 */}
            {isLoading && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 输入框 */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入你的问题..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !query.trim()}
                className={`px-4 py-2 rounded-md ${isLoading || !query.trim() ? 'bg-gray-300 text-gray-500' : 'bg-black text-white hover:bg-gray-800'}`}
              >
                发送
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}