import React from 'react'
import { count } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section className="bg-darkmode py-20">
      <div className='site-container max-w-7xl'>
        <div className='glass-card p-4 sm:p-8 lg:p-12 grid grid-cols-4 items-start gap-2 sm:gap-6 lg:gap-8'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-1.5 sm:gap-3 text-center'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-1 sm:mb-2 border border-primary/20 text-base sm:text-2xl">
                <Icon icon={item.icon} width="1em" />
              </div>
              <span className='text-base sm:text-2xl lg:text-3xl font-black text-white tracking-tight'>
                {item.value}
              </span>
              <p className='text-[9px] sm:text-xs lg:text-sm font-bold text-grey uppercase tracking-wide leading-snug'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
