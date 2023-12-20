//les deux tableaux des evenements
const nameEvent = [];
const typeEvent = [];
// permet de recuperer toutes les parties du troisième
// joueur afin de cacher si il n'y a que deux joueurs
const counting = document.getElementById("counting");
const eventManager = document.getElementById("event_manag");
const moneyCounting = document.getElementById("money_counting");
const btnplayer = document.getElementById("sendnb");
const nbplayer = document.getElementById("fnbplayer");
const ply3 = document.getElementById("p3");
const start = document.getElementById("startplayer");
const gain = document.getElementById("p3gain");
const loss = document.getElementById("p3loss");
const footer = document.getElementById("footer_button");
//end turn button
const btnEndturn = document.getElementById("endTurnB");
//element a mettre a jour
const nameEv = document.getElementById("nameEvent");
const descEv = document.getElementById("descEvent");

const gainP1 = document.getElementById("AmountGainP1");
const gainP2 = document.getElementById("AmountGainP2");
const gainP3 = document.getElementById("AmountGainP3");
const lostP1 = document.getElementById("AmountlostP1");
const lostP2 = document.getElementById("AmountlostP2");
const lostP3 = document.getElementById("AmountlostP3");
const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
const player3 = document.getElementById("Player3");
const imgMoney = document.getElementById("img_coin");
const nbturn = document.getElementById("nb_turn");
//Sert de cacher tout les boutons du troisième joueur
btnplayer.addEventListener("click", () => compteplayer(nbplayer));
//Met a jour le nouvel evenement
btnEndturn.addEventListener("click", () => updateElem());

//initialise les tableaux des evenements et de leurs noms
function init() {
  nameEv.innerHTML = "Bienvenue dans Cult INC.";
  descEv.innerHTML =
    "Bienvenue sur l'application de Cult INC. Les evenements s'afficheront a la place de ce message. Le tour se déroule de la facon suivante : Appliquer les effets de l'évenement, Discuter des rachats et des echanges, ecrire le montant gagner et perdu dans les cases correspondantes et cliquer sur fin de tour, bon jeu a vous !";
  gainP1.value = 0;
  gainP2.value = 0;
  gainP3.value = 0;
  lostP1.value = 0;
  lostP2.value = 0;
  lostP3.value = 0;
  nameEvent[1] = "Pile je gagne, face tu perds";
  typeEvent[1] =
    "une pièce est lancée, si elle montre face tous les joueurs gagnent 40 or si elle montre pile tous les joueurs perdent 40 or. ";

  nameEvent[2] = "Vague de recrutement";
  typeEvent[2] =
    "tous les joueurs peuvent recruter 3 cultistes de rang 1 pour seulement 75 or (dans la limite de vos emplacements). ";

  nameEvent[3] = "Rébellion des faibles";
  typeEvent[3] = "les cultistes de rang 1 arrêtent de généré de l'or pendant 5 tours. ";

  nameEvent[4] = "Promotion de masses";
  typeEvent[4] =
    "tous les joueurs peuvent améliorer 3 cultistes de rang 1 à 3 à moitié prix. ";

  nameEvent[5] = "Grand rituel";
  typeEvent[5] =
    "une quantité de 100 or est mis appart et les joueurs doivent faire 5 pompes, le premier à les faires gagne la somme. ";

  nameEvent[6] = "Sabotage industriel";
  typeEvent[6] =
    "l'or générer par les cultistes de rang 1 à 2 disparait pendant 1 tour.";

  nameEvent[7] = "Résurgence vampirique";
  typeEvent[7] =
    "le joueur incarnant les vampires peut s'approprier l'or généré par un joueur ce tour-ci, cependant ce joueur ne pourra plus être cibler par cet évènement au prochain usage ou avant 14 tours. ";

  nameEvent[8] = "Pleine lune";
  typeEvent[8] =
    "le joueur incarnant les loups-garous peut détruire un ensemble de cultiste de rang 1 à 4 d'un autre joueur capable de produire 25 or ou moins.";

  nameEvent[9] = "Possessions en masses ";
  typeEvent[9] =
    " le joueur incarnant les fantômes vole un ensemble de cultistes capable de produire 50 or appartenant aux autres joueurs.";

  nameEvent[10] = "Marché infantile ";
  typeEvent[10] =
    "le prix des parts de marché diminue de 50 or ce tour-ci. ";

  nameEvent[11] = "Marché en croissance";
  typeEvent[11] =
    "le prix des parts de marché augmente de 50 or ce tour-ci ";
  nameEvent[12] = "Marché en apogée";
  typeEvent[12] =
    "le prix des parts de marché augmente de 150 or pendant 1 tour. ";
  nameEvent[13] = "En déficit";
  typeEvent[13] = "tous les joueurs perdent 30 or chacun.";
  nameEvent[14] = "Marché en chute libre ";
  typeEvent[14] =
    " le prix des parts de marché diminue de 50 or pendant 1 tour. ";
  nameEvent[15] = "Rien ne se passe";
  typeEvent[15] = "Vous avez de la chance vous avez un moment de répis.";
  nameEvent[16] = "Bras de fer économique";
  typeEvent[16] =
    "Les paris sont lancés. L'esprit c'est bien beau mais ça ne fait pas tout qu'en est-il de votre force physique ? Deux joueurs doivent se prouver, vous allez vous affrontez dans un bras de fer et le gagnant remporte le montant total parié.";
  nameEvent[17] = "Marché en chute libre";
  typeEvent[17] =
    "Les paris sont lancés. La dextérité est toujours importante dans le marché pour savoir sur quel pied danser.  Un des joueurs met ses doigts pour former un but de football |‾ ‾ | au tour à tour le joueur en face doit envoyer le plus de jeton dans le but et celui qui met le plus de but gagne le montant du pari.";
  nameEvent[18] = "Sourire capitaliste";
  typeEvent[18] =
    "Les paris sont lancés. Deux joueurs s'engagent dans un concours de blague, misant les montants qu'ils souhaitent, celui avec la meilleure blague gagne l'affrontement et le montant parié. ";
  nameEvent[19] = "Une machine bien huilée";
  typeEvent[19] =
    "Les paris sont lancés. Une diction propre et claire est l'outil principal du chef de culte. Voici un exercice parfait pour voir comment vous vous en sortez. Vous devez dire “Les chaussettes de l'archiduchesse sont-elles sèche archi sèche” rapidement. Celui qui a la diction la plus claire et le plus rapide gagne ce tour !";
  nameEvent[20] = "Compétitive rampante";
  typeEvent[20] =
    "Les paris sont lancés. En tant que grand chef, il faut garder un œil sur sa concurrence. Deux joueurs se fixe, dans un concours de regard, le gagnant remportant le total des paris. ";
  nameEvent[21] = "A un poil de la réussite";
  typeEvent[21] =
    "Les paris sont lancés. La réussite dans le monde financier, nécessite une concentration en acier et un sérieux de pierre. Deux joueurs se tienne par le menton et doivent se retenir de rire où de sourire, le gagnant remporte la mise.";
  nameEvent[22] = "Espionnage industriel";
  typeEvent[22] =
    "Les paris sont lancés. Qui dit compétition, dit désire de gagner, même s'il faut mentir et voler. Deux joueurs doivent dire 2 mensonges et 1 vérité, l'adversaire doit la découvrir, si il se trompe l'autre joueur remporte la mise.";
  nameEvent[23] = "Brain storming";
  typeEvent[23] =
    "Les paris sont lancés. Dans ce milieu, parfois pour comprendre son ennemie il faut devenir son ennemie. Les paris sont lancés. Les Joueurs se lance dans une partie de “Pierre, papier, ciseaux” en trois manches gagnantes.";
  nameEvent[24] = "Soif de pouvoir";
  typeEvent[24] =
    "Les paris sont lancés. Des fois notre soif de pouvoir prend le dessus et ne sais plus où on en est, pour être sûr que cela n'arrive j'ai un bon exercice pour vous. Vous devez tenir en équilibre sur une seule jambe, le premier qui remet le pied à terre perd l'évènement.";
  nameEvent[25] = "Réunion au sommet";
  typeEvent[25] =
    "Les paris sont lancés. Ni oui ni non 5 tours : Lors des réunions et des affaires il faut savoir utiliser ses mots à bon escient.  Deux joueurs doivent se retenir de dire oui ou non pendant 5 tours.";
}
//Calcul les gains et les pertes et renvoie la difference
function calcul(gain, perte) {
  return parseInt(gain) - parseInt(perte);
}

//Affiche la partie de jeu en fonction du nombre de joueur
function compteplayer(ply) {
  if (ply.value <= 3 && ply.value > 1) {
    counting.style.display = "flex";
    eventManager.style.display = "flex";
    moneyCounting.style.display = "flex";
    footer.style.display = "flex";
    if (ply.value == 2) {
      ply3.style.display = "none";
      gain.style.display = "none";
      loss.style.display = "none";
      imgMoney.style.display = "none";
    }
    start.style.display = "none";
  }
}
//Change l'evenement
function updateElem() {
  let calcP1;
  let calcP2;
  let calcP3;
  let turn;
  //incremente le conteur pour le nombre de tour
  turn = parseInt(nbturn.innerHTML);
  turn = turn + 1;
  nbturn.innerHTML = turn;
  // choisi le prochain element
  const randomNb = Math.floor(Math.random() * 25) + 1;
  nameEv.innerHTML = nameEvent[randomNb];
  descEv.innerHTML = typeEvent[randomNb];
  // fait le calcul des gains ou perte et met a jour le montant
  if (gainP1.value != "" && lostP1.value != "") {
    calcP1 = parseInt(player1.innerHTML) + calcul(gainP1.value, lostP1.value);
    player1.innerHTML = calcP1;
    gainP1.value = 0;
    lostP1.value = 0;
  }
  if (gainP2.value != "" && lostP2.value != "") {
    calcP2 = parseInt(player2.innerHTML) + calcul(gainP2.value, lostP2.value);
    player2.innerHTML = calcP2;
    gainP2.value = 0;
    lostP2.value = 0;
  }
  if (gainP3.value != "" && lostP3.value != "") {
    calcP3 = parseInt(player3.innerHTML) + calcul(gainP3.value, lostP3.value);
    player3.innerHTML = calcP3;
    gainP3.value = 0;
    lostP3.value = 0;
  }
}

init();
