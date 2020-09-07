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
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Position className="svg" />
              </div>
              <h2 class="text-white text-lg title-font font-medium">Adres</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Üniversiteler, 06800 Çankaya/Ankara
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Phone className="svg" />
              </div>
              <h2 class="text-white text-lg title-font font-medium">Telefon</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">+90 507 974 49 11</p>
              <p class="leading-relaxed text-base">+90 535 308 22 67</p>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <Email className="svg" />
              </div>
              <h2 class="text-white text-lg title-font font-medium">Email</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
