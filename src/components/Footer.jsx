import { Facebook, Instagram, InstagramIcon, LucideInstagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#333232] flex flex-wrap text-white px-2 py-16 gap-x-16 gap-y-6 md:justify-center">
      <div className="max-w-44">
        <h1 className="font-bold">April</h1>
        <p className="hidden text-xs md:inline">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          neque ea rerum sunt id distinctio, deleniti ut incidunt ipsa quasi,
        </p>
      </div>
      <div>
        <h1 className="font-bold">Category</h1>
        <ul className="text-xs">
          <li>Woman</li>
          <li>Men</li>
          <li>Bags</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Information</h1>
        <ul className="text-xs">
          <li>About us</li>
          <li>Privacy & Policy</li>
          <li>Terms of use</li>
          <li>Delivery & returns</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Other</h1>
        <ul className="text-xs">
          <li>FAQ</li>
          <li>Customer Service</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Contacts</h1>
        <ul className="text-xs">
          <li>+54 3875850811</li>
          <li>mauroagustin.lopez.456@gmail.com</li>
          <li>Mon. - Fri. 9AM-6PM</li>
        </ul>

        <ul className="flex gap-1">
          <li>
            <Instagram  className="w-6 h-6"/>
          </li>
          <li>
            <Facebook className="w-6 h-6"/>
          </li>
          <li>
            <Twitter className="w-6 h-6" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
