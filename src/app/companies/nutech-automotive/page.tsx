import AutomotiveHero from '@/components/automotive/AutomativeHero/AutomotiveHero';
import AutomotiveAbout from '@/components/automotive/AutomotiveAbout/AutomotiveAbout';
import AutomotiveServices from '@/components/automotive/AutomotiveServices/AutomotiveServices';
import AutomotiveWhyChoose from '@/components/automotive/AutomotiveWhyChoose/AutomotiveWhyChoose';
import AutomotiveCTA from '@/components/automotive/AutomotiveCTA/AutomotiveCTA';

export default function NutechAutomotivePage() {
  return (
    <>
      <AutomotiveHero />
      <AutomotiveAbout />
      <AutomotiveServices />
      <AutomotiveWhyChoose />
      <AutomotiveCTA />
    </>
  );
}
