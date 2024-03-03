import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import SuperstarImage from '../assets/superstar.jpg';
import StansmithImage from '../assets/Stansmith.jpg';
import UltraboostImage from '../assets/ultraboost-shoe.jpg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Superstar"
          description="The iconic shell-toe shoes that revolutionized the world of fashion. Embrace the legacy."
          backgroundImage={SuperstarImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Stan Smith"
          description="A timeless classic that blends simplicity with elegance. Discover the minimalist design."
          backgroundImage={StansmithImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Adidas Ultraboost"
          description="Experience unmatched comfort and energy return with every step. Redefine your run."
          backgroundImage={UltraboostImage}
        />
      </section>
    </div>
  );
}
