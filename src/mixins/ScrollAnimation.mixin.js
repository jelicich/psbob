import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { toggleBodyClass, isMobile } from '@/helpers/device-helper';

const gsapTimeline = gsap.timeline();

// Private
function _to(el, options) {
  if (isMobile?.() && !options.runInMobile) return;
  gsapTimeline.to(el, options.gsapOptions);
  gsapTimeline.progress(1).progress(0);
}

function _from(el, options) {
  if (this.isMobile?.() && !options.runInMobile) return;
  gsapTimeline.from(el, options.gsapOptions);
  gsapTimeline.progress(1).progress(0);
}

// Helpers
function _vh(coef) {
  return window.innerHeight * (coef / 100);
}

function _vw(coef) {
  return window.innerWidth * (coef / 100);
}

// Determine if an element is in the visible viewport
function _isInViewport(elementSelector) {
  const element = document.querySelector(elementSelector);
  const { top, bottom } = element.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}

export default {
  
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  },

  data() {
    return {
      timeline: {
        to: _to.bind(this),
        from: _from.bind(this),
      },
      helpers: {
        vh: _vh,
        vw: _vw,
        isInViewport: _isInViewport,
      },
      gsap
    }
  },

  methods: {
    toggleBodyClass
  }
}
