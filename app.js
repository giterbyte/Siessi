var form = document.getElementById("form");
let contenedorform = document.getElementById("contenedorform");
let contenedor = document.getElementById("contenedor");
let instruccion = document.getElementById("instruccion");
let instrucciones = document.getElementById("instrucciones");
let participan = document.getElementById("participantes");
let p3 = document.getElementById("p3");

function ocultarinstrucciones() {
  instrucciones.style.display = "none";
}

instruccion.addEventListener("click", ocultarinstrucciones);

function showparticipantes() {
  let participantes = document.getElementsByName("participantes")[0].value;
  if (participantes == 2) {
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "none";
    p4generado.style.display = "none";
    p5generado.style.display = "none";
    p6generado.style.display = "none";
    p7generado.style.display = "none";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 3) {
    p3.style.display = "block";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "none";
    p5generado.style.display = "none";
    p6generado.style.display = "none";
    p7generado.style.display = "none";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 4) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "none";
    p6generado.style.display = "none";
    p7generado.style.display = "none";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 5) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "none";
    p7generado.style.display = "none";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 6) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "block";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "block";
    p7generado.style.display = "none";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 7) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "block";
    p7.style.display = "block";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "block";
    p7generado.style.display = "block";
    p8generado.style.display = "none";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 8) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "block";
    p7.style.display = "block";
    p8.style.display = "block";
    p9.style.display = "none";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "block";
    p7generado.style.display = "block";
    p8generado.style.display = "block";
    p9generado.style.display = "none";
    p10generado.style.display = "none";
  }
  if (participantes == 9) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "block";
    p7.style.display = "block";
    p8.style.display = "block";
    p9.style.display = "block";
    p10.style.display = "none";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "block";
    p7generado.style.display = "block";
    p8generado.style.display = "block";
    p9generado.style.display = "block";
    p10generado.style.display = "none";
  }
  if (participantes == 10) {
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    p6.style.display = "block";
    p7.style.display = "block";
    p8.style.display = "block";
    p9.style.display = "block";
    p10.style.display = "block";

    p3generado.style.display = "block";
    p4generado.style.display = "block";
    p5generado.style.display = "block";
    p6generado.style.display = "block";
    p7generado.style.display = "block";
    p8generado.style.display = "block";
    p9generado.style.display = "block";
    p10generado.style.display = "block";
  }
}

participan.addEventListener("input", showparticipantes);

function submitHandler(e) {
  contenedorform.style.display = "none";
  contenedor.style.display = "block";

  let lugarevento = document.getElementsByName("lugarevento")[0].value;
  let lugareventogenerado = (document.getElementById(
    "lugareventogenerado"
  ).innerHTML = lugarevento);

  let localidadevento = document.getElementsByName("localidadevento")[0].value;
  let localidadeventogenerado = (document.getElementById(
    "localidadeventogenerado"
  ).innerHTML = localidadevento);

  let participantes = document.getElementsByName("participantes")[0].value;
  let participantesgenerado = (document.getElementById(
    "participantesgenerado"
  ).innerHTML = participantes);

  let fechaevento = document.getElementsByName("fechaevento")[0].value;
  let fechaeventogenerado = (document.getElementById(
    "fechaeventogenerado"
  ).innerHTML = fechaevento);

  let horaevento = document.getElementsByName("horaevento")[0].value;
  let horaeventogenerado = (document.getElementById(
    "horaeventogenerado"
  ).innerHTML = horaevento);
  //participante
  let nombrep1 = document.getElementsByName("nombrep1")[0].value;
  let nombrep1generado = (document.getElementById(
    "nombrep1generado"
  ).innerHTML = nombrep1);

  let apellidosp1 = document.getElementsByName("apellidosp1")[0].value;
  let apellidosp1generado = (document.getElementById(
    "apellidosp1generado"
  ).innerHTML = apellidosp1);

  let dnip1 = document.getElementsByName("dnip1")[0].value;
  let dnip1generado = (document.getElementById("dnip1generado").innerHTML =
    dnip1);

  let fechap1 = document.getElementsByName("fechap1")[0].value;
  let fechap1generado = (document.getElementById("fechap1generado").innerHTML =
    fechap1);
  //participante
  let nombrep2 = document.getElementsByName("nombrep2")[0].value;
  let nombrep2generado = (document.getElementById(
    "nombrep2generado"
  ).innerHTML = nombrep2);

  let apellidosp2 = document.getElementsByName("apellidosp2")[0].value;
  let apellidosp2generado = (document.getElementById(
    "apellidosp2generado"
  ).innerHTML = apellidosp2);

  let dnip2 = document.getElementsByName("dnip2")[0].value;
  let dnip2generado = (document.getElementById("dnip2generado").innerHTML =
    dnip2);

  let fechap2 = document.getElementsByName("fechap2")[0].value;
  let fechap2generado = (document.getElementById("fechap2generado").innerHTML =
    fechap2);
  //participante
  let nombrep3 = document.getElementsByName("nombrep3")[0].value;
  let nombrep3generado = (document.getElementById(
    "nombrep3generado"
  ).innerHTML = nombrep3);

  let apellidosp3 = document.getElementsByName("apellidosp3")[0].value;
  let apellidosp3generado = (document.getElementById(
    "apellidosp3generado"
  ).innerHTML = apellidosp3);

  let dnip3 = document.getElementsByName("dnip3")[0].value;
  let dnip3generado = (document.getElementById("dnip3generado").innerHTML =
    dnip3);

  let fechap3 = document.getElementsByName("fechap3")[0].value;
  let fechap3generado = (document.getElementById("fechap3generado").innerHTML =
    fechap3);
  //participante
  let nombrep4 = document.getElementsByName("nombrep4")[0].value;
  let nombrep4generado = (document.getElementById(
    "nombrep4generado"
  ).innerHTML = nombrep4);

  let apellidosp4 = document.getElementsByName("apellidosp4")[0].value;
  let apellidosp4generado = (document.getElementById(
    "apellidosp4generado"
  ).innerHTML = apellidosp4);

  let dnip4 = document.getElementsByName("dnip4")[0].value;
  let dnip4generado = (document.getElementById("dnip4generado").innerHTML =
    dnip4);

  let fechap4 = document.getElementsByName("fechap4")[0].value;
  let fechap4generado = (document.getElementById("fechap4generado").innerHTML =
    fechap4);
  //participante
  let nombrep5 = document.getElementsByName("nombrep5")[0].value;
  let nombrep5generado = (document.getElementById(
    "nombrep5generado"
  ).innerHTML = nombrep5);

  let apellidosp5 = document.getElementsByName("apellidosp5")[0].value;
  let apellidosp5generado = (document.getElementById(
    "apellidosp5generado"
  ).innerHTML = apellidosp5);

  let dnip5 = document.getElementsByName("dnip5")[0].value;
  let dnip5generado = (document.getElementById("dnip5generado").innerHTML =
    dnip5);

  let fechap5 = document.getElementsByName("fechap5")[0].value;
  let fechap5generado = (document.getElementById("fechap5generado").innerHTML =
    fechap5);
  //participante
  let nombrep6 = document.getElementsByName("nombrep6")[0].value;
  let nombrep6generado = (document.getElementById(
    "nombrep6generado"
  ).innerHTML = nombrep6);

  let apellidosp6 = document.getElementsByName("apellidosp6")[0].value;
  let apellidosp6generado = (document.getElementById(
    "apellidosp6generado"
  ).innerHTML = apellidosp6);

  let dnip6 = document.getElementsByName("dnip6")[0].value;
  let dnip6generado = (document.getElementById("dnip6generado").innerHTML =
    dnip6);

  let fechap6 = document.getElementsByName("fechap6")[0].value;
  let fechap6generado = (document.getElementById("fechap6generado").innerHTML =
    fechap6);
  //participante
  let nombrep7 = document.getElementsByName("nombrep7")[0].value;
  let nombrep7generado = (document.getElementById(
    "nombrep7generado"
  ).innerHTML = nombrep7);

  let apellidosp7 = document.getElementsByName("apellidosp7")[0].value;
  let apellidosp7generado = (document.getElementById(
    "apellidosp7generado"
  ).innerHTML = apellidosp7);

  let dnip7 = document.getElementsByName("dnip7")[0].value;
  let dnip7generado = (document.getElementById("dnip7generado").innerHTML =
    dnip7);

  let fechap7 = document.getElementsByName("fechap7")[0].value;
  let fechap7generado = (document.getElementById("fechap7generado").innerHTML =
    fechap7);
  //participante
  let nombrep8 = document.getElementsByName("nombrep8")[0].value;
  let nombrep8generado = (document.getElementById(
    "nombrep8generado"
  ).innerHTML = nombrep8);

  let apellidosp8 = document.getElementsByName("apellidosp8")[0].value;
  let apellidosp8generado = (document.getElementById(
    "apellidosp8generado"
  ).innerHTML = apellidosp8);

  let dnip8 = document.getElementsByName("dnip8")[0].value;
  let dnip8generado = (document.getElementById("dnip8generado").innerHTML =
    dnip8);

  let fechap8 = document.getElementsByName("fechap8")[0].value;
  let fechap8generado = (document.getElementById("fechap8generado").innerHTML =
    fechap8);
  //participante
  let nombrep9 = document.getElementsByName("nombrep9")[0].value;
  let nombrep9generado = (document.getElementById(
    "nombrep9generado"
  ).innerHTML = nombrep9);

  let apellidosp9 = document.getElementsByName("apellidosp9")[0].value;
  let apellidosp9generado = (document.getElementById(
    "apellidosp9generado"
  ).innerHTML = apellidosp9);

  let dnip9 = document.getElementsByName("dnip9")[0].value;
  let dnip9generado = (document.getElementById("dnip9generado").innerHTML =
    dnip9);

  let fechap9 = document.getElementsByName("fechap9")[0].value;
  let fechap9generado = (document.getElementById("fechap9generado").innerHTML =
    fechap9);
  //participante
  let nombrep10 = document.getElementsByName("nombrep10")[0].value;
  let nombrep10generado = (document.getElementById(
    "nombrep10generado"
  ).innerHTML = nombrep10);

  let apellidosp10 = document.getElementsByName("apellidosp10")[0].value;
  let apellidosp10generado = (document.getElementById(
    "apellidosp10generado"
  ).innerHTML = apellidosp10);

  let dnip10 = document.getElementsByName("dnip10")[0].value;
  let dnip10generado = (document.getElementById("dnip10generado").innerHTML =
    dnip10);

  let fechap10 = document.getElementsByName("fechap10")[0].value;
  let fechap10generado = (document.getElementById(
    "fechap10generado"
  ).innerHTML = fechap10);
  //practicas
  const sexoral = document.querySelector("#sexoral");
  if (sexoral.checked == true) {
    document.getElementById("sexoralgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("sexoralgenerado").innerHTML = "no aceptado";
  }

  const sexanal = document.querySelector("#sexanal");
  if (sexanal.checked == true) {
    document.getElementById("sexanalgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("sexanalgenerado").innerHTML = "no aceptado";
  }

  const sexvaginal = document.querySelector("#sexvaginal");
  if (sexvaginal.checked == true) {
    document.getElementById("sexvaginalgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("sexvaginalgenerado").innerHTML = "no aceptado";
  }

  const trio = document.querySelector("#trio");
  if (trio.checked == true) {
    document.getElementById("triogenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("triogenerado").innerHTML = "no aceptado";
  }

  const sexgroup = document.querySelector("#sexgroup");
  if (sexgroup.checked == true) {
    document.getElementById("sexgroupgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("sexgroupgenerado").innerHTML = "no aceptado";
  }

  const sinlimites = document.querySelector("#sinlimites");
  if (sinlimites.checked == true) {
    document.getElementById("sinlimitesgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("sinlimitesgenerado").innerHTML = "no aceptado";
  }

  const gangbang = document.querySelector("#gangbang");
  if (gangbang.checked == true) {
    document.getElementById("gangbangenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("gangbangenerado").innerHTML = "no aceptado";
  }

  const tocamiento = document.querySelector("#tocamiento");
  if (tocamiento.checked == true) {
    document.getElementById("tocamientogenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("tocamientogenerado").innerHTML = "no aceptado";
  }

  const bondage = document.querySelector("#bondage");
  if (bondage.checked == true) {
    document.getElementById("bondagegenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("bondagegenerado").innerHTML = "no aceptado";
  }

  const hardsex = document.querySelector("#hardsex");
  if (hardsex.checked == true) {
    document.getElementById("hardsexgenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("hardsexgenerado").innerHTML = "no aceptado";
  }

  const voyeurismo = document.querySelector("#voyeurismo");
  if (voyeurismo.checked == true) {
    document.getElementById("voyeurismogenerado").innerHTML = "aceptado";
  } else {
    document.getElementById("voyeurismogenerado").innerHTML = "no aceptado";
  }

  e.preventDefault();
}

form.addEventListener("submit", submitHandler);

const print = document.getElementById("print");
print.addEventListener("click", () => {
  const elementoParaConvertir = document.getElementById("cuerpos");
  html2pdf()
    .set({
      margin: 2.4,
      filename: "consentimiento.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "cm",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(elementoParaConvertir)
    .save()
    .catch((err) => console.log(err));
});
