import { DocumentData } from 'firebase/firestore';
import { atom } from 'recoil';
import { Movie } from '../../typing';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const movieState = atom < Movie | DocumentData | ({
  key: 'movieState',
  default: null,
}) < null;
