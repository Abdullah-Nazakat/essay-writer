'use client';

import React, { useState, useRef } from 'react';
import Textfield from '@/components/textfield/textfield';
import Image from 'next/image';
import arrowsvg from '@/components/svg/arrow.svg';
import arrowwhite from '@/components/svg/arrowwhite.svg';
import RichTextEditor from '@/components/richeditor/RichTextEditor';
import Numfield from '@/components/numfield/numfield';
import { jsPDF } from 'jspdf';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { simplePost } from '@/Controller/api';

const HomeMainarea = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [targetWordCount, setTargetWordCount] = useState(500);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [formData, setFormData] = useState({ topic: '', academicLevel: '', aditionalInstructions: '' });

  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateWordCount = () => {
    if (editorRef.current) {
      const text = editorRef.current.getText();
      setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    }
  };

  const generateEssay = async () => {
    if (!formData.topic.trim()) {
      alert('Please enter an essay topic');
      return;
    }
    setIsLoading(true);
    
    try {
      const response = await simplePost('humanize/generate-essay', formData, null, false, {
        isweb: true
      });
      
      if (response?.status && response?.data) {
        const formattedContent = response.data.replace(/\n\n/g, '</p><p>');
        const htmlContent = `<p>${formattedContent}</p>`;
        editorRef.current.setContent(htmlContent);
        setIsGenerated(true);
        updateWordCount();
      }
    } catch (error) {
      console.error('Error generating essay:', error);
      alert('Failed to generate essay');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      const text = editorRef.current.getText();
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy text');
    }
  };

  const handleExport = (format) => {
    const html = editorRef.current.getContent();
    const text = editorRef.current.getText();
    const title = `essay_${formData.topic || 'untitled'}`;

    if (format === 'txt') {
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      triggerDownload(url, `${title}.txt`);
    }

    if (format === 'pdf') {
      const doc = new jsPDF({
        unit: 'pt',
        format: 'a4',
        hotfixes: ['px_scaling'],
      });
    
      const margin = 40;
      const pageHeight = doc.internal.pageSize.height;
      const lines = doc.splitTextToSize(text, doc.internal.pageSize.width - margin * 2);
      let y = margin;
    
      lines.forEach((line) => {
        if (y > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
        doc.text(line, margin, y);
        y += 20;
      });
    
      doc.save(`${title}.pdf`);
    }
    

    if (format === 'docx') {
      const docxBlob = htmlDocx.asBlob(html);
      const url = URL.createObjectURL(docxBlob);
      triggerDownload(url, `${title}.docx`);
    }
  };

  const triggerDownload = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleErase = () => {
    editorRef.current.clearContent();
    setIsGenerated(false);
    setWordCount(0);
  };

  const clearAll = () => {
    setFormData({ topic: '', academicLevel: '', aditionalInstructions: '' });
    setTargetWordCount(500); // Reset word count to default
    handleErase();
  };

  return (
    <div className="container mx-auto px-5 sm:px-15 py-20">
      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow-lg p-6">
        {/* Left Form */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Essay Generator</h2>

          <form onSubmit={(e) => { e.preventDefault(); generateEssay(); }} className="flex flex-col gap-6">
            <Textfield name="topic" label="Essay Topic*" required placeholder="Enter your essay topic" value={formData.topic} onChange={handleInputChange} />
            <Textfield name="academicLevel" label="Academic Level" placeholder='Select academic level' type="dropdown" options={[
              { value: "high school", label: "High School" },
              { value: "college", label: "College" },
              { value: "university", label: "University" },
              { value: "masters", label: "Master's" },
              { value: "phd", label: "PhD" }
            ]} value={formData.academicLevel} onChange={handleInputChange} />
            <Numfield name="words" value={targetWordCount} onChange={(e) => setTargetWordCount(Number(e.target.value))} required />
            <Textfield name="aditionalInstructions" placeholder='Type here...' label="Additional Instructions" type="textarea" rows={6} value={formData.aditionalInstructions} onChange={handleInputChange} />
            
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
              <button type="button" onClick={clearAll} className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                <Image src={arrowsvg} width={15} height={15} alt="Clear" />
                Clear All
              </button>
              <button type="submit" disabled={isLoading} className={`flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg bg-custom-dark text-white hover:bg-blue-700 transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isLoading ? 'Generating...' : 'Generate Essay'}
                <Image src={arrowwhite} width={15} height={15} alt="Generate" />
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="hidden lg:block">
          <div className="h-full w-px bg-gray-300 mx-4"></div>
        </div>

        {/* Editor & Output */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Essay Output</h3>

          <div className="flex-grow min-h-[400px] overflow-hidden mb-2">
            <RichTextEditor ref={editorRef} />
          </div>

          <div className={`flex items-center justify-between px-2 ${isGenerated ? '' : 'invisible'}`}>
            <span className="text-sm text-gray-500">{wordCount} words</span>
            <div className="flex gap-2 items-center">
              <button onClick={handleCopy} className="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">Copy</button>
              <button onClick={() => handleErase()} className="px-3 py-1.5 rounded-md text-sm bg-red-50 text-red-600 hover:bg-red-100">Clear</button>

              {/* Export Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowExportDropdown((prev) => !prev)}
                  className="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Export ▼
                </button>

                {showExportDropdown && (
                  <div className="absolute bottom-10 z-10 mt-1 bg-white border rounded-md shadow-lg">
                    <button
                      onClick={() => {
                        handleExport('txt');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      Export as .txt
                    </button>
                    <button
                      onClick={() => {
                        handleExport('pdf');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      Export as .pdf
                    </button>
                    <button
                      onClick={() => {
                        handleExport('docx');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      Export as .docx
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainarea;