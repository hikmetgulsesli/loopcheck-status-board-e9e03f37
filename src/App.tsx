import { useEffect } from 'react';
import {
  LoopcheckStatusBoardProvider,
  useLoopcheckStatusBoardStore,
} from './features/loopcheck-status-board/loopcheck-status-board.store';
import { StatusUtilityLoopcheckStatusBoard } from './screens';
import type { StatusUtilityLoopcheckStatusBoardActionId } from './screens';
import './test/bridge';

function AppContent() {
  const { state, actions } = useLoopcheckStatusBoardStore();

  useEffect(() => {
    window.app = { state, actions };
  }, [state, actions]);

  const screenActions: Partial<Record<StatusUtilityLoopcheckStatusBoardActionId, () => void>> = {
    'refresh-status-1': actions.refreshStatus,
    'documentation-1': () => {
      // Surface-level documentation link; default anchor behavior is acceptable.
    },
    'privacy-2': () => {
      // Surface-level privacy link; default anchor behavior is acceptable.
    },
    'support-3': () => {
      // Surface-level support link; default anchor behavior is acceptable.
    },
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden pt-14"
    >
      <StatusUtilityLoopcheckStatusBoard actions={screenActions} />
    </div>
  );
}

export default function App() {
  return (
    <LoopcheckStatusBoardProvider>
      <AppContent />
    </LoopcheckStatusBoardProvider>
  );
}
