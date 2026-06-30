// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - LoopCheck Status Board
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useCallback, useState } from 'react';
import { Braces, History, RefreshCw, Route, Server, Settings } from "lucide-react";
import {
  getInitialStatusBoardState,
  refreshStatus,
  type CardStatus,
  type StatusBoardState,
} from '../features/surf-status-utility/act_refresh_status';
import { toggleOperationalMode } from '../features/surf-status-utility/act_toggle_status';

export type StatusUtilityLoopcheckStatusBoardActionId = "refresh-status-1" | "documentation-1" | "privacy-2" | "support-3";

export interface StatusUtilityLoopcheckStatusBoardProps {
  actions?: Partial<Record<StatusUtilityLoopcheckStatusBoardActionId, () => void>>;

}

function chipLabel(id: string, status: CardStatus) {
  if (status === "warning") return "Warning";
  return id === "card-pipeline" ? "Normal" : "Active";
}

function chipClass(status: CardStatus) {
  return status === 'ready' ? 'status-chip-ready' : 'status-chip-warning';
}

function barClass(status: CardStatus) {
  return status === 'ready' ? 'status-bar-ready' : 'status-bar-warning';
}

export function StatusUtilityLoopcheckStatusBoard({ actions }: StatusUtilityLoopcheckStatusBoardProps) {
  const [state, setState] = useState<StatusBoardState>(getInitialStatusBoardState);

  const handleRefresh = useCallback(() => {
    setState((prev) => refreshStatus(prev));
    actions?.["refresh-status-1"]?.();
  }, [actions]);

  const handleToggle = useCallback(() => {
    setState(toggleOperationalMode);
  }, []);

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest dark:bg-inverse-surface fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline">
      <div className="flex justify-between items-center h-14 px-margin-desktop max-w-container-max mx-auto">
      <div className="font-headline-lg text-headline-lg font-black text-primary dark:text-inverse-primary">
                      StatusBoard
                  </div>
      <div className="flex items-center gap-4 hidden md:flex">
      <RefreshCw className="text-outline cursor-pointer hover:bg-surface-container-low transition-colors p-2 rounded active:scale-95 duration-150 ease-in-out" aria-hidden={true} focusable="false" />
      <History className="text-outline cursor-pointer hover:bg-surface-container-low transition-colors p-2 rounded active:scale-95 duration-150 ease-in-out" aria-hidden={true} focusable="false" />
      <Settings className="text-outline cursor-pointer hover:bg-surface-container-low transition-colors p-2 rounded active:scale-95 duration-150 ease-in-out" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="flex justify-between items-center mb-stack-lg border-b border-outline-variant pb-4">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">LoopCheck Status Board</h1>
      <p className="font-body-md text-body-md text-secondary mt-1">Real-time system diagnostics and operational state.</p>
      </div>
      <div className="flex items-center gap-4">
      <div className="text-right">
      <div className="font-label-mono text-label-mono text-secondary" id="sync-time-display">Last sync: {state.lastSync}</div>
      </div>
      <button className="btn-primary" type="button" data-action-id="refresh-status-1" onClick={handleRefresh}>
      <RefreshCw  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                          Refresh Status
                      </button>
      </div>
      </div>
      {/* Controls Section */}
      <div className="mb-stack-lg flex items-center justify-between bg-surface-container-lowest p-4 rounded border border-outline-variant">
      <div className="flex items-center gap-4">
      <span className="font-label-bold text-label-bold text-on-surface">Operational Mode</span>
      <label className="toggle-switch">
      <input checked={state.operationalMode} data-action-id="op-mode-toggle" id="op-mode-toggle" onChange={handleToggle} type="checkbox" />
      <span className="slider"></span>
      </label>
      <span className={`${state.operationalMode ? 'status-chip-ready' : 'status-chip-warning'} ml-2`} id="op-mode-status">{state.operationalLabel}</span>
      </div>
      <div className="font-label-mono text-label-mono text-secondary">
                      System Feedback: <span className="text-primary-container" id="sys-feedback">{state.systemFeedback}</span>
      </div>
      </div>
      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {state.cards.map((card, index) => (
        <div className="compact-card" key={card.id}>
        <div className={barClass(card.status)} id={`bar-${index + 1}`}></div>
        <div className="flex justify-between items-start mb-2">
        <h3 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">{card.name}</h3>
        {card.id === "card-engine" && <Server  style={{fontSize: "20px"}} className="text-secondary" aria-hidden={true} focusable="false" />}
        {card.id === "card-pipeline" && <Route  style={{fontSize: "20px"}} className="text-secondary" aria-hidden={true} focusable="false" />}
        {card.id === "card-gateway" && <Braces  style={{fontSize: "20px"}} className="text-secondary" aria-hidden={true} focusable="false" />}
        </div>
        <div className="flex justify-between items-end mt-4">
        <div>
        <div className="font-label-mono text-label-mono text-outline mb-1">{card.metricLabel}</div>
        <div className="font-body-md text-body-md font-medium">{card.metricValue}</div>
        </div>
        <span className={chipClass(card.status)} id={`chip-${index + 1}`}>{chipLabel(card.id, card.status)}</span>
        </div>
        </div>
      ))}
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface dark:bg-background w-full py-4 border-t border-outline-variant dark:border-outline mt-auto">
      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
      <div className="font-label-bold text-label-bold text-outline">
                      System Operational • Last Sync: <span id="footer-sync-time">{state.lastSync}</span>
      </div>
      <div className="flex gap-4">
      <a className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity duration-200 font-label-bold text-label-bold" href="#" data-action-id="documentation-1" onClick={(event) => { event.preventDefault(); actions?.["documentation-1"]?.(); }}>Documentation</a>
      <a className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity duration-200 font-label-bold text-label-bold" href="#" data-action-id="privacy-2" onClick={(event) => { event.preventDefault(); actions?.["privacy-2"]?.(); }}>Privacy</a>
      <a className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity duration-200 font-label-bold text-label-bold" href="#" data-action-id="support-3" onClick={(event) => { event.preventDefault(); actions?.["support-3"]?.(); }}>Support</a>
      </div>
      </div>
      </footer>

    </>
  );
}
