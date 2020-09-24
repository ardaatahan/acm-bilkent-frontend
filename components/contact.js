import Position from "../public/position.svg";
import Phone from "../public/phone.svg";
import Email from "../public/email.svg";

const Contact = () => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 pt-24 pb-12 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
            Bize Ulaşın
          </h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            Her türlü soru, şikayet ve tavsiyelerini bizimle paylaşabilirsin!
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Position className="svg" />
              </div>
              <h2 className="text-white text-lg title-font font-medium">
                Adres
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Üniversiteler, 06800 Çankaya/Ankara
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Phone className="svg" />
              </div>
              <h2 className="text-white text-lg title-font font-medium">
                Telefon
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">+90 531 591 53 56</p>
              <p className="leading-relaxed text-base">+90 534 360 03 99</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Email className="svg" />
              </div>
              <h2 className="text-white text-lg title-font font-medium">
                Email
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">example@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
