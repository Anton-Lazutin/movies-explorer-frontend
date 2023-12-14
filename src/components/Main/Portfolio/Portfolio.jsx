import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className='portfolio page__portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <nav className="portfolio__nav">
          <ul className='portfolio__lists'>
            <li className='portfolio__line'>
              <a 
                href='https://github.com/Anton-Lazutin/how-to-learn' 
                target='_blank' 
                className='portfolio__link' 
                rel="noopener noreferrer"
              >
                <p className='portfolio__subtitle'>Статичный сайт</p>
                <button type='button' className='portfolio__button'></button>
              </a>
            </li>
            <li className='portfolio__line'>
              <a
                href='https://github.com/Anton-Lazutin/russian-travel' 
                target='_blank' 
                className='portfolio__link' 
                rel="noopener noreferrer"
              >
                <p className='portfolio__subtitle'>Адаптивный сайт</p>
                <button type='button' className='portfolio__button'></button>
              </a>
            </li>
            <li className='portfolio__line'>
              <a
                href='https://github.com/Anton-Lazutin/react-mesto-auth' 
                target='_blank' 
                className='portfolio__link portfolio__link_type_last' 
                rel="noopener noreferrer"
              >
                <p className='portfolio__subtitle'>Одностраничное приложение</p>
                <button type='button' className='portfolio__button'></button>
              </a>
            </li>
          </ul>
        </nav>
    </section>
  )
}