const allData = document.querySelectorAll(".data");

allData.forEach((data) => {
  data.innerHTML = 0;
  const updateData = () => {
    const num = +data.getAttribute("get-data");
    let datanum = data.innerHTML;
    // console.log(datanum);
    let plus = num / 273;
    // console.log(plus);
    if (datanum < num) {
      setTimeout(() => {
        data.innerHTML = Math.ceil(+datanum + +plus);
        // console.log("Run");
        setTimeout(() => {
          updateData();
        }, 5);
      }, 5);
    } else {
    }
  };
  updateData();
});
