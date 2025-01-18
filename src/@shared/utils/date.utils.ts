export class DateUtils {
  static formatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  static getCurrentDate(): string {
    const now = new Date();
    return this.formatter.format(now);
  }
}
