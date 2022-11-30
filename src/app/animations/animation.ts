import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

// animation.ts
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':leave',
      [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
      { optional: true }
    ),
  ]),
]);
