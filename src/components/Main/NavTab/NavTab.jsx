import './NavTab.css'

export default function NavTab() {

  return (
    <section className="navTab">
      <ul className="navTab__list">
        <li className="navTab__line"><a href='#aboutProject' className='navTab__link'>О проекте</a></li>
        <li className="navTab__line"><a href='#techs' className='navTab__link'>Технологии</a></li>
        <li className="navTab__line"><a href='#aboutMe' className='navTab__link'>Студент</a></li>
      </ul>
    </section>
  )
}