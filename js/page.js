let ctx = document.getElementById("monthlySales").getContext("2d");
let piectx = dcoment.getElementById("deptSales").getContext("2d");

var myBarChart = new Chart(ctx, {
  type: "horizontalBar",
  data: data,
  options: options,
});
