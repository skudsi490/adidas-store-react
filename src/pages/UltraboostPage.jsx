import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import UltraboostStandard  from '../assets/ULS.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import UltraboostSpecial from '../assets/ULS2.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: 'Energy Return', description: 'Experience unparalleled energy return with every stride, thanks to the innovative BOOST technology.' },
  { title: 'Adaptive Fit', description: 'Primeknit uppers wrap your foot in comfort, adapting to every move for a personalized fit.' },
  { title: 'Traction & Durability', description: 'Continental™ Rubber outsoles provide extraordinary grip in all conditions, ensuring durability and performance.' },
  { title: 'Sustainable Choice', description: 'Made with Primeblue, a high-performance recycled material, Ultraboost shoes combine style with sustainability.' },
];

export default function UltraboostPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Ultraboost"
          description="The ultimate run in comfort"
          backgroundImage={UltraboostStandard}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={UltraboostSpecial} />
      </section>
      <section className="section">
        <ImageGrid
          image1={UltraboostStandard}
          image2={UltraboostSpecial}
          text1="High Performance Meets Comfort - Ultraboost redefines the boundaries between performance running and style."
          text2="Innovation in Every Step - Embrace the latest in running technology, designed to push your performance to the next level."
        />
      </section>
    </div>
  );
}
