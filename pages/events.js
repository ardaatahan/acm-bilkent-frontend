import Layout from "../components/layout";
import Events from "../components/events";

const EventsPage = () => (
  <Layout
    title="Etkinliklerimiz"
    description="ACM Bilkent Etkinliklerimiz Sayfası"
  >
    <Events description="" showButton={false} />
  </Layout>
);

export default EventsPage;
