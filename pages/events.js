import Layout from "../components/layout";
import Events from "../components/events";

import { fetchQuery } from "../lib/utils";

const EventsPage = ({ events }) => (
  <Layout
    title="Etkinliklerimiz"
    description="ACM Bilkent Etkinliklerimiz Sayfası"
  >
    <Events description="" showButton={false} events={events} />
  </Layout>
);

export const getStaticProps = async () => {
  let events = await fetchQuery("events");

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
};

export default EventsPage;
