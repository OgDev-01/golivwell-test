import Image from "next/image";

import AirBnb from "public/partners/airbnb.png";
import Google from "public/partners/google.png";
import Microsoft from "public/partners/microsoft.png";
import Hubspot from "public/partners/hubspot.png";
import Amazon from "public/partners/amazon.png";
import Fedex from "public/partners/fedex.png";

import Button from "@/components/Shared/Button";
import Title from "@/components/Shared/Typography/Title";
import HeroBanner from "public/hero-banner.png";
import Text from "@/components/Shared/Typography/Text";
import FeatureCard, { FeatureCardProps } from "@/components/Shared/FeatureCard";

const partners = [
  { name: "Airbnb", image: AirBnb },
  { name: "Google", image: Google },
  { name: "Amazon", image: Amazon },
  { name: "Microsoft", image: Microsoft },
  { name: "Fedex", image: Fedex },
  { name: "Hubspot", image: Hubspot },
];

const features: FeatureCardProps[] = [
  {
    title: "Fast building",
    description:
      "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
    type: "building",
    href: "#",
  },
  {
    title: "Responsive Design",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
    type: "design",
    href: "#",
  },
  {
    title: "No Code Needed",
    description:
      "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
    type: "development",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-24 lg:pt-40 container flex flex-col gap-16 md:gap-24 lg:gap-36">
      {/* Main hero section */}
      <section className="flex item-center lg:justify-between flex-col lg:flex-row ">
        <div className="basis-[60%] flex gap-6 flex-col justify-center pb-10">
          <Title className="text-center text-4xl max-md:px-6 md:text-6xl lg:text-left font-bold !leading-[3rem] md:!leading-[4.5rem]">
            Create Engaging Landing Pages
          </Title>
          <Text className="max-sm:px-4 lg:pr-28 text-center lg:text-left">
            Build beautiful landing pages in record time with{" "}
            <a
              target="_blank"
              className="text-blue-400"
              rel="noopener noreferrer"
              href="https://www.animaapp.com/"
            >
              Anima’
            </a>
            s Landing Page UI kit for Figma. No code required!
          </Text>
          <div className="flex max-lg:justify-center items-center gap-6 mt-4">
            <Button className="" variant="filled">
              Get Started
            </Button>
            <Button className="max-lg:hidden" variant="outlined">
              How it works
            </Button>
          </div>
        </div>
        <div>
          <Image
            className="mx-auto w-[500px]"
            src={HeroBanner}
            alt="Hero banner"
            priority
          />
        </div>
      </section>

      {/* Partners section */}
      <section className="">
        <div className="flex justify-between items-center gap-6 mt-8 border-t border-b py-10 flex-wrap">
          {partners.map((partner) => (
            <Image
              className="shrink-0"
              key={partner.name}
              src={partner.image}
              alt={partner.name}
            />
          ))}
        </div>
      </section>

      {/* Features section */}
      <section>
        <Title
          className="text-4xl font-semibold md:font-bold text-center"
          level={2}
        >
          Features
        </Title>
        <Text className="text-center mt-2 px-6">
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </Text>
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              type={feature.type}
              href={feature.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
