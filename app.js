const toTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
let foto = 1;
let foto2 = 2;

function imgFoward(album, cantidad, total) {
  if (foto < cantidad) {
    foto += 2;
    foto2 += 2;

    img1 = document.getElementById(album).src =
      "http://localhost/Prueba/images/" + album + "/" + foto + ".jpeg";

    img2 = document.getElementById(album + "2").src =
      "http://localhost/Prueba/images/" + album + "/" + foto2 + ".jpeg";

    console.log(foto);
    console.log(foto2);
  } else {
    foto = 1;
    foto2 = 2;
    img1 = document.getElementById(album).src =
      "http://localhost/Prueba/images/" + album + "/" + foto + ".jpeg";

    img2 = document.getElementById(album + "2").src =
      "http://localhost/Prueba/images/" + album + "/" + foto2 + ".jpeg";
    console.log("we done");
  }
}

function imgBackward(album, cantidad, total) {
  if (foto <= 1) {
    foto = cantidad;
    foto2 = total;

    img1 = document.getElementById(album).src =
      "http://localhost/Prueba/images/" + album + "/" + foto + ".jpeg";

    img2 = document.getElementById(album + "2").src =
      "http://localhost/Prueba/images/" + album + "/" + foto2 + ".jpeg";

    console.log(foto);
    console.log(foto2);
  } else {
    foto -= 2;
    foto2 -= 2;
    img1 = document.getElementById(album).src =
      "http://localhost/Prueba/images/" + album + "/" + foto + ".jpeg";

    img2 = document.getElementById(album + "2").src =
      "http://localhost/Prueba/images/" + album + "/" + foto2 + ".jpeg";
    console.log("we done");
  }
}
