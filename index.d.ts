export type PrometheusMetricsExporter = {
  /**
   * ! Use this function if you want to export the logs without any kind of alert
   */
  Alert: (message: string) => void;
  /**
   * ! Use this function if you want to export the logs and warn of a possible error
   */
  Warning: (message: string) => void;
};

/**
 * ! Start a new Gauge in prom-client
 */
export function InitElvenAlertManager(): PrometheusMetricsExporter;
