import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <div className="text-gray-500"></div>
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            officiis dolorem quis eaque deleniti odit pariatur veniam, corrupti,
            reprehenderit quia incidunt quisquam? Maxime id eum sint iusto sed
            illum nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            officiis dolorem quis eaque deleniti odit pariatur veniam, corrupti,
            reprehenderit quia incidunt quisquam? Maxime id eum sint iusto sed
            illum nisi.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500 "
            href="tel:+886917830488"
          >
            +886 917-830-488
          </a>
        </div>
      </section>
    </>
  );
}
