import './style.css'
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const words = [
  '✅🔒 НАДЕЖНАЯ КОМПАНИЯ',
  '⭐🛠️ КАЧЕСТВЕННЫЙ СЕРВИС',
  '🏡🔑 ОТДЕЛКА ПОД КЛЮЧ',
  '📄✍️ РАБОТА ПО ДОГОВОРУ',
  '🛡️✔️ ГАРАНТИЯ НА УСЛУГИ',
  '💳🗓️ ПОЭТАПНАЯ ОПЛАТА',
];

gsap.to('#cursor', {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  ease: 'power2.inOut',
})

const tlMain = gsap.timeline({ repeat: -1 })

words.forEach((word) => {
  const tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
  tlText.to('.about__dynamic', { duration: 1, text: word, })
  tlMain.add(tlText);
})