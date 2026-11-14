import { useState } from 'react'

function App() {
  const [lang, setLang] = useState('tj')

  const TEXT = {
    tj: {
      home: 'Асосӣ', about: 'Дар бораи ман', skills: 'Малакаҳо', projects: 'Лоиҳаҳо', contact: 'Тамос',
      job: 'Frontend Developer',
      desc: 'Ман сайтҳои тез, зебо ва барои телефон қулай месозам. Аз идея то сайти тайёр.',
      aboutTitle: 'Дар бораи ман',
      aboutText: 'Салом! Ман Мақсуд ҳастам, хатмкардаи Донишгоҳи давлатии Хуҷанд ба номи академик Бобоҷон Ғафуров ихтисоси Амнияти компютери(2021-2025).Мехоҳам программисти касбӣ шавам.',
      tech: 'Технология', proj: 'Лоиҳа', passion: 'Шавқ',
      skillsTitle: 'Малакаҳои ман', projTitle: 'Лоиҳаҳои ман',
      p1Title: 'Сайти шахсӣ', p1Desc: 'Ҳамин сайт — бо React сохта шудааст. Тез, зебо ва барои телефон.', view: 'Дидан →',
      p2Title: 'Дӯкони онлайн', p2Desc: 'Лоиҳаи навбатӣ — дӯкони зебо барои телефон ва компютер.', soon: 'Ба наздикӣ →',
      contactTitle: 'Бо ман тамос гир!',
      contactDesc: 'Барои лоиҳа, кор ё савол — нависед, зуд ҷавоб медиҳам.',
      footer: '© 2026 Kalonov Maqsud — Хуҷанд'
    },
    ru: {
      home: 'Главная', about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты',
      job: 'Frontend Developer',
      desc: 'Я создаю быстрые, красивые и удобные сайты для телефона. От идеи до готового сайта.',
      aboutTitle: 'Обо мне',
      aboutText: 'Привет! Я Максуд, выпускник Худжандского государственного университета имени академика Бободжона Гафурова, специальность Компьютерная безопасность (2021-2025). Хочу стать профессиональным программистом.',
      tech: 'Технологии', proj: 'Проекта', passion: 'Страсть',
      skillsTitle: 'Мои навыки', projTitle: 'Мои проекты',
      p1Title: 'Личный сайт', p1Desc: 'Этот сайт — создан на React. Быстрый, красивый и для телефона.', view: 'Смотреть →',
      p2Title: 'Интернет-магазин', p2Desc: 'Следующий проект — красивый магазин для телефона и компьютера.', soon: 'Скоро →',
      contactTitle: 'Свяжись со мной!',
      contactDesc: 'Для проекта, работы или вопроса — напишите, быстро отвечу.',
      footer: '© 2026 Kalonov Maqsud — Худжанд'
    },
    en: {
      home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact',
      job: 'Frontend Developer',
      desc: 'I build fast, beautiful and mobile-friendly websites. From idea to finished site.',
      aboutTitle: 'About Me',
      aboutText: 'Hello! I am Maqsud, graduate of Khujand State University named after academician Bobojon Gafurov, specialty Computer Security (2021-2025). I want to become a professional programmer.',
      tech: 'Technologies', proj: 'Projects', passion: 'Passion',
      skillsTitle: 'My Skills', projTitle: 'My Projects',
      p1Title: 'Personal Website', p1Desc: 'This site — built with React. Fast, beautiful and mobile-friendly.', view: 'View →',
      p2Title: 'Online Shop', p2Desc: 'Next project — a beautiful shop for phone and computer.', soon: 'Coming soon →',
      contactTitle: 'Contact Me!',
      contactDesc: 'For project, work or question — write me, I will answer fast.',
      footer: '© 2026 Kalonov Maqsud — Khujand'
    }
  }

  const t = TEXT[lang]

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: '#050816', color: 'white', minHeight: '100vh', margin: 0, overflowX: 'hidden' }}>

  
<div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(5,8,22,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
  
  
  <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6px 16px 12px', overflowX: 'auto', scrollbarWidth: 'none' }}>
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', minWidth: 'max-content', margin: '0 auto', background: '#0f172a', padding: '6px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', width: 'fit-content', maxWidth: '100%' }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none', padding: '9px 14px', fontSize: '15px', fontWeight: '600', background: '#1e293b', borderRadius: '12px', whiteSpace: 'nowrap' }}>{t.home}</a>
      <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', padding: '9px 14px', fontSize: '15px', fontWeight: '600', borderRadius: '12px', whiteSpace: 'nowrap' }}>{t.about}</a>
      <a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none', padding: '9px 14px', fontSize: '15px', fontWeight: '600', borderRadius: '12px', whiteSpace: 'nowrap' }}>{t.skills}</a>
      <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none', padding: '9px 14px', fontSize: '15px', fontWeight: '600', borderRadius: '12px', whiteSpace: 'nowrap' }}>{t.projects}</a>
     <br />
      <button  onClick={() => setLang('tj')} style={{ background: lang === 'tj' ? '#00e5ff' : '#1e293b', border: lang === 'tj' ? '2px solid #00e5ff' : '1px solid rgba(255,255,255,0.15)', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🇹🇯</button>
    <button onClick={() => setLang('ru')} style={{ background: lang === 'ru' ? '#00e5ff' : '#1e293b', border: lang === 'ru' ? '2px solid #00e5ff' : '1px solid rgba(255,255,255,0.15)', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🇷🇺</button>
    <button onClick={() => setLang('en')} style={{ background: lang === 'en' ? '#00e5ff' : '#1e293b', border: lang === 'en' ? '2px solid #00e5ff' : '1px solid rgba(255,255,255,0.15)', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🇺🇸</button>
  

    </div>
  </div>
</div>
      <div id="home" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 18px 50px', textAlign: 'center' }}>
      <img src={import.meta.env.BASE_URL + "maks.jpg"} alt="Maqsud" style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #00e5ff', boxShadow: '0 0 40px rgba(0,229,255,0.4)' }} />  <h1 style={{ fontSize: 'clamp(36px, 9vw, 58px)', margin: '16px 0 5px', lineHeight: '1.1', fontWeight: '900', letterSpacing: '-1px' }}>Kalonov <span style={{ background: 'linear-gradient(90deg,#00e5ff,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Maqsud</span></h1>
        <p style={{ fontSize: 'clamp(16px, 4vw, 22px)', color: '#94a3b8', margin: '5px 0', fontWeight: '600' }}>{t.job}</p>
        <p style={{ maxWidth: '600px', margin: '15px auto', lineHeight: '1.7', color: '#cbd5e1', fontSize: '15px' }}>{t.desc}</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a href="https://t.me/kalonov_2309" target="_blank" rel="noreferrer" style={{ background: 'linear-gradient(90deg,#00e5ff,#7c3aed)', color: 'white', padding: '13px 26px', borderRadius: '14px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', flex: '1', maxWidth: '220px', textAlign: 'center' }}>Telegram ✈️</a>
          <a href="https://instagram.com/_kalonov_2309" target="_blank" rel="noreferrer" style={{ background: '#1e293b', color: 'white', padding: '13px 26px', borderRadius: '14px', textDecoration: 'none', fontSize: '15px', border: '1px solid #334155', flex: '1', maxWidth: '220px', textAlign: 'center' }}>Instagram 📸</a>
          <a href="/cv.pdf" download style={{ background: 'white', color: 'black', padding: '12px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>
  📄 CV
</a>
        </div>
      </div>

      
      <div id="about" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 18px' }}>
        <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '30px 22px', textAlign: 'center' }}>
          <h2 style={{ marginTop: 0, fontSize: '26px', fontWeight: '800' }}>{t.aboutTitle}</h2>
          <p style={{ lineHeight: '1.8', color: '#cbd5e1', fontSize: '15px' }}>{t.aboutText}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
            <div style={{ background: '#1e293b', padding: '16px', borderRadius: '16px', minWidth: '100px', flex: '1', maxWidth: '160px' }}><b style={{ fontSize: '24px', color: '#00e5ff' }}>6+</b><br /><span style={{ fontSize: '12px', opacity: 0.7 }}>{t.tech}</span></div>
            <div style={{ background: '#1e293b', padding: '16px', borderRadius: '16px', minWidth: '100px', flex: '1', maxWidth: '160px' }}><b style={{ fontSize: '24px', color: '#a855f7' }}>3+</b><br /><span style={{ fontSize: '12px', opacity: 0.7 }}>{t.proj}</span></div>
            <div style={{ background: '#1e293b', padding: '16px', borderRadius: '16px', minWidth: '100px', flex: '1', maxWidth: '160px' }}><b style={{ fontSize: '24px', color: '#22c55e' }}>100%</b><br /><span style={{ fontSize: '12px', opacity: 0.7 }}>{t.passion}</span></div>
          </div>
        </div>
      </div>

      
      <div id="skills" style={{ maxWidth: '900px', margin: '0 auto', padding: '35px 18px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '800' }}>{t.skillsTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '20px' }}>
          {['HTML','CSS','JavaScript','React','Node.js','Android'].map(s => (
            <a key={s} href="https://t.me/kalonov_2309" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px 10px', borderRadius: '18px', textAlign: 'center', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>💻<br />{s}</a>
          ))}
        </div>
      </div>

            <div id="projects" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 18px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '800' }}>{t.projTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginTop: '20px' }}>
          <a href="https://github.com/Kalonov2309" target="_blank" rel="noreferrer" style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '24px', textDecoration: 'none', color: 'white', display: 'block' }}>
            <div style={{ fontSize: '32px' }}>🌐</div><h3 style={{ margin: '10px 0 5px' }}>{t.p1Title}</h3><p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>{t.p1Desc}</p><span style={{ color: '#00e5ff', fontSize: '14px' }}>{t.view}</span>
          </a>
          <a href="https://github.com/Kalonov2309" target="_blank" rel="noreferrer" style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '24px', textDecoration: 'none', color: 'white', display: 'block' }}>
            <div style={{ fontSize: '32px' }}>🛒</div><h3 style={{ margin: '10px 0 5px' }}>{t.p2Title}</h3><p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>{t.p2Desc}</p><span style={{ color: '#a855f7', fontSize: '14px' }}>{t.soon}</span>
          </a>
        </div>
      </div>

      
      <div id="contact" style={{ maxWidth: '900px', margin: '35px auto', padding: '0 18px' }}>
        <div style={{ background: 'linear-gradient(135deg,#0f172a,#2e1065)', borderRadius: '24px', padding: '32px 20px', textAlign: 'center' }}>
          <h2 style={{ marginTop: 0 }}>{t.contactTitle}</h2>
          <p style={{ color: '#cbd5e1' }}>{t.contactDesc}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <a href="https://t.me/kalonov_2309" target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '12px 22px', borderRadius: '14px', textDecoration: 'none', fontWeight: 'bold', flex: '1', maxWidth: '200px', textAlign: 'center' }}>Telegram</a>
            <a href="https://instagram.com/_kalonov_2309" target="_blank" rel="noreferrer" style={{ background: 'transparent', color: 'white', padding: '12px 22px', borderRadius: '14px', textDecoration: 'none', border: '1px solid white', flex: '1', maxWidth: '200px', textAlign: 'center' }}>Instagram</a>
            <a href="/cv.pdf" download style={{ background: 'white', color: 'black', padding: '12px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>
  📄 CV
</a>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', padding: '20px', opacity: 0.5, fontSize: '12px' }}>{t.footer}</p>
    </div>
  )
}

export default App