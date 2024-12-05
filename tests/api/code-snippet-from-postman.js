const myHeaders = new Headers();
myHeaders.append("Authorization", " Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4");
myHeaders.append("Country-Id", " 12");
myHeaders.append("Device", " pc");
myHeaders.append("Experiment", " discountlevelpurchase-discountlevelpurchase-partition-3");
myHeaders.append("Language", " ru_RU");
myHeaders.append("Referer", " https://lalafo.kg/account/settings");
myHeaders.append("User-Hash", " e73c5746-3f93-4d49-8240-9fce6165380a");
myHeaders.append("Cookie", "affinity=1733415078.144.75.183774|77d10e9a236642c6efd4b9ec0942933d");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://lalafo.kg/api/proxy/catalog/v3/categories/tree", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));