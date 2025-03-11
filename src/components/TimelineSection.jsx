import { timelineData } from '../data/data';
import TimelineItem from './TimelineItem';

const TimelineSection = () => {
  return (
    <section id='planning' className="py-24 px-4 bg-cream my-10">
      <div className="max-w-3xl xl:max-w-7xl mx-auto">
        <div className="mb-28 text-center">
          <h2 
            className="text-6xl xl:text-7xl xfont-serif font-written mb-3 text-gray-700"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            De grote dag
          </h2>
        </div>
        
        <div className="relative max-w-2xl xl:max-w-6xl mx-auto py-8">
          {/* Central vertical line for XL screens */}
          <div className="hidden xl:block absolute left-1/2 -top-4 -bottom-32 w-[1px] bg-gold opacity-20 -translate-x-1/2"></div>
          
          {/* Central dots for XL screens 
          depreciated: now in item component
          
          <div className="hidden xl:block absolute left-1/2 inset-y-0 -translate-x-1/2">
            {timelineData.map((_, index) => (
              <div 
                key={index} 
                className="absolute w-1.5 h-1.5 bg-gold opacity-40 rounded-full"
                style={{
                  top: index === 0 ? 0 : index === timelineData.length - 1 ? '100%' : `${index * (100 / (timelineData.length - 1))}%`,
                  transform: 'translateX(-50%)'
                }}
                data-aos="fade-in"
                data-aos-delay={index * 100}
              />
            ))}
          </div>*/}
          
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
