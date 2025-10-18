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
});
