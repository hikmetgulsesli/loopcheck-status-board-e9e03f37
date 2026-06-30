import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { loadPersistedState, savePersistedState } from './loopcheck-status-board.repo';
import type { LoopcheckActions, LoopcheckItem, LoopcheckStatusBoardState } from './loopcheck-status-board.types';

const initialState: LoopcheckStatusBoardState = {
  activeScreen: 'Status Utility - LoopCheck Status Board',
  selectedRecord: null,
  counts: { ready: 0, warning: 0, total: 0 },
  storageStatus: 'idle',
  lastError: null,
  activePanel: null,
  items: [],
};

const LoopcheckStatusBoardContext = createContext<{
  state: LoopcheckStatusBoardState;
  actions: LoopcheckActions;
} | null>(null);

export function LoopcheckStatusBoardProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LoopcheckStatusBoardState>(initialState);

  useEffect(() => {
    setState((prev) => ({ ...prev, storageStatus: 'loading' }));
    try {
      const persisted = loadPersistedState();
      if (persisted) {
        const items = persisted.items ?? [];
        setState((prev) => ({
          ...prev,
          items,
          activePanel: persisted.activePanel ?? null,
          counts: computeCounts(items),
          storageStatus: 'ready',
        }));
      } else {
        setState((prev) => ({ ...prev, storageStatus: 'ready' }));
      }
    } catch {
      setState((prev) => ({
        ...prev,
        storageStatus: 'error',
        lastError: 'Failed to load persisted state',
      }));
    }
  }, []);

  useEffect(() => {
    savePersistedState({ items: state.items, activePanel: state.activePanel });
  }, [state.items, state.activePanel]);

  const actions = useMemo<LoopcheckActions>(
    () => ({
      refreshStatus: () => {
        setState((prev) => {
          const nextItems = prev.items.map((item) => ({
            ...item,
            status: (Math.random() > 0.5 ? 'ready' : 'warning') as LoopcheckItem['status'],
          }));
          return {
            ...prev,
            items: nextItems,
            counts: computeCounts(nextItems),
            lastError: null,
          };
        });
      },
      selectRecord: (id: string) => {
        setState((prev) => ({
          ...prev,
          selectedRecord: prev.items.find((item) => item.id === id) ?? null,
        }));
      },
      toggleChecked: (id: string) => {
        setState((prev) => {
          const nextItems = prev.items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item,
          );
          return { ...prev, items: nextItems, counts: computeCounts(nextItems) };
        });
      },
      setActivePanel: (panel: string | null) => {
        setState((prev) => ({ ...prev, activePanel: panel }));
      },
      clearError: () => {
        setState((prev) => ({ ...prev, lastError: null }));
      },
    }),
    [],
  );

  const value = useMemo(() => ({ state, actions }), [state, actions]);

  return (
    <LoopcheckStatusBoardContext.Provider value={value}>
      {children}
    </LoopcheckStatusBoardContext.Provider>
  );
}

export function useLoopcheckStatusBoardStore() {
  const context = useContext(LoopcheckStatusBoardContext);
  if (!context) {
    throw new Error('useLoopcheckStatusBoardStore must be used within LoopcheckStatusBoardProvider');
  }
  return context;
}

function computeCounts(items: LoopcheckItem[]) {
  return {
    ready: items.filter((item) => item.status === 'ready').length,
    warning: items.filter((item) => item.status === 'warning').length,
    total: items.length,
  };
}
