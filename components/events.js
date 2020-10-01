import Link from "next/link";

const Events = ({ description, showButton, events }) => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
            Etkinliklerimiz
          </h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {events.map((event) => (
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={event.id}>
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={`${event.banner.url}`}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              {event.title}
            </h2>
            <Link href={`event/${event.id}`}>
              <a className="text-blue-500 inline-flex items-center mt-3">
                Ayrıntılar &rarr;
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    {showButton ? (
      <div className="flex justify-center">
        <Link href="/events">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Etkinlikler Sayfası &rarr;
          </button>
        </Link>
      </div>
    ) : null}
  </section>
);

export default Events;
