import '../styles/banner.css'

const Banner = () => {
    return(
        <div className='banner'>
            <div className='banner-contenido'>
                <div className="banner-titulo">
                    <p>Hola, </p>
                    <ul>
                        <li> ...</li>
                        <li>como puedo ayudarte</li>
                        <li>soy Luigi Santana</li>
                    </ul>
                </div>
                <div className="banner-contenido">
                    <a className="banner-contenido__contact">contáctame</a>
                    <div className="banner-contenido__content" >¡Hola! Soy Luigi, un apasionado desarrollador web con experiencia en la creación de soluciones digitales innovadoras. Mi objetivo principal es combinar la creatividad con las habilidades técnicas para proporcionar experiencias en línea excepcionales.
                        </div>
                </div>
            </div>
            <div className='banner-gato'>
                <div className='banner-gato__gato'>
                    <svg className='gatito' width="537" height="352" viewBox="0 0 537 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_26_26)">
                    <path d="M329.61 212.82C337.59 213.62 347.97 211.22 346.37 204.84C344.77 198.46 306.47 186.48 294.49 184.09C296.09 174.51 279.33 148.97 279.33 148.97C265.76 140.99 291.3 97.89 291.3 97.89C291.3 97.89 300.88 73.95 288.91 70.76C276.94 67.57 248.21 109.07 248.21 109.07C241.03 125.03 239.53 118.67 239.53 118.67C231.65 109.91 203.52 109.07 196.33 107.48C189.15 105.88 207.5 98.7 207.5 98.7C207.5 98.7 245.81 94.71 238.63 82.77C231.45 70.83 196.33 81.14 196.33 81.14C217.08 73.96 210.7 66.77 210.7 66.77C197.13 59.59 157.23 105.88 157.23 105.88C152.44 101.09 103.76 123.44 103.76 123.44C84.61 123.44 82.21 110.67 82.21 110.67C61.46 80.34 43.1 87.53 43.1 87.53C23.95 118.66 46.29 171.33 46.29 171.33C39.91 188.89 41.5 208.84 41.5 208.84C5.59 210.44 0 223.21 0 223.21C3.99 235.98 24.74 237.58 24.74 237.58C7.98 245.56 3.99 263.92 3.99 263.92C3.19 275.09 23.94 279.08 23.94 279.08C118.91 291.05 113.33 276.69 113.33 276.69C115.72 265.52 55.07 260.73 55.07 260.73C124.5 255.94 116.59 283.7 116.59 283.7C139.8 289.11 231.45 285.47 233.84 279.09C231.45 258.34 269.75 251.96 269.75 251.96C269.75 251.96 230.64 268.72 240.32 279.09C249.99 289.47 279.33 279.09 279.33 279.09C340.78 275.1 349.53 237.59 318.47 216.04C320.1 212.85 331.21 216.04 331.21 216.04C331.21 216.04 321.63 212.05 329.61 212.85V212.82ZM144.45 213.62C144.45 213.62 122.9 227.99 88.58 219.21C88.58 219.21 86.19 217.61 89.38 216.82C89.38 216.82 122.1 223.2 142.05 211.23C142.05 211.23 146.04 210.43 144.44 213.62H144.45ZM190.74 252.73C181.16 253.53 174.78 243.15 174.78 243.95C174.78 244.75 170.79 252.73 163.61 253.53C156.43 254.33 158.82 250.34 158.82 250.34C169.2 250.34 170.79 245.55 172.39 240.76C173.99 235.97 171.59 228.79 171.59 228.79C171.59 228.79 171.59 227.99 167.09 225.02C162.59 222.05 167.09 220.01 167.09 220.01H182.76C185.95 220.01 185.15 222.4 185.15 222.4C183.55 227.19 175.57 227.99 175.57 227.99C177.17 233.58 177.17 240.76 177.17 240.76C181.16 248.74 189.14 248.74 190.74 250.4C192.34 252.06 190.74 252.73 190.74 252.73ZM256.98 207.24C221.07 220.01 205.9 210.43 203.51 208.84C201.12 207.24 203.03 207.24 203.03 207.24C242.46 216.02 252.99 205.64 256.18 205.64C259.37 205.64 256.98 207.24 256.98 207.24Z" fill="#74D2D0"/>
                    <path d="M105 120C105 120 140 97 158 101C158 101 181.07 66.41 204 62C204 62 220.94 58.24 213 75C213 75 251 71 242 89C237 95 225 103 202 105C202 105 239.04 108.36 241 115C241 115 261 79 283 67C283 67 301.08 62.3 300 84C298.92 105.7 276 134 284 147C284 147 302.01 162.71 300 180C300 180 344.74 189.4 351.25 200.11C351.25 200.11 359.33 215.03 327 219C327 219 355 240 328 268C328 268 352.26 275.36 366.92 270.87C366.92 270.87 343.69 258.76 360.87 235.67C360.87 235.67 369.69 224.93 390.63 222.72C390.63 222.72 355.01 154.9 429.16 144.93C429.16 144.93 364.75 159.97 396.98 225.09C396.98 225.09 362.48 235.07 363.21 246.32C363.21 246.32 355.33 270.54 383.01 272.88C410.69 275.22 443.06 265.07 455.1 246.32C467.14 227.58 476.77 215.94 479.89 188.68C479.89 188.68 546.28 276.16 392.92 300.83C392.92 300.83 321.23 298.09 314.79 324.58C308.36 351.07 342.93 355.32 383.86 349.22C424.79 343.12 500.65 329.01 530.64 258.45C560.63 187.88 474.37 140.09 474.37 140.09C474.37 140.09 467.77 102.01 448.93 84.08C448.93 84.08 451.84 80.83 461.25 84.08C461.25 84.08 449.1 70.55 432.54 70.12C432.54 70.12 442.77 67.03 453.63 70.12C453.63 70.12 443.84 60.88 421.08 61.75C421.08 61.75 391.27 13.23 260.72 15.88C260.72 15.88 260.72 11.47 269.54 8.82C269.54 8.82 251.86 8.82 246.14 15C246.14 15 249.25 5.29 261.6 0C261.6 0 247.16 4.35 238.95 15.41C238.95 15.41 167.61 43.26 104.99 120H105Z" fill="#74D2D0"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_26">
                    <rect width="536.98" height="351.66" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </div>
                <div className='banner-gato__bola'>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;