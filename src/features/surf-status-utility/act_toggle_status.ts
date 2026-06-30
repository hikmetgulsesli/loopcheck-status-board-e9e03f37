import type { StatusBoardState } from './act_refresh_status';

export function toggleOperationalMode(state: StatusBoardState): StatusBoardState {
  const nextMode = !state.operationalMode;
  return {
    ...state,
    operationalMode: nextMode,
    operationalLabel: nextMode ? 'Ready' : 'Paused',
    systemFeedback: nextMode
      ? 'All systems nominal.'
      : 'Operational mode paused; monitoring reduced.',
  };
}
