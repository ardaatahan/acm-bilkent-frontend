const Hero = () => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img
        className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="hero.jpg"
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          ACM Bilkent'te Hayaller Sınır Tanımaz
        </h1>
        <p className="leading-relaxed mb-8">
          Bu eğlenceli yolculukta bize eşlik etmek istersen seni de ailemize
          bekliyoruz!
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            BİZE KATIL!
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
