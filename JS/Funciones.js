function valnombre() {
  var vname = document.formcredit.name.value;

  //primera letra o vocal
  var character = vname.substr(0, 1);
  var boolname = false;

  if (
    character == "a" ||
    character == "e" ||
    character == "i" ||
    character == "o" ||
    character == "u"
  ) {
    boolname = true;
  }

  if (
    character == "A" ||
    character == "E" ||
    character == "I" ||
    character == "O" ||
    character == "U"
  ) {
    boolname = true;
  }

  if (boolname) {
    document.getElementById("nombre").innerHTML = "Correcto";
  } else {
    document.getElementById("nombre").innerHTML = "Debe comenzar con vocal";
  }
}

//validación de edad
function valedad() {
  var varage = parseInt(document.formcredit.age.value);

  if (varage < 50) {
    document.getElementById("mjeedad").innerHTML = "Correcto";
  } else {
    document.getElementById("mjeedad").innerHTML =
      "No cumples con esta condición";
  }
}

//validación estado civil
function valestcivil() {
  var estadocivil = document.formcredit.civilstatus.value;

  if (estadocivil == "soltero") {
    document.getElementById("estcivil").innerHTML = "Correcto";
  } else {
    document.getElementById("estcivil").innerHTML =
      "No cumples con esta condición";
  }
}

//validación del salario
function valsalario() {
  var salario = document.formcredit.salary.value;
  var boolsalary = false;

  if (salario > 1499999) {
    document.getElementById("rsalario").innerHTML =
      "Cumples con esta condición";
  } else {
    document.getElementById("rsalario").innerHTML =
      "No cumples con esta condición";
  }
}

//variable de dividendo
function caldividendo() {
  var dividendo = calculodividendo();

  //Mensaje cálculo de dividendo
  document.getElementById("totaldividendo").innerHTML = dividendo;
}

//Cálculo
function calculodividendo() {
  var Propiedad = parseInt(document.formcredit.price.value);
  var AñosCredito = parseInt(document.formcredit.credit.value);
  var dividendo = (Propiedad * 28500 * 1.05) / (AñosCredito * 12);
  return dividendo;
}

//validar formulario
function validate() {
  var validacionform = calculodividendo();
  var twentyfivepercent = parseInt(document.formcredit.salary.value) * 0.25;

  if (validacionform < twentyfivepercent) {
    alert("Cumples con las condiciones. Nos pondremos en contacto contigo");
  } else {
    alert("Lamentablemente no cumples con las condiciones comerciales");
  }
}
