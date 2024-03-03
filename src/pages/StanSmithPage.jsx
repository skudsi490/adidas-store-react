import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import StanSmithClassic from '../assets/Stansmith.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import StanSmithTrend from '../assets/SST.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: 'Iconic Simplicity', description: 'The Stan Smith offers a simple, white color scheme accented with pops of color for a timeless look.' },
  { title: 'Sustainable Materials', description: 'Crafted with high-quality, sustainable materials to minimize environmental impact.' },
  { title: 'Versatile Style', description: 'Perfect for any setting, from casual outings to formal events, embodying versatility in fashion.' },
  { title: 'Tennis Heritage', description: 'Originally designed for the tennis court, embodying the sport\'s elegance and performance.' },
];

export default function StanSmithPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Stan Smith"
          description="A signature style for everyday wear"
          backgroundImage={StanSmithClassic}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={StanSmithTrend} />
      </section>
      <section className="section">
        <ImageGrid
          image1={StanSmithClassic}
          image2={StanSmithTrend}
          text1="Classic Meets Modern - The Stan Smith has evolved from its origins on the tennis court to become a streetwear staple."
          text2="Eco-Conscious Fashion - Embrace style with a conscience with shoes made from recycled materials, reflecting Adidas' commitment to sustainability."
        />
      </section>
    </div>
  );
}
