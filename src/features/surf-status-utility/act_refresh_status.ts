export type CardStatus = 'ready' | 'warning';

export interface StatusCard {
  id: string;
  name: string;
  status: CardStatus;
  metricLabel: string;
  metricValue: string;
}

export interface StatusBoardState {
  lastSync: string;
  operationalMode: boolean;
  operationalLabel: string;
  systemFeedback: string;
  cards: StatusCard[];
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function randomStatus(): CardStatus {
  return Math.random() > 0.5 ? 'ready' : 'warning';
}

function nextMetricValue(card: StatusCard): string {
  if (card.metricLabel === 'Latency') {
    return `${Math.floor(Math.random() * 50 + 5)}ms`;
  }
  if (card.metricLabel === 'Throughput') {
    return `${(Math.random() * 5 + 1).toFixed(1)} GB/s`;
  }
  return `${(Math.random() * 0.05).toFixed(2)}%`;
}

export function getInitialStatusBoardState(): StatusBoardState {
  return {
    lastSync: formatTime(new Date()),
    operationalMode: true,
    operationalLabel: 'Ready',
    systemFeedback: 'All systems nominal.',
    cards: [
      {
        id: 'card-engine',
        name: 'System Engine',
        status: 'ready',
        metricLabel: 'Latency',
        metricValue: '12ms',
      },
      {
        id: 'card-pipeline',
        name: 'Data Pipeline',
        status: 'ready',
        metricLabel: 'Throughput',
        metricValue: '4.2 GB/s',
      },
      {
        id: 'card-gateway',
        name: 'API Gateway',
        status: 'ready',
        metricLabel: 'Error Rate',
        metricValue: '0.01%',
      },
    ],
  };
}

export function refreshStatus(state: StatusBoardState): StatusBoardState {
  return {
    ...state,
    lastSync: formatTime(new Date()),
    cards: state.cards.map((card) => ({
      ...card,
      status: randomStatus(),
      metricValue: nextMetricValue(card),
    })),
  };
}
