const R = require('ramda')

// const mergeTimeSlots = (timeSlots1, timeSlots2) => {
//     const result = [...timeSlots1];

//     timeSlots2.forEach((timeSlot) => {
//         if (!result.some((element) => (timeSlot.id === element.id))) {
//             result.push(timeSlot);
//         }
//     });

//     return result;
// };

const mergeTimeSlots = R.useWith(R.symmetricDifferenceWith(R.eqBy(R.prop('id'))), [R.identity, R.identity])

console.log(mergeTimeSlots)