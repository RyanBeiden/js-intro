const expense = {
  id: 1,
  price: 1399,
  place: "Panda Express",
  code: "123DFR",
  date: "04.20.20"
};

const approval = (expenseObject) => {
  if (expenseObject > 1500) {
    expense.approved = false;
  } else {
    expense.approved = true;
  }
    return expense;
}

console.log(approval(1400));
