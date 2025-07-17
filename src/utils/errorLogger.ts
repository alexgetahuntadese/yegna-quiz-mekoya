
interface ErrorLogEntry {
  timestamp: string;
  level: 'error' | 'warn' | 'info';
  context: string;
  message: string;
  details?: any;
  userAgent?: string;
  url?: string;
}

class ErrorLogger {
  private logs: ErrorLogEntry[] = [];
  private maxLogs = 100;

  private createLogEntry(
    level: ErrorLogEntry['level'],
    context: string,
    message: string,
    details?: any
  ): ErrorLogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      context,
      message,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
  }

  error(context: string, message: string, details?: any) {
    const entry = this.createLogEntry('error', context, message, details);
    this.logs.push(entry);
    this.trimLogs();
    
    // Use native console directly to avoid recursion
    console.error(`🚨 [${context}] ${message}`, details || '');
    
    // In production, you might want to send this to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      this.reportError(entry);
    }
  }

  warn(context: string, message: string, details?: any) {
    const entry = this.createLogEntry('warn', context, message, details);
    this.logs.push(entry);
    this.trimLogs();
    
    console.warn(`⚠️ [${context}] ${message}`, details || '');
  }

  info(context: string, message: string, details?: any) {
    const entry = this.createLogEntry('info', context, message, details);
    this.logs.push(entry);
    this.trimLogs();
    
    console.info(`ℹ️ [${context}] ${message}`, details || '');
  }

  private trimLogs() {
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }
  }

  private reportError(entry: ErrorLogEntry) {
    // Placeholder for production error reporting
    // You could integrate with services like Sentry, LogRocket, etc.
    console.log('📤 Would report error to monitoring service:', entry);
  }

  getLogs(level?: ErrorLogEntry['level']) {
    if (level) {
      return this.logs.filter(log => log.level === level);
    }
    return [...this.logs];
  }

  clearLogs() {
    this.logs = [];
  }

  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }
}

export const logger = new ErrorLogger();
