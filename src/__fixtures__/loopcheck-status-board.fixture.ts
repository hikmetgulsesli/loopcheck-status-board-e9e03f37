import type { LoopcheckItem } from '../features/loopcheck-status-board/loopcheck-status-board.types';

export const loopcheckFixtureItems: LoopcheckItem[] = [
  { id: 'lc-1', name: 'LoopCheck Node A', status: 'ready', checked: true },
  { id: 'lc-2', name: 'LoopCheck Node B', status: 'warning', checked: false },
  { id: 'lc-3', name: 'LoopCheck Node C', status: 'ready', checked: false },
];
