import { baseUrl } from "../lib/utils";

const Team = ({ members }) => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 pt-24 pb-12 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
            Yönetim Kurulu Üyelerimiz
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {members.map((member) => (
          <div className="p-4 lg:w-1/4 md:w-1/2" key={member.id}>
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 w-full h-56 object-cover object-center mb-4"
                src={`${baseUrl}${member.photo.url}`}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  {member.name}
                </h2>
                <h3 className="text-gray-600 mb-3">{member.role}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
