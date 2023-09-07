document.addEventListener("DOMContentLoaded", function () {
  const visor = document.getElementById("num");
  const botones = document.querySelectorAll(".btn");
  const operadores = document.querySelectorAll(".operador");
  const borrarTodo = document.querySelector(".borrar-todo");
  const borrar = document.querySelector(".borrar");
  const resultado = document.querySelector(".resultado");

  let valorActual = "0";
  let operador = "";
  let valorPrevio = "";
  let resultadoMostrado = false;

  function actualizarVisor() {
    visor.textContent = valorActual;
  }

  function limpiarPantalla() {
    valorActual = "0";
    operador = "";
    valorPrevio = "";
    resultadoMostrado = false;
    actualizarVisor();
  }

  function clickarNumero(num) {
    if (resultadoMostrado) {
      valorActual = num;
      resultadoMostrado = false;
    } else {
      if (valorActual === "0") {
        valorActual = num;
      } else {
        valorActual += num;
      }
    }
    actualizarVisor();
  }

  function clickarOperador(op) {
    if (valorPrevio !== "") {
      calcular();
    }
    operador = op;
    valorPrevio = valorActual;
    valorActual = "";
  }

  function calcular() {
    let result = 0;
    const previo = parseFloat(valorPrevio);
    const actual = parseFloat(valorActual);

    switch (operador) {
      case "+":
        result = previo + actual;
        break;
      case "-":
        result = previo - actual;
        break;
      case "x":
        result = previo * actual;
        break;
      case "/":
        result = previo / actual;
        break;
      default:
        return;
    }

    valorActual = result.toString();
    operador = "";
    valorPrevio = "";
    resultadoMostrado = true;
    actualizarVisor();
  }

  borrarTodo.addEventListener("click", limpiarPantalla);

  borrar.addEventListener("click", function () {
    valorActual = valorActual.slice(0, (valorActual.length-1));

    if (valorActual === "") {
      valorActual = "0";
    }
    actualizarVisor();
  });

  botones.forEach((boton) => {
    if (!boton.classList.contains("operador") && !boton.classList.contains("resultado") && !boton.classList.contains("borrar") && !boton.classList.contains("borrar-todo")) {
      boton.addEventListener("click", () => clickarNumero(boton.textContent));
    }
  });

  operadores.forEach((operador) => {
    operador.addEventListener("click", () =>
      clickarOperador(operador.textContent)
    );
  });

  resultado.addEventListener("click", calcular);

  window.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || key === ".") {
      clickarNumero(key);
    } else if (key === "+" || key === "-" || key === "x" || key === "/") {
      clickarOperador(key);
    } else if (key === "Enter") {
      calcular();
    } else if (key === "Backspace") {
      valorActual = valorActual.slice(0, -1);
      if (valorActual === "") {
        valorActual = "0";
      }
      actualizarVisor();
    }
  });
});
