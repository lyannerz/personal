import BaldieImg from '@/assets/baldie.png';
import CorgiImg from '@/assets/corgi.png';
import DoodleImg from '@/assets/doodle.png';
import GieImg from '@/assets/gie.png';
import LyannaImg from '@/assets/lyanna.png';
import SmileImg from '@/assets/smile.png';
import VinegarImg from '@/assets/vinegar.png';

// MODIFY HERE FOR PORTFOLIO ENTRIES
export const PORTFOLIO_ENTRIES = [
  { imgSrc: CorgiImg, class: 'corgi', entry: 'corgi' },
  { imgSrc: SmileImg, class: 'smile', entry: 'techforgood' },
  { imgSrc: VinegarImg, class: 'vinegar', entry: 'vinegar' },
  { imgSrc: LyannaImg, class: 'lyanna', entry: 'lyanna' },
];

export const SPECIAL_ENTRIES = {
  'santacruz': { entry: 'santacruz'},
};

export const ALL_ENTRIES = [
  ...PORTFOLIO_ENTRIES,
  ...Object.values(SPECIAL_ENTRIES),
];

// MODIFY HERE FOR ABOUT IMGS
export const ABOUT_IMGS = [
  { imgSrc: GieImg, class: 'gie', entry: 'gie' },
  { imgSrc: BaldieImg, class: 'baldie', entry: 'baldie' },
  { imgSrc: DoodleImg, class: 'doodle', entry: 'doodle' },
];
