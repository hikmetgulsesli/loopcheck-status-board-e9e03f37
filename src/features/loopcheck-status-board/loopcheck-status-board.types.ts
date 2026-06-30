export interface LoopcheckItem {
  id: string;
  name: string;
  status: 'ready' | 'warning';
  checked: boolean;
}

export interface LoopcheckStatusBoardState {
  activeScreen: string;
  selectedRecord: LoopcheckItem | null;
  counts: { ready: number; warning: number; total: number };
  storageStatus: 'idle' | 'loading' | 'ready' | 'error';
  lastError: string | null;
  activePanel: string | null;
  items: LoopcheckItem[];
}

export interface LoopcheckActions {
  refreshStatus: () => void;
  selectRecord: (id: string) => void;
  toggleChecked: (id: string) => void;
  setActivePanel: (panel: string | null) => void;
  clearError: () => void;
}

export type LoopcheckStatusBoardStore = {
  state: LoopcheckStatusBoardState;
  actions: LoopcheckActions;
};
