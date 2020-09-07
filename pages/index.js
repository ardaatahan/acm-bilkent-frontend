import Layout from "../components/layout";
import Hero from "../components/hero";
import Events from "../components/events";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout title="ACM Bilkent" description="ACM Bilkent Giriş Sayfası">
    <Hero />
    <Events />
    <Contact />
  </Layout>
);

export default IndexPage;
