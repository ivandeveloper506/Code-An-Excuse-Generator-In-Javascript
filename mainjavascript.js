/********************************************************************************/
/* Fecha Creación:  07 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Hoja principal de javascript, permite agregar funcionalidad */
/*                  a utilizar en el sitio Web, esto para darle dinamismo a la  */
/*                  a la misma, desde aqui se aplica toda la lógica para        */
/*                  obtener y mostrar las razones de forma dinamica.            */
/********************************************************************************/

const TOTAL_COLUMNS = 3;
const TOTAL_ROWS = 8;
const COLTEXT = "Col";
const ROWTEXT = "Row";
const ROW1 = 0;
let   razon_principal_activa = false;

// Arreglo 1 con las razones de la Columna 1
let column1Array = [
  "Anhelo graduarme con todos los honores",
  "Me encanta programar",
  "Me gusta diseñar",
  "Crear Sitios Web hermosos",
  "Iniciar mi carrera profesional",
  "Me gusta tener el control",
  "Me gusta tener el control visual",
  "Puedo diseñar mi sitio web",
];

// Arreglo 2 con las razones de la Columna 2
let column2Array = [
  "con 4Geeks Academy Costa Rica",
  "para sentirme realizado personalmente",
  "para tener control de que puedo realizarlo",
  "para satisfacer a los clientes",
  "para empezar a trabajar",
  "para obtener la data de Backend",
  "para crear las  mejores interfaces",
  "para desarrollar el Backend y Frontend",
];

// Arreglo 3 con las razones de la Columna 3
let column3Array = [
  "para diseñar y crear soluciones asombrosas.",
  "con las cosas que puedo crear.",
  "con mis propias creaciones.",
  "con el producto final.",
  "con mis productos y servicios personales.",
  "con las API's que diseño.",
  "con Framework's como Bootstrap.",
  "con mis propias habilidades y capacidades.",
];

function reasonGenerate() {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   reasonGenerate()                                            */
  /* Argumentos:      No utiliza                                                  */
  /*                                                                              */
  /* Descripción:     Esta función permite obtener de forma aleatoria la razón a  */
  /*                  mostrar en el sitio.                                        */
  /********************************************************************************/

  let randomColumn1 = 0;
  let randomColumn2 = 0;
  let randomColumn3 = 0;

  // Primero se valida si la razon principal se habia habilitado,
  // de ser así, se restauran los valores de la columnas.
  if (razon_principal_activa){
    fillColumns();
    razon_principal_activa = false;
  }

  // Se otiene el número de esta forma porque si es 0 se excluye, ya que esta es una razón especial reservada
  while (randomColumn1 === ROW1) {
    randomColumn1 = Math.floor(Math.random() * column1Array.length);
  }

  while (randomColumn2 === ROW1) {
    randomColumn2 = Math.floor(Math.random() * column2Array.length);
  }

  while (randomColumn3 === ROW1) {
    randomColumn3 = Math.floor(Math.random() * column3Array.length);
  }

  // Se concatenan las razones de cada columna
  let textReason =
    column1Array[randomColumn1] +
    " " +
    column2Array[randomColumn2] +
    " " +
    column3Array[randomColumn3];

  // Se obtiene el ID del componente que se debe modificar para mostrar la razón.
  var elemento = document.getElementById("reason");

  // Se modifica el DOM para mandar el texto de la razón
  elemento.innerHTML = textReason;

  // Se resaltan los valores de cada una de las columnas
  // para facilitar el seguimiento de la razón generada
  highlightRow(
    COLTEXT + "1" + ROWTEXT + (randomColumn1 + 1),
    COLTEXT + "2" + ROWTEXT + (randomColumn2 + 1),
    COLTEXT + "3" + ROWTEXT + (randomColumn3 + 1)
  );
}

function fillColumns() {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   fillColumns()                                               */
  /* Argumentos:      No utiliza                                                  */
  /*                                                                              */
  /* Descripción:     Esta función permite tomar los valores de los tres arreglos */
  /*                  para mostrarlos en las columnas respectivas en el sitio web.*/
  /********************************************************************************/

  // Ciclo para recorrer el total de columnas
  for (var col = 1; col <= TOTAL_COLUMNS; col++) {
    // Ciclo para recorrer el total de filas
    for (var row = 0; row <= TOTAL_ROWS; row++) {
      let rowId = COLTEXT + col + ROWTEXT + (row + 1);

      if (row !== TOTAL_ROWS) {
        switch (col) {
          case 1:
            if (row === ROW1) {
              document.getElementById(rowId).innerHTML = "";
            } else {
              document.getElementById(rowId).innerHTML = column1Array[row];
            }

            break;
          case 2:
            if (row === ROW1) {
              document.getElementById(rowId).innerHTML = "";
            } else {
              document.getElementById(rowId).innerHTML = column2Array[row];
            }

            break;
          case 3:
            if (row === ROW1) {
              document.getElementById(rowId).innerHTML = "";
            } else {
              document.getElementById(rowId).innerHTML = column3Array[row];
            }

            break;
        }
      }
    }
  }
}

function restoreColumns() {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   restoreColumns()                                            */
  /* Argumentos:      No utiliza                                                  */
  /*                                                                              */
  /* Descripción:     Hay una funcionalidad dinamica que marca o selecciona la    */
  /*                  fila de cada una de las tres columnas, resaltandolas en     */
  /*                  negrita y fondo anaranjado.                                 */
  /*                  Esta función permite restaurar los valores iniciales como   */
  /*                  la carga inicial del sitio, dejandolos todos desmarcados.   */
  /********************************************************************************/

  // Ciclo para recorrer el total de columnas
  for (var col = 1; col <= TOTAL_COLUMNS; col++) {
    // Ciclo para recorrer el total de filas
    for (var row = 0; row <= TOTAL_ROWS; row++) {
      let rowId = COLTEXT + col + ROWTEXT + (row + 1);

      if (row !== TOTAL_ROWS) {
        document.getElementById(rowId).style.cssText =
          "background-color: white; border-radius: 0px; font-weight: 400;";
      }
    }
  }
}

function highlightRow(column1, column2, column3) {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   highlightRow()                                              */
  /* Argumentos:                                                                  */
  /*                  column1: Corresponde con la Columna 1 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                  column2: Corresponde con la Columna 2 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                  column3: Corresponde con la Columna 3 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                                                                              */
  /* Descripción:     Esta función permite marcar o seleccionar la fila de cada   */
  /*                  una de las tres columnas obtenidas aletoriamente,           */
  /*                  resaltandolas en negrita y fondo anaranjado.                */
  /********************************************************************************/

  // Primero se restauran todas las filas para desmarcarlas todas
  restoreColumns();

  document.getElementById(column1).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black;";
  document.getElementById(column2).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black;";
  document.getElementById(column3).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black;";
}

function highlightMainReason(column1, column2, column3) {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   highlightMainReason()                                              */
  /* Argumentos:                                                                  */
  /*                  column1: Corresponde con la Columna 1 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                  column2: Corresponde con la Columna 2 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                  column3: Corresponde con la Columna 3 de la fila obtenida   */
  /*                           aleatoriamente.                                    */
  /*                                                                              */
  /* Descripción:     Esta función permite marcar o seleccionar la fila de cada   */
  /*                  una de las tres columnas obtenidas aletoriamente,           */
  /*                  resaltandolas en negrita y fondo anaranjado, además para    */
  /*                  esta razón principal, se hace un resaltado tipo relieve.    */
  /********************************************************************************/

  // Primero se restauran todas las filas para desmarcarlas todas
  restoreColumns();

  document.getElementById(column1).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black; box-shadow: 3px 3px 15px rgba(0,0,0); transform: translateY(-3%); transition: all 300ms ease;";
  document.getElementById(column2).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black; box-shadow: 3px 3px 15px rgba(0,0,0); transform: translateY(-3%); transition: all 300ms ease;";
  document.getElementById(column3).style.cssText =
    "background-color: orange; border-radius: 5px; font-weight: 700; color: black; box-shadow: 3px 3px 15px rgba(0,0,0); transform: translateY(-3%); transition: all 300ms ease;";
}

fillColumns();

function generateMainReason() {
  /********************************************************************************/
  /* Fecha Creación:  07 Febrero 2021.                                             */
  /* Autor:           Iván Fonseca Castro                                          */
  /* Nombre Objeto:   generateMainReason()                                         */
  /* Argumentos:      No utiliza                                                   */
  /*                                                                               */
  /* Descripción:     Esta función permite obtener de forma aleatoria la razón     */
  /*                  principal que se muestra en la fila 1.                       */
  /*********************************************************************************/

  let randomColumn1 = 1;
  let randomColumn2 = 1;
  let randomColumn3 = 1;

  // Se indica por medio de una variable, que se esta habilitando la razón principal.
  razon_principal_activa = true;

  // Se valida en un ciclo hasta que se obtenga la razón especial que esta en la posición 0.
  while (randomColumn1 != ROW1) {
    randomColumn1 = Math.floor(Math.random() * column1Array.length);
  }

  while (randomColumn2 != ROW1) {
    randomColumn2 = Math.floor(Math.random() * column2Array.length);
  }

  while (randomColumn3 != ROW1) {
    randomColumn3 = Math.floor(Math.random() * column3Array.length);
  }

  let textReason =
    column1Array[randomColumn1] +
    " " +
    column2Array[randomColumn2] +
    " " +
    column3Array[randomColumn3];

  var elemento = document.getElementById("reason");

  // Se modifica el DOM para mandar el texto de la razón
  elemento.innerHTML = textReason;

  document.getElementById(COLTEXT + 1 + ROWTEXT + 1).innerHTML =
    column1Array[ROW1];
  document.getElementById(COLTEXT + 2 + ROWTEXT + 1).innerHTML =
    column2Array[ROW1];
  document.getElementById(COLTEXT + 3 + ROWTEXT + 1).innerHTML =
    column3Array[ROW1];

  // Se resaltan los valores de cada una de las columnas
  // para facilitar el seguimiento de la razón generada
  highlightMainReason(
    COLTEXT + "1" + ROWTEXT + (randomColumn1 + 1),
    COLTEXT + "2" + ROWTEXT + (randomColumn2 + 1),
    COLTEXT + "3" + ROWTEXT + (randomColumn3 + 1)
  );
}

function pageLoad(){
  location.reload();
}