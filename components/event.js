import { baseUrl } from "../lib/utils";

const Event = ({ event }) => (
  <section class="text-gray-500 bg-gray-900 body-font">
    <img
      class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
      alt="hero"
      src={`${baseUrl}${event.banner.url}`}
    />
    <div class="flex flex-col w-full">
      <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-white">
        {event.title}
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed font-medium text-base">
        {event.description}
      </p>
    </div>
  </section>
);

export default Event;
