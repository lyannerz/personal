import BaldieImg from '@/assets/baldie.png';
import DoodleImg from '@/assets/doodle.png';
import GieImg from '@/assets/gie.png';
import LyannaImg from '@/assets/lyanna.png';
import VinegarImg from '@/assets/vinegar.png';
import BirdeyeImg from '@/assets/birdeye.svg';

// MODIFY HERE FOR PORTFOLIO ENTRIES
export const PORTFOLIO_ENTRIES = [
  { imgSrc: BirdeyeImg, class: 'birdeye', entry: 'birdeye' },
  { imgSrc: LyannaImg, class: 'lyanna', entry: 'lyanna' },
  { imgSrc: VinegarImg, class: 'vinegar', entry: 'vinegar' },
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

export const BIRDEYE_PASSWORD = 'YmlyZGV5ZQ==';
