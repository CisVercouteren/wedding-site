const CadeautipsSection = () => {
  return (
    <section id='cadeautip' className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="text-[3.75rem] xl:text-7xl font-written text-gray-700 mb-16"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Cadeautip
        </h2>
        
        <div 
          className="bg-cream p-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Wij zijn al jaren samen, hebben alles wat ons hartje begeert, maar voor onze toekomstplannen kunnen we nog wel een centje gebruiken.
          </p>
          <p className="text-lg text-gray-700 font-semibold mt-4">
            BE40 7370 4740 5963
          </p>
        </div>
      </div>
    </section>
  );
};

export default CadeautipsSection;
