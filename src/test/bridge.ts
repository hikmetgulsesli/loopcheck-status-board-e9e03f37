import type { LoopcheckActions, LoopcheckStatusBoardState } from '../features/loopcheck-status-board/loopcheck-status-board.types';

export interface AppBridge {
  state: LoopcheckStatusBoardState;
  actions: LoopcheckActions;
}

declare global {
  interface Window {
    app?: AppBridge;
  }
}
