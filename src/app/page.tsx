import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

import AirBnb from "public/partners/airbnb.png";
import Google from "public/partners/google.png";
import Microsoft from "public/partners/microsoft.png";
import Hubspot from "public/partners/hubspot.png";
import Amazon from "public/partners/amazon.png";
import Fedex from "public/partners/fedex.png";
import HeroBanner from "public/hero-banner.png";
import LandingKitImg from "public/landing-kit.png";
import Mockup from "public/mockup.png";
import MockupTablet from "public/Mockup-tablet.png";

import Button from "@/components/Shared/Button";
import Title from "@/components/Shared/Typography/Title";
import Text from "@/components/Shared/Typography/Text";
import MetricsCard from "@/components/Shared/MetricsCard";
import ReviewCard from "@/components/Shared/ReviewCard";
import FeatureCard, { FeatureCardProps } from "@/components/Shared/FeatureCard";
import { FaArrowRight } from "react-icons/fa";

import { REVIEWS, PRICING, TEAM_MEMBERS } from "@/data";
import PricingCard from "@/components/Shared/PricingCard";
import TeamCard from "@/components/Shared/TeamCard";
import SocialIcon from "@/components/Shared/SocialIcon";
import { Input } from "@/components/Shared/Input";
import Form from "@/components/Form";

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

const metrics = [
  { title: "Websites launched", value: 10000 },
  { title: "Projects created with Anima", value: 931000 },
  { title: "New users joined Anima", value: 240000 },
  { title: "Teams used Anima", value: 12000 },
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-24 lg:pt-40 container flex flex-col gap-36 md:gap-24 lg:gap-36">
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
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
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
      {/* Our metrics section */}
      <section>
        <div>
          <Title
            className="text-4xl font-semibold md:font-bold text-center"
            level={2}
          >
            Our Metrics Tell the Story
          </Title>
          <Text className="text-center mt-2 px-6">
            Our metrics component gives you the inside scoop on your success and
            helps you stay on top of your game in style.
          </Text>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-6 lg:grid-cols-4 gap-6">
          {metrics.map(({ title, value }, idx) => (
            <MetricsCard key={idx} title={title} value={value} />
          ))}
        </div>
      </section>
      {/* Landed kit section */}
      <section>
        <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between">
          <Image
            src={LandingKitImg}
            className="w-[320px] lg:w-[540px]"
            alt="Landing kit"
          />
          <div className="flex flex-col gap-3 items-center md:items-start">
            <Title
              className=" text-4xl lg:text-5xl font-semibold md:font-bold text-center md:text-left"
              level={2}
            >
              Get Landing Page UI Kit Today!
            </Title>
            <Text className="text-center md:text-left mt-2 max-sm:px-2 lg:pr-20">
              Break the Figma limits and explore the endless possibilities with
              Anima.
            </Text>
            <Button className="mt-4 w-max" variant="filled">
              Get Started <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Customers stories section */}
      <section>
        <div>
          <Title
            className="text-4xl font-semibold md:font-bold text-center"
            level={2}
          >
            Real Stories from Satisfied Customers
          </Title>
          <Text className="text-center mt-2 px-6">
            See how our landing page ui kit is making an impact.
          </Text>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 ">
          {REVIEWS.map(({ review, rating, reviewer }, idx) => (
            <div key={idx} className="">
              <ReviewCard review={review} rating={rating} reviewer={reviewer} />
            </div>
          ))}
        </div>
      </section>
      {/* Subscription plan section */}
      <section>
        <div>
          <Title
            className="text-4xl font-semibold md:font-bold text-center"
            level={2}
          >
            Pick Your Perfect Plan
          </Title>
          <Text className="text-center mt-2 px-6">
            Find the perfect plan for your business with our flexible pricing
            options.
          </Text>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
            {PRICING.map((pricing) => (
              <div key={pricing.title}>
                <PricingCard
                  title={pricing.title}
                  price={pricing.price}
                  features={pricing.features}
                  excerpt={pricing.excerpt}
                  isPopular={pricing.title === "Enterprise"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}

      <section>
        <div>
          <Title
            className="text-4xl font-semibold md:font-bold text-center"
            level={2}
          >
            Meet Our Team
          </Title>
          <Text className="text-center mt-2 px-6">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </Text>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section>
        <div className="bg-[#F2BFAF] flex rounded-2xl flex-col md:flex-row max-sm:max-h-[630px] overflow-hidden">
          <div className="flex-1 px-10 py-10 flex flex-col gap-4">
            <Title
              className=" text-3xl lg:text-5xl font-semibold md:font-bold text-center md:text-left !leading-[3rem] lg:!leading-[4rem]"
              level={2}
            >
              Get Landing Page UI Kit Today!
            </Title>
            <Text className="text-center md:text-left mt-2 max-sm:px-2 lg:pr-20">
              Break the Figma limits and explore the endless possibilities with
              Anima.
            </Text>
            <Button className="mt-4 w-max max-sm:mx-auto" variant="filled">
              Get Started <FaArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1">
            <Image src={Mockup} alt="Hero banner" className="hidden lg:block" />
            <Image src={MockupTablet} alt="Hero banner" className="lg:hidden" />
          </div>
        </div>
      </section>

      {/* contact section */}
      <section>
        <div className="bg-white rounded-xl border-[#E5F4F2] px-8 py-10">
          <div>
            <Title className="text-4xl font-semibold md:font-bold">
              Let’s get in touch!
            </Title>
            <Text className="mt-2">
              Got questions about the Landing Page UI Kit? Our team is here to
              help. Contact us for quick and friendly support.
            </Text>
          </div>
          <div className="flex flex-col mt-8 gap-8 lg:flex-row lg:pr-28">
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <a
                  href="tel:+012 345 6789"
                  className="flex items-center gap-2 font-light"
                >
                  <LuPhoneCall className="text-green-100 text-lg" /> +012 345
                  6789
                </a>
                <a
                  href="mailto:Hello@animaapp.com"
                  className="flex items-center gap-2 font-light"
                >
                  <MdOutlineMailOutline className="text-green-100 text-lg" />
                  hello@animaapp.com
                </a>
              </div>
              <div className="mt-4">
                <Title level={5} className="text-xl font-semibold">
                  Connect with us
                </Title>
                <div className="flex items-center gap-3 mt-3">
                  {["instagram", "dribbble", "behance", "twitter"].map(
                    (platform) => (
                      <SocialIcon
                        key={platform}
                        platform={platform as unknown as any}
                        href="#"
                        isTeam
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}
