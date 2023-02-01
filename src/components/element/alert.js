import Swal from "sweetalert2";
// import "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.1/sweetalert2.css";
// import "//cdn.jsdelivr.net/npm/sweetalert2@11";
// import "./style/alert.css";

import { IMAGES } from "../../constants/index";

export const carrotAlert = (errMsg) => {
  Swal.fire({
    imageUrl: `${IMAGES.alertImg}`,
    text: errMsg,
    padding: 24,
    confirmButtonText: "확인",
    confirmButtonColor: "#F27808",
    // customClass: {
    //   text: "carrotAlert",
    // },
  });
};

export const carrotConfirm = (msg, callback1, callback2) => {
  Swal.fire({
    imageUrl: `${IMAGES.alertImg}`,
    text: msg,
    padding: 24,
    showCancelButton: true,
    confirmButtonText: "예",
    confirmButtonColor: "#F27808",
    cancelButtonColor: "#4A8A51",
    cancelButtonText: "아니요",
    // cancelButtonTextColor: "#F27808",
  }).then((result) => {
    // console.log(result);
    if (result.isConfirmed) {
      callback1();
      callback2();
    }
  });
};
