'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 'what-is-upshoot',
    question: 'What is Upshoot marketing?',
    answer:
      'UpShoot Marketing, we go beyond creating content, we create momentum. Every video, design and campaign we produce is built to deliver measurable growth; more visibility, stronger engagement, and better conversions.',
  },
  {
    id: 'services-offered',
    question: 'What services does Upshoot offer?',
    answer:
      'We offer a comprehensive suite of B2B marketing services including content strategy, video production, growth marketing, brand design, and campaign management — all tailored to drive real, measurable results for your business.',
  },
  {
    id: 'how-to-get-started',
    question: 'How do I get started with Upshoot?',
    answer:
      "Getting started is simple. Reach out to us via the contact form or schedule a free consultation. We'll discuss your goals, audit your current marketing, and propose a tailored strategy to accelerate your growth.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: Readonly<{
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}>) {
  return (
    <div className='border-b border-border'>
      <button
        onClick={onToggle}
        className='flex w-full items-center justify-between py-6 text-left cursor-pointer'
      >
        <span className='text-lg font-medium pr-4'>{faq.question}</span>
        <span className='shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-colors'>
          {isOpen ? (
            <Minus className='w-5 h-5' />
          ) : (
            <Plus className='w-5 h-5' />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className='overflow-hidden'
          >
            <p className='pb-6 text-muted-foreground leading-relaxed'>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id='faq' className='container-px bg-background'>
      <div className='border-t border-border py-16 md:py-24'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
            {/* Left column */}
            <AnimatedSection animation='slideRight' duration='slow'>
              <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                Frequently Asked Questions
              </h2>
              <p className='text-muted-foreground mb-8 max-w-md'>
                Everything about Upshoot Marketing. Have more questions, contact
                us.
              </p>
              <ShimmerButton pulse={false} asChild>
                <Link href='/contact-us'>Contact Us</Link>
              </ShimmerButton>
            </AnimatedSection>

            {/* Right column */}
            <AnimatedSection animation='slideLeft' duration='slow'>
              <div>
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
