import Layout from "../../components/layout";
import Event from "../../components/event";

import { fetchQuery } from "../../lib/utils";

const EventPage = ({ event }) => (
  <Layout
    title={`${event.title}`}
    description={`ACM Bilkent ${event.title} Etkinliği`}
  >
    <Event event={event} />
  </Layout>
);

export const getStaticProps = async ({ params: { eventId } }) => {
  const event = await fetchQuery("events", eventId);

  return {
    props: {
      event,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const events = await fetchQuery("events");

  const paths = events.map((event) => ({
    params: {
      eventId: `${event.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default EventPage;
