function taiTaiLieu(isFail) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFail === true) {
          reject("Tải thất bại!");
        } else {
          resolve("Tải thành công!");
        }
      }, 2000);
    });
  }
  
  taiTaiLieu(true)
    .then(kq => console.log(kq))
    .catch(err => console.error(err));
