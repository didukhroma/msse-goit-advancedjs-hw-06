/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  MON='Mon' , TUE='Tue' , WED='Wed' , THU='Thu' , FRI='Fri' , SAT='Sat' , SUN='Sun'
}


function isWeekend(day: string): boolean {  
  return day === WeekDays.SAT || day === WeekDays.SUN
} 

console.log(isWeekend(WeekDays.MON))