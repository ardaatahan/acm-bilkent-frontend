import Layout from "../components/layout";
import Hero from "../components/hero";
import Events from "../components/events";
import Contact from "../components/contact";

import { fetchQuery } from "../lib/utils";

const IndexPage = ({ events }) => (
  <Layout
    title="ACM Bilkent"
    description="ACM (Association for Computing Machinery) Bilkent, bilgisayar bilimcilerin en 
    eski, en yaygın ve en etkin sivil toplum örgütü olan ACM’ in Bilkent Üniversitesi’ndeki 
    öğrenci koludur. ACM Bilkent, 2004 yılından bu yana Bilkent Üniversitesi’nde sosyal, kariyer 
    ve teknik alanlarda etkinlikler yaparak faaliyetlerini sürdürmektedir. ACM Student Chapter’a 
    dahil olması sayesinde uluslararası alanda kendinize bir kimlik edinme ve bu sayede birçok 
    köklü kuruluş ile tanışma fırsatı sağlar."
  >
    <Hero />
    <Events
      description="Bu dönem gerçekleştireceğimiz etkinliklerin sadece birkaçı. Daha
            fazlası için etkinlikler sayfasını ziyaret etmeyi unutma!"
      showButton={true}
      events={events.slice(3, 6)}
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
