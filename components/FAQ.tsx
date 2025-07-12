"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "Is my data private and secure?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely. We only access publicly available information and never store or share your prospect data. 
        Your conversations and insights remain completely private. We're GDPR compliant and use enterprise-grade security.
      </div>
    ),
  },
  {
    question: "How quickly will I see results?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Most users report better conversations within their first day of use. Significant improvement in conversion rates 
        typically happens within the first week as you get comfortable with the insights and develop your approach.
      </div>
    ),
  },
  {
    question: "Do I need technical skills to use this?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Not at all. Simply enter a phone number or name, and get instant insights. It's designed for busy sales 
        professionals who need information fast, not tech experts.
      </div>
    ),
  },
  {
    question: "What if the prospect asks how I know so much about them?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Everything we provide is from public sources they've shared themselves. Simply say "I saw your post about..." 
        or "I noticed your company recently..." – it shows you care enough to do your homework.
      </div>
    ),
  },
  {
    question: "Can I cancel anytime?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, cancel with one click anytime. No contracts, no hassles. We're confident you'll love the results, 
        but if not, you're free to leave whenever you want.
      </div>
    ),
  },
  {
    question: "Will this work for my industry?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our AI works across all B2B industries. Whether you're selling software, services, manufacturing, or consulting, 
        the principles of human connection remain the same.
      </div>
    ),
  },
  {
    question: "How does the free trial work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Start with 5 free queries per month to test the platform. No credit card required. If you love it, 
        upgrade to Pro or Business plans for more queries and advanced features.
      </div>
    ),
  },
  {
    question: "What if I don't see improvement in my first week?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We'll extend your trial for free. Our goal is your success. If you don't see better conversations and 
        improved results, we'll work with you to make it right.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-gray-200"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-gray-900 ${isOpen ? "text-blue-600" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-gray-600">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-white" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-blue-600 mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-gray-900">
            Everything You Need to Know
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Common questions about WarmCallAI and how it transforms your sales process.
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
