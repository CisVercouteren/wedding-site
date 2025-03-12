import PhotoCard from "./PhotoCard";




const HeroSection = () => {
    return (
        <section id="Hero" className="w-screen flex flex-wrap lg:flex-row justify-center items-center xl:h-[80vh] lg:pt-10 bg-cream">
            <div className="flex flex-col items-center justify-center w-screen lg:pt-8 xl:w-1/2 h-[80vh]">
                <span className="text-8xl xl:text-[8rem] font-written text-gold lg:pt-10">Cis & Ine</span>
                <span className="text-7xl xl:text-[7rem] font-lexend xl:mt-20 py-2 text-gold">01.</span>
                <span className="text-7xl xl:text-[7rem] font-lexend py-2 text-gold">08.</span>
                <span className="text-7xl xl:text-[7rem] font-lexend py-2 text-gold">2025</span>
            </div>
            <PhotoCard title="wat" className="lg:w-1/4 lg:min-w-1/4" src="/wedding-site/cis_ine_walk.jpeg" subtitle="Trouw Cis & Ine"/>
            <PhotoCard title="waar" className="lg:w-1/4 lg:min-w-1/4" src="/wedding-site/chateau-pironne.jpg" subtitle="Chateau Pironne"/>
        </section>
    )
}

export default HeroSection;