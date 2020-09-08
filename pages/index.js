import Layout from "../components/layout";
import Hero from "../components/hero";
import Events from "../components/events";
import Contact from "../components/contact";

import { fetchQuery } from "../lib/utils";

const IndexPage = ({ events }) => (
  <Layout title="ACM Bilkent" description="ACM Bilkent Giriş Sayfası">
    <Hero />
    <Events
      description="Bu dönem gerçekleştireceğimiz etkinliklerin sadece birkaçı. Daha
            fazlası için etkinlikler sayfasını ziyaret etmeyi unutma!"
      showButton={true}
      events={events.slice(0, 3)}
    />
    <Contact />
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

export default IndexPage;
