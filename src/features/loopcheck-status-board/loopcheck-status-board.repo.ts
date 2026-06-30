import type { LoopcheckItem } from './loopcheck-status-board.types';

const STORAGE_KEY = 'loopcheck-status-board-state';

export interface PersistedState {
  items: LoopcheckItem[];
  activePanel: string | null;
}

export function loadPersistedState(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedState;
  } catch {
    return null;
  }
}

export function savePersistedState(state: PersistedState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Persistence is best-effort; corrupted writes are surfaced via storageStatus.
  }
}
