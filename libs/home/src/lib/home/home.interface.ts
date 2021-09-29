export interface CenterContent {
  title: string;
  brand?: string;
  intro?: Intro;
  sections?: Section[];
}

interface Intro {
  title?: string;
  text?: string;
  background?: { url?: string };
  buttons?: Button[];
}

interface Section {
  buttons?: Button[];
  content?: string;
  heading?: string;
  subtitle?: string;
  image?: { url?: string };
}

interface Button {
  href?: string;
  title?: string;
}
