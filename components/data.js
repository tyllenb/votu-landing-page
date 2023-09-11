import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Your Suite Of Metrics",
  desc: "Our quarterly surveys and trend analyses turn vague intuitions into actionable strategies. With Votu, you're not just measuring; you're improving, evolving, and elevating your developer relations.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Turn Feedback into Strategy",
      desc: "Votu's surveys capture a wealth of developer opinions and translate them into actionable insights. You don't just get data; you get a roadmap for DevRel improvement.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Track Trends Over Time",
      desc: "Understand the health of your developer ecosystem with our visual dashboards. Track metrics from quarter to quarter to identify both triumphs and areas needing attention.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cover All Bases",
      desc: "With ten key metrics designed specifically for DevRel, Votu offers a holistic view of your developer relations strategy. From onboarding effectiveness to API usability, we've got you covered.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Get The Buy In You Deserve",
  desc: "Show real-time improvements and ROI, making it easier to secure resources and support for your DevRel initiatives. Votu transforms DevRel from a 'nice-to-have' into a 'must-have,' giving you the evidence you need to show its critical role in platform success.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Speak Their Language",
      desc: "Translate developer satisfaction into metrics and trends that leadership can understand and appreciate. Votu helps you make a compelling case for DevRel investment.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Measure and Showcase Impact",
      desc: "Utilize Votu's comprehensive metrics to not just understand but also visually present the state of your developer ecosystem, driving home its importance to leadership.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Backed by Data",
      desc: "Secure more resources for DevRel activities by showing clear ROI through Votu's analytical capabilities. Turn abstract community sentiment into actionable plans that leadership will want to support.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
