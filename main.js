// 简单的 DOM 操作示例：导航切换 & 表单提交处理

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    mainNav.classList.toggle('open');
  });

  // 表单示例：阻止默认提交，做简单校验并显示状态
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = '请完整填写表单所有字段。';
      formStatus.style.color = 'crimson';
      return;
    }

    // 这里可以改为实际的 fetch 请求到后端 API
    formStatus.textContent = '正在发送...';
    formStatus.style.color = '#333';

    setTimeout(function () {
      formStatus.textContent = '已发送！感谢你的信息。';
      formStatus.style.color = 'green';
      contactForm.reset();
    }, 800);
  });

  // 额外 DOM 示例：动态插入一条欢迎消息
  const hero = document.querySelector('.hero .container');
  if (hero) {
    const p = document.createElement('p');
    p.textContent = '（这是通过 JavaScript 动态添加的欢迎信息）';
    p.style.opacity = '0.95';
    hero.appendChild(p);
  }
  // -- page transitions: remove preload class unless user prefers reduced motion
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduce) {
    // allow CSS to animate in
    window.setTimeout(() => document.body.classList.remove('preload'), 60);
  } else {
    document.body.classList.remove('preload');
  }

  // fade-out on internal link click (simple)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = a.getAttribute('href');
      if (target && target.startsWith('#')) {
        // let the navigation happen but animate
        if (!prefersReduce) {
          e.preventDefault();
          document.body.classList.add('preload');
          setTimeout(() => { window.location.hash = target; document.body.classList.remove('preload'); }, 260);
        }
      }
    });
  });

  // Theme toggle: persist in localStorage
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme){
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('pref-theme', theme);
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
  const savedTheme = localStorage.getItem('pref-theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);
  themeToggle.addEventListener('click', () => applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark'));

  // Simple i18n: map of translations and data-i18n updates
  const translations = {
    'zh-CN': {
      'logo': '陆世明的作品集',
      'nav.home': '首页', 'nav.projects': '项目', 'nav.about': '关于', 'nav.contact': '联系',
      'hero.title': '你好，我是开发者', 'hero.lead': '这是一个简单的响应式作品集示例页面。', 'hero.cta': '查看我的作品',
      'projects.title': '精选项目', 'project1.title': '项目一', 'project1.desc': '项目一的简短描述。',
      'project2.title': '项目二', 'project2.desc': '项目二的简短描述。', 'project3.title': '项目三', 'project3.desc': '项目三的简短描述。',
      'about.title': '关于我', 'about.lead': '一段关于作者的简短介绍，技能、背景等。',
      'contact.title': '联系我', 'contact.name.label': '姓名', 'contact.email.label': '邮箱', 'contact.message.label': '信息', 'contact.send': '发送',
      'contact.direct': '直接联系', 'contact.email': '邮箱:', 'contact.phone': '电话:', 'contact.address': '地址:',
      'map.title': '位置', 'map.open': '在地图中打开'
    },
    'en': {
      'logo': 'Lushiming — Portfolio',
      'nav.home': 'Home', 'nav.projects': 'Projects', 'nav.about': 'About', 'nav.contact': 'Contact',
      'hero.title': 'Hi, I am a Developer', 'hero.lead': 'A simple responsive portfolio example.', 'hero.cta': 'View my work',
      'projects.title': 'Featured Projects', 'project1.title': 'Project One', 'project1.desc': 'Short description of project one.',
      'project2.title': 'Project Two', 'project2.desc': 'Short description of project two.', 'project3.title': 'Project Three', 'project3.desc': 'Short description of project three.',
      'about.title': 'About Me', 'about.lead': 'A short introduction about the author, skills and background.',
      'contact.title': 'Contact', 'contact.name.label': 'Name', 'contact.email.label': 'Email', 'contact.message.label': 'Message', 'contact.send': 'Send',
      'contact.direct': 'Contact Directly', 'contact.email': 'Email:', 'contact.phone': 'Phone:', 'contact.address': 'Address:',
      'map.title': 'Location', 'map.open': 'Open in maps'
    }
  };

  const langSelect = document.getElementById('langSelect');
  function applyTranslations(locale){
    const map = translations[locale] || translations['zh-CN'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key]) el.textContent = map[key];
    });
    localStorage.setItem('pref-locale', locale);
  }
  const savedLocale = localStorage.getItem('pref-locale') || navigator.language || 'zh-CN';
  langSelect.value = savedLocale.startsWith('en') ? 'en' : 'zh-CN';
  applyTranslations(langSelect.value);
  langSelect.addEventListener('change', () => applyTranslations(langSelect.value));
});
