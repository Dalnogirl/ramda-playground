const R = require('ramda')

// const isSelectedAll = (timeSlots, checkedTimeSlots) => (
//     timeSlots.every((timeSlot) => checkedTimeSlots.some((element) => (element.id === timeSlot.id)))
//   );
const checked = [{ id: 1, kek: 12 }, { id: 12, booba: 43 }, { id: 13, peepo: 322 }, { id: 4 }]
const slots = [{ id: 12 }, { id: 1 }, { id: 13 }, { id: 4 }]
const sortById = R.sort(R.ascend())
const isSelectedAll = R.useWith(R.equals, [   sortById,  sortById])

console.log(sortById([1,4,2]))