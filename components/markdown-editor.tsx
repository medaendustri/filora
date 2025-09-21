"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder,
}: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "write"
              ? "bg-white text-gray-900 border-b-2 border-blue-500"
              : "bg-gray-50 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("write")}
        >
          Yazı
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "preview"
              ? "bg-white text-gray-900 border-b-2 border-blue-500"
              : "bg-gray-50 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Önizleme
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === "write" ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-[400px] p-4 border-0 resize-none focus:outline-none"
          />
        ) : (
          <div className="p-4 prose max-w-none">
            {value ? (
              <ReactMarkdown>{value}</ReactMarkdown>
            ) : (
              <p className="text-gray-500 italic">
                Önizleme için içerik yazın...
              </p>
            )}
          </div>
        )}
      </div>

      {/* Markdown Help */}
      <div className="bg-gray-50 px-4 py-2 text-xs text-gray-600 border-t border-gray-300">
        <span className="font-medium">Markdown formatı desteklenmektedir:</span>
        <span className="ml-2">
          **kalın**, *italik*, # başlık, - liste, [link](url)
        </span>
      </div>
    </div>
  );
}
