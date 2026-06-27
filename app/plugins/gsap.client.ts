// plugins/gsap.client.ts
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
      MotionPathPlugin,
    },
  };
});
