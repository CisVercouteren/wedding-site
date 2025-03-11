import PropTypes from 'prop-types';
import { timelineData } from '../data/data';

const TimelineItem = ({ time, title, description, icon, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`relative pb-16 last:pb-0 xl:pb-0 xl:w-1/2 mb-6 ${isEven ? 'xl:ml-auto' : ''}`}
      style={{
        height: `${100 / (timelineData.length - 1)}%`,
        marginBottom: index === timelineData.length - 1 ? 0 : undefined,
        paddingTop: index === 0 ? 0 : undefined
      }}
      data-aos={`fade-${isEven ? 'left' : 'right'}`}
      data-aos-duration="1200"
      data-aos-delay={index * 100}
      data-aos-offset="150"
    >
      {/* Mobile and left-side layout */}
      <div className={`relative pl-8 xl:pl-0 ${!isEven ? 'xl:pr-24' : 'xl:pl-24'}`}>
        {/* Vertical line - mobile */}
        <div className="absolute top-0 bottom-[-70px] w-[2px] bg-gold opacity-80 xl:hidden"></div>
        
        {/* Time marker - mobile */}
        <div className={`absolute xl:top-2 ${isEven ? 'xl:left-0 xl:-translate-x-[50%]' : 'xl:right-0 xl:-translate-x-[-50%]'} -translate-x-[45%] flex items-center justify-center w-4 h-8 xl:w-2 xl:h-2 bg-gold rounded-full`}></div>
        
        {/* Content */}
        <div className="ml-12 xl:ml-0 group">
          <span className="block text-gold text-3xl font-light tracking-wider leading-none -mt-1 mb-2">{time}</span>
          <div className="flex items-center gap-3 mb-2 md:mb-1.5">
            <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{icon}</span>
            <h3 className="text-2xl font-serif text-gray-800 leading-tight">{title}</h3>
          </div>
          <p className="text-gray-600 font-light leading-relaxed max-w-lg xl:max-w-md tracking-wide">{description}</p>
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default TimelineItem;
