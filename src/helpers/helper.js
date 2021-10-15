function spentMinutes(startTime, endTime) {
   const MINUTES = 60;
   let result = null;

   if (!startTime || !endTime) {
      throw new Error("spentMinutes: startTime and endTime can't be undefined or null");
   }

   const startHours = Number(startTime.split('-')[0]);
   const startMinutes = Number(startTime.split('-')[1]);

   const endHours = Number(endTime.split('-')[0]);
   const endMinutes = Number(endTime.split('-')[1]);

   if (!startHours || !startMinutes || !endHours || !endMinutes) {
      throw new Error("Hours and minutes can't be undefined or null");
   }

   result = MINUTES - startMinutes + (endHours - startHours - 1) * MINUTES + endMinutes;

   return result || 0;
}

export default spentMinutes;
