// Desafío - Cachipun

// Definición de variables y constantes
const PIEDRA = 0;
const PAPEL = 1;
const TIJERAS = 2;

const GANA_HUMANO = "¡¡¡ Great !!!Eres el Campeón del cachipun.";
const GANA_MAQUINA = "¡¡¡ Nooo !!!te han vencido.\nEliminado.";
const EMPATE = "¡¡¡ EMPATADO !!! Intentalo otra vez. ";

var juegos = 0; // Cantidad de juegos de cachipun
var jugada_jugador = 0; // Jugada realizada por el jugador
var jugada_computador = 0; // Jugada realizada por el computador

// Pedimos la cantidad de juegos mayor que 0 para enfrentar al computador.
while (true) {
    juegos = parseInt(prompt('Ingresa cantidad de cachipun que quieres jugar:'));
    if ((juegos != NaN) && (juegos > 0)) {
        break;
    }
    else {
        alert('Ingresa una cantidad de juegos válida');
    }
}


while (juegos > 0) {
    jugada_jugador= juega_jugador();
    jugada_computador = juega_computador();

    if (jugada_jugador != jugada_computador) {
        switch (jugada_jugador) {
            case PIEDRA:
                if (jugada_computador == PAPEL) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case PAPEL:
                if (jugada_computador == TIJERAS) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case TIJERAS:
                if (jugada_computador == PIEDRA) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
        }
    }
    else {
        alert(EMPATE);
    }

    juegos--; // Una jugada más o terminar.
}

// Juega el jugador
function juega_jugador() {
    var jugada = 666; // Jugada ingresada por el jugador
    while (true) {
        jugada = parseInt(prompt('Ingresa tu jugada cachipun (0, 1 ó 2):\n0 para PIEDRA\n1 para PAPEL\n2 para TIJERAS'));
        if ((jugada != NaN) && (jugada > -1) && (jugada < 3)) {
            break;
        }
        else {
            alert('Ingresa una jugada de cachipun válida');
        }
    }
    return jugada;
}

// Juega el computador
function juega_computador() {
    return Math.floor(Math.random() * 3);
}