import Layout from "../components/layout";
import Team from "../components/team";

import { fetchQuery } from "../lib/utils";

const TeamPage = ({ members }) => (
  <Layout
    title="Yönetim Kurulumuz"
    description="ACM Bilkent Yönetim Kurulu Sayfası"
  >
    <Team members={members} />
  </Layout>
);

export const getStaticProps = async () => {
  const members = await fetchQuery("members");

  // Fix a very very weird bug
  let member = members.shift();
  members.push(member);

  return {
    props: {
      members,
    },
    revalidate: 1,
  };
};

export default TeamPage;
