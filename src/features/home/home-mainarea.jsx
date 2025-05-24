'use client';
import React, { useState, useRef, useEffect } from 'react';
import Textfield from '@/components/textfield/textfield';
import Image from 'next/image';
import arrowsvg from '@/components/svg/arrow.svg';
import arrowwhite from '@/components/svg/arrowwhite.svg';
import Copy from '@/components/svg/copy.svg';
import Download from '@/components/svg/download.svg';
import RichTextEditor from '@/components/richeditor/RichTextEditor';
import Numfield from '@/components/numfield/numfield';
import { jsPDF } from 'jspdf';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { simplePost } from '@/Controller/api';
import { Toaster, toast } from 'react-hot-toast';

const HomeMainarea = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [targetWordCount, setTargetWordCount] = useState(500);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [formData, setFormData] = useState({ 
    topic: '', 
    academicLevel: '', 
    aditionalInstructions: '', 
    words: 500
  });
  const [characterCount, setCharacterCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const editorRef = useRef(null);
  const exportDropdownRef = useRef(null);

  // Close export dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
        setShowExportDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWordCountChange = (e) => {
    const count = Number(e.target.value);
    if (count >= 100 && count <= 5000) {
      setTargetWordCount(count);
      setFormData((prev) => ({ ...prev, words: count }));
    }
  };

  const updateCounts = () => {
    if (editorRef.current) {
      const text = editorRef.current.getText();
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      setWordCount(words);
      setCharacterCount(text.length);
    }
  };

  const generateEssay = async () => {
    if (!formData.topic.trim()) {
      toast.error('Please enter an essay topic');
      return;
    }
    
    const payload = {
      ...formData,
      words: targetWordCount
    };

    setIsLoading(true);
    const toastId = toast.loading('Generating your essay...', {
      duration: Infinity,
      position: 'top-right'
    });
    
    try {
      const response = await simplePost('humanize/generate-essay', payload, null, false, {
        isweb: true
      });
      
      if (response?.status && response?.data) {
        // Improved formatting for better readability
        const formattedContent = response.data
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br/>');
        const htmlContent = `<p>${formattedContent}</p>`;
        editorRef.current.setContent(htmlContent);
        setIsGenerated(true);
        updateCounts();
        toast.success('Essay generated successfully!', { 
          id: toastId,
          duration: 4000 
        });
      } else {
        throw new Error(response?.message || 'Failed to generate essay');
      }
    } catch (error) {
      console.error('Error generating essay:', error);
      toast.error(error.message || 'Failed to generate essay', { 
        id: toastId,
        duration: 4000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      const text = editorRef.current.getText();
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', { duration: 2000 });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error('Failed to copy text', { duration: 2000 });
    }
  };

  const handleExport = (format) => {
    if (!isGenerated) {
      toast.error('No content to export', { duration: 2000 });
      return;
    }

    const html = editorRef.current.getContent();
    const text = editorRef.current.getText();
    const title = `essay_${formData.topic || 'untitled'}`.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    try {
      if (format === 'txt') {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, `${title}.txt`);
        toast.success('Exported as TXT file', { duration: 2000 });
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
      
        // Add title
        doc.setFontSize(16);
        doc.text(formData.topic || 'Untitled Essay', margin, y);
        y += 30;
        
        // Reset font size for content
        doc.setFontSize(12);
        
        lines.forEach((line) => {
          if (y > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += 15;
        });
      
        doc.save(`${title}.pdf`);
        toast.success('Exported as PDF file', { duration: 2000 });
      }
      
      if (format === 'docx') {
        const docxBlob = htmlDocx.asBlob(html);
        const url = URL.createObjectURL(docxBlob);
        triggerDownload(url, `${title}.docx`);
        toast.success('Exported as DOCX file', { duration: 2000 });
      }
    } catch (error) {
      console.error('Export error:', error);
      toast.error(`Failed to export as ${format.toUpperCase()}`, { duration: 2000 });
    }
  };

  const triggerDownload = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  const handleErase = () => {
    if (editorRef.current) {
      editorRef.current.clearContent();
      setIsGenerated(false);
      setWordCount(0);
      setCharacterCount(0);
      toast.success('Editor cleared', { duration: 2000 });
    }
  };

  const clearAll = () => {
    setFormData({ 
      topic: '', 
      academicLevel: '', 
      aditionalInstructions: '',
      words: 500
    });
    setTargetWordCount(500);
    handleErase();
    toast.success('All fields cleared', { duration: 2000 });
  };

  return (
    <div className="container mx-auto px-5 sm:px-15 py-20">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '8px',
          },
        }}
      />

      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow-lg p-6">
        {/* Left Form */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Essay Generator</h2>

          <form onSubmit={(e) => { e.preventDefault(); generateEssay(); }} className="flex flex-col gap-6">
            <Textfield 
              name="topic" 
              label="Essay Topic*" 
              required 
              placeholder="Enter your essay topic" 
              value={formData.topic} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            
            <Textfield 
              name="academicLevel" 
              label="Academic Level" 
              placeholder='Select academic level' 
              type="dropdown" 
              options={[
                { value: "", label: "Select level" },
                { value: "high school", label: "High School" },
                { value: "college", label: "College" },
                { value: "university", label: "University" },
                { value: "masters", label: "Master's" },
                { value: "phd", label: "PhD" }
              ]} 
              value={formData.academicLevel} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            
            <Numfield 
              name="words" 
              label="Word Count"
              value={targetWordCount} 
              onChange={handleWordCountChange} 
              required 
              min={100}
              max={5000}
              step={100}
              disabled={isLoading}
            />
            
            <Textfield 
              name="aditionalInstructions" 
              placeholder='Type here...' 
              label="Additional Instructions" 
              type="textarea" 
              rows={6} 
              value={formData.aditionalInstructions} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
              <button 
                type="button" 
                onClick={clearAll} 
                disabled={isLoading}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition ${
                  isLoading 
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
                }`}
              >
                <Image src={arrowsvg} width={15} height={15} alt="Clear" />
                Clear All
              </button>
              
              <button 
                type="submit" 
                disabled={isLoading || isGenerated}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : isGenerated 
                      ? 'bg-grey-600 text-white cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-black-700 cursor-pointer'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Generating...
                  </span>
                ) : isGenerated ? (
                  'Essay Generated'
                ) : (
                  <>
                    Generate Essay
                    <Image src={arrowwhite} width={15} height={15} alt="Generate" />
                  </>
                )}
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Essay Output</h3>
            {/* {isGenerated && (
              <div className="flex gap-2 text-sm text-gray-500">
                <span>{wordCount} words</span>
                <span>•</span>
                <span>{characterCount} characters</span>
              </div>
            )} */}
          </div>

          <div className="flex-grow min-h-[400px] overflow-hidden mb-2">
            <RichTextEditor 
              ref={editorRef} 
              onContentChange={updateCounts}
              placeholder={isGenerated ? '' : 'Your generated essay will appear here...'}
              readOnly={!isGenerated}
            />
          </div>

          <div className={`flex items-center justify-between  px-2 mt-2 ${isGenerated ? '' : 'invisible'}`}>
            <div>
            <div className="flex justify-between items-center mb-4">
            {/* <h3 className="text-xl font-semibold text-gray-800">Essay Output</h3> */}
            {isGenerated && (
              <div className="flex gap-2 text-sm text-gray-500">
                <span>{wordCount} words</span>
                <span>•</span>
                <span>{characterCount} characters</span>
              </div>
            )}
          </div>
            </div>
            <div className="flex gap-2 items-center">
              <button 
                onClick={handleCopy} 
                className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                title="Copy to clipboard"
                disabled={!isGenerated}
              >
                <Image src={Copy} width={20} height={20} alt="Copy" />
              </button>
              
              <button 
                onClick={handleErase} 
                className="px-3 py-1.5 rounded-md text-sm bg-red-50 text-red-600 hover:bg-red-100 transition"
                disabled={!isGenerated}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="4" fill="#D1D1D1"/>
<path d="M5.9375 9.02485L8.525 6.43735C8.8063 6.15607 9.18782 5.99805 9.58563 5.99805C9.98344 5.99805 10.365 6.15607 10.6463 6.43735L18.0625 13.8536C18.3438 14.1349 18.5018 14.5164 18.5018 14.9142C18.5018 15.312 18.3438 15.6936 18.0625 15.9749L16.1838 17.8536C16.1371 17.9002 16.0818 17.9371 16.0209 17.9622C15.9599 17.9873 15.8946 18.0001 15.8288 17.9999H6.5C6.3674 17.9999 6.24022 17.9472 6.14645 17.8534C6.05268 17.7596 6 17.6325 6 17.4999C6 17.3672 6.05268 17.2401 6.14645 17.1463C6.24022 17.0525 6.3674 16.9999 6.5 16.9999H11.7938L5.9375 11.1461C5.65622 10.8648 5.4982 10.4833 5.4982 10.0855C5.4982 9.68767 5.65622 9.30615 5.9375 9.02485ZM13.2075 16.9999H15.6219L17.3544 15.2674C17.4481 15.1736 17.5007 15.0465 17.5007 14.9139C17.5007 14.7814 17.4481 14.6542 17.3544 14.5605L14 11.2067L10.7069 14.4999L13.2075 16.9999ZM6.645 10.4374L10 13.793L13.2931 10.4999L9.9375 7.1461C9.89107 7.09961 9.83592 7.06273 9.77522 7.03757C9.71452 7.01241 9.64946 6.99946 9.58375 6.99946C9.51805 6.99946 9.45298 7.01241 9.39228 7.03757C9.33158 7.06273 9.27644 7.09961 9.23 7.1461L6.64375 9.73235C6.55006 9.82611 6.49742 9.95324 6.49742 10.0858C6.49742 10.2183 6.55006 10.3455 6.64375 10.4392L6.645 10.4374Z" fill="#020202"/>
</svg>

              </button>

              {/* Export Dropdown */}
              <div className="relative" ref={exportDropdownRef}>
                <button
                  onClick={() => setShowExportDropdown((prev) => !prev)}
                  disabled={!isGenerated}
                  className={`p-2 rounded-md transition ${
                    !isGenerated 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
                  }`}
                  title="Export options"
                >
                  <Image src={Download} width={20} height={20} alt="Export" />
                </button>

                {showExportDropdown && (
                  <div className="absolute right-0 bottom-full z-10 mb-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        handleExport('txt');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 transition"
                    >
                      Export as TXT
                    </button>
                    <button
                      onClick={() => {
                        handleExport('pdf');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 transition"
                    >
                      Export as PDF
                    </button>
                    <button
                      onClick={() => {
                        handleExport('docx');
                        setShowExportDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 transition"
                    >
                      Export as DOCX
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