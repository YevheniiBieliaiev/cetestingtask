const dataSorting = (array, value) => {

  switch (value) {
    case "up":
      return dataSortingUP(array, "Country");
    case "down":
      return dataSortingDown(array, "Country");

    case "higher":
      return dataSortingUP(array, "TotalConfirmed");
    case "lower":
      return dataSortingDown(array, "TotalConfirmed");

    default:
      return array
  }
}

const dataSortingUP = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
}

const dataSortingDown = (array, key) => {
  return array.sort((a, b) => {
    if (b[key] > a[key]) {
      return 1;
    }
    if (b[key] < a[key]) {
      return -1;
    }
    return 0;
  });
}

export {
  dataSorting
}