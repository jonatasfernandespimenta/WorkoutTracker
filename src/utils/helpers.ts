export const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

export const getCurrentWeekDay = () => new Date().getDay();
export const getCurrentWeekDayLabel = (weekDay: number) => week[weekDay];
