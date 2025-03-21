import { paletteImages } from '../assets/palette-images';
import { Palette, Sun, User, Ban, CloudRain, X, Check, Pipette } from 'lucide-react';

const dos = [
  {
    icon: <Palette className="w-5 h-5 text-emerald-600" />,
    text: "Gebruik kleurrijke, frisse en zomerse kleuren"
  },
  {
    icon: <Pipette className="w-5 h-5 text-emerald-600" />,
    text: "Verschillende tinten van deze kleuren zijn toegestaan"
  },
  {
    icon: <Sun className="w-5 h-5 text-emerald-600" />,
    text: "Dress to Impress - summer style (suit & tie)"
  }
];

const donts = [
  {
    icon: <Ban className="w-5 h-5 text-rose-600" />,
    text: "Geen beige, want dit is alleen voor de bruidegom"
  },
  {
    icon: <CloudRain className="w-5 h-5 text-rose-600" />,
    text: "Vermijd té donkere kleuren"
  },
  {
    icon: <X className="w-5 h-5 text-rose-600" />,
    text: "Draag geen witte outfits"
  }
];

const ColorPaletteSection = () => {

  return (
    <div id='dresscode' className="relative mx-auto px-4 py-16 bg-[url(/palmtrees.jpg)] bg-cover w-[100vw] xopacity-85">
      <div className='absolute inset-0 bg-white/45'/>
      <div className='relative'>
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 mb-6">COZY</p>
        <h2 className="text-6xl font-light tracking-wider font-written">Color Palette</h2>
      </div>
      
      <div className="grid xgrid-cols-1 grid-cols-5 grid-rows-2 gap-4 max-w-7xl mx-auto z-10">
        {paletteImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="w-full aspect-[9/16] mb-4 bg-cover bg-center max-h-32" 
              style={{ 
                backgroundColor: item.color
              }}
            />
            {/*<div 
              className="w-full h-24 mb-2"
              style={{ backgroundColor: item.color }}
            />*/}
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-6xl text-center mb-12 font-written font-light">Dress Code Guidelines</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Do's Column */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-6">
            <Check className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold text-emerald-700">Do&apos;s</h3>
          </div>
          
          <ul className="space-y-6">
            {dos.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {item.icon}
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Don'ts Column */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-6">
            <X className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-rose-700">Don&apos;ts</h3>
          </div>
          
          <ul className="space-y-6">
            {donts.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {item.icon}
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <p className="text-center mt-8 text-gray-600 italic bg-cream/90 rounded-xl py-6">
        Laten we samen een prachtige dag creëren, geïnspireerd op de zonsondergang 🌅
      </p>
    </div>
    </div>
    </div>
  );
};

export default ColorPaletteSection;
