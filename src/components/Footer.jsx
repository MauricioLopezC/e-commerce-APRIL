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

        <ul className="flex">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokewidth={1}
              strokelinecap="round"
              strokelinejoin="round"
              classname="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokewidth={1}
              strokelinecap="round"
              strokelinejoin="round"
              classname="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokewidth={1}
              strokelinecap="round"
              strokelinejoin="round"
              classname="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
