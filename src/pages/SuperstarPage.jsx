import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import SuperstarClassic from '../assets/superstar.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import SuperstarNewStyle from '../assets/Superstar2.webp';
import ImageGrid from '../components/ImageGrid/ImageGrid';


const featureItems = [
  { title: 'Iconic Design', description: 'The classic shell-toe design that revolutionized the sneaker world.' },
  { title: 'Unmatched Comfort', description: 'Enjoy all-day comfort with cushioned insoles and a smooth lining.' },
  { title: 'Versatile Style', description: 'Perfect for any occasion, from the basketball court to the city streets.' },
  { title: 'Sustainable Choice', description: 'Crafted with eco-friendly materials, making them kinder to our planet.' },
];

export default function SuperstarPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Superstar"
          description="The timeless classic that transformed the sneaker landscape."
          backgroundImage={SuperstarClassic}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={SuperstarNewStyle } />
      </section>
      <section className="section">
        <ImageGrid
          image1={SuperstarClassic}
          image2={SuperstarNewStyle}
          text1="Heritage and Evolution - The Superstar has been an icon of the streets since 1970, continuously evolving while staying true to its roots."
          text2="Craft Your Style - With endless colors and customizations, make the Superstar your own and express your unique style."
        />
      </section>
    </div>
  );
}
