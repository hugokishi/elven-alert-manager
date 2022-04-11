const { Gauge } = require("prom-client");

let prometheusMetricsExporter;

/**
 * ! Use this function if you want to export the logs without any kind of alert
 */
const Warning = (message) => {
  return prometheusMetricsExporter.inc({ level: "warning", message }, 1);
};

/**
 * ! Use this function if you want to export the logs and warn of a possible error
 */
const Alert = (message) => {
  return prometheusMetricsExporter.inc({ level: "alert", message }, 1);
};

/**
 * Start prometheus metrics exporter
 */
const InitElvenAlertManager = () => {
  if (prometheusMetricsExporter) {
    return {
      prometheusMetricsExporter,
      Alert,
      Warning,
    };
  }

  prometheusMetricsExporter = new Gauge({
    name: "logger_logs_bucket",
    help: "Returns logger level and message in metrics",
    labelNames: ["level", "message"],
  });

  return {
    prometheusMetricsExporter,
    Alert,
    Warning,
  };
};

module.exports = { InitElvenAlertManager };
