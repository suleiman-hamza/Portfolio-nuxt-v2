// types/gsap.d.ts
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

declare module "#app" {
  interface NuxtApp {
    $gsap: typeof GsapType;
    $ScrollTrigger: typeof ScrollTriggerType;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $gsap: typeof GsapType;
    $ScrollTrigger: typeof ScrollTriggerType;
  }
}

export {};
