





  import { Phone, Mail, MapPin, Linkedin, Youtube, Facebook, Instagram, MessageCircle } from "lucide-react"
import Container from "./Container";


  interface FooterProps {
  isVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <Container>
          <div className="absolute inset-0 z-0">
        <img
          src="/images/footer/footer4.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* AKADEMİYA */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">AKADEMİYA</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Təhsil sistemi
                </a>
              </li>
              <li>
               
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Partnyorlar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Təlimçilərimiz
                </a>
              </li>
            </ul>
          </div>

          {/* TƏDRİS SAHƏLƏRI */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">TƏDRİS SAHƏLƏRI</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Proqramlaşdırma
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  IT & Kibertəhlükəsizlik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Dizayn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Rəqəmsal Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Digər Sahələr
                </a>
              </li>
            </ul>
          </div>

          {/* KORPORATİV */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">KORPORATİV</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Korporativ təlimlər
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MIT Academy ilə əməkdaşlıq
                </a>
              </li>
            </ul>
          </div>

          {/* DİGƏR */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">DİGƏR</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MİT Academy Kids
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Vakansiyalar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bloq
                </a>
              </li>
            </ul>
          </div>

          {/* ƏLAQƏ */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">ƏLAQƏ</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                +994 51 888 87 47
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                info@mitacademy.edu.az

              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>28 May, Azərbaycan Dillər Universiteti ilə üzbəüz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              Copyright © 2025 MIT Academy Developed by RB7 Studio
            </p>

            <div className="flex space-x-4">
              <button className="button flex-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="22px" className="btn-svg" viewBox="0 0 24 24">
      <g strokeWidth={0} id="SVGRepo_bgCarrier"></g>
      <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill="#fff" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" clipRule="evenodd" fillRule="evenodd"></path>
        <path fill="#fff" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
        <path fill="#fff" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" clipRule="evenodd" fillRule="evenodd"></path>
      </g>
    </svg>
  </button>

  {/* Twitter Button */}
  <button className="button flex-center">
    <svg width="22" height="22" viewBox="0 0 512 512" className="btn-svg" id="icons" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
    </svg>
  </button>

  {/* Github Button */}
  <button className="button flex-center">
    <svg viewBox="0 0 20 20" width="22px" className="btn-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" stroke="#fff">
      <g id="SVGRepo_bgCarrier" 	strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>github [#fff142]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth
="1" fill="none" fillRule	="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fff">
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#fff142]"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </button>

  {/* YouTube Button */}
  <button className="button flex-center">
    <svg stroke="#fff" fill="#fff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" className="btn-svg" width="22px" viewBox="0 -3 20 20">
      <g strokeWidth
="0" id="SVGRepo_bgCarrier"></g>
      <g strokeLinejoin	="round" strokeLinecap
="round" id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        <title>youtube [#fff168]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g fillRule	="evenodd" fill="none" strokeWidth
="1" stroke="none" id="Page-1">
          <g fill="#fff" transform="translate(-300.000000, -7442.000000)" id="Dribbble-Light-Preview">
            <g transform="translate(56.000000, 160.000000)" id="icons">
              <path id="youtube-[#fff168]" d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </button>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </footer>
  )
}

export default Footer;
