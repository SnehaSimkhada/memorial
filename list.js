function addItemsToList(a, b, c, d, e, f, g, h, i, j) {
  var ul = document.getElementById("list");
  //var header = document.createElement('h2')

  var _a = document.createElement("li");
  var _b = document.createElement("li");
  var _c = document.createElement("li");
  var _d = document.createElement("li");
  var _e = document.createElement("li");
  var _f = document.createElement("li");
  var _g = document.createElement("li");
  var _h = document.createElement("li");
  var _i = document.createElement("li");
  var _j = document.createElement("li");
  var _space = document.createElement("li");

  // var labelA = "<b>Alphabet:</b>";
  var labelB = "Name: ";
  var lableC = "War: ";

  var lableD = "Branch: ";
  var lableE = "Services: ";
  var lableF = "Rank: ";

  var lableH = "Image: ";
  // var lableI = 'test: ';
  // var lableJ = 'test';

  //Navigation functionality

  document.getElementsByTagName("li");
  function createElementForMe(id) {
    const p = document.createElement("p");
    p.setAttribute("id", id);
    document.body.appendChild(p);
    _a.append(p);
    // _a.innerHTML = a;
  }

  switch (a.charAt(0)) {
    case "A":
      4;
      createElementForMe("a");
      break;
    case "B":
      createElementForMe("b");
      break;
    case "C":
      createElementForMe("c");
      break;
    case "D":
      createElementForMe("d");
      break;
    case "E":
      createElementForMe("e");
      break;
    case "F":
      createElementForMe("f");
      break;
    case "G":
      createElementForMe("g");
      break;
    case "H":
      createElementForMe("h");
      break;
    case "I":
      createElementForMe("i");
      break;
    case "J":
      createElementForMe("j");
      break;
    case "K":
      createElementForMe("k");
      break;
    case "L":
      createElementForMe("l");
      break;
    case "M":
      createElementForMe("m");
      break;
    case "N":
      createElementForMe("n");
      break;
    case "O":
      createElementForMe("o");
      break;
    case "P":
      createElementForMe("p");
      break;
    case "Q":
      createElementForMe("q");
      break;
    case "R":
      createElementForMe("r");
      break;
    case "S":
      createElementForMe("s");
      break;
    case "T":
      createElementForMe("t");
      break;
    case "U":
      createElementForMe("u");
      break;
    case "V":
      createElementForMe("v");
      break;
    case "W":
      createElementForMe("w");
      break;
    case "X":
      createElementForMe("x");
      break;
    case "Y":
      createElementForMe("y");
      break;
    case "Z":
      createElementForMe("z");
      break;
    default:
      return;
  }

  _g.innerHTML = labelB;
  _c.innerHTML = lableC + c;
  _d.innerHTML = lableD + d;
  _e.innerHTML = lableE + e;
  _f.innerHTML = lableF + f;

  //Picture functionality
  if (
    typeof h === "string" &&
    h.indexOf("https://firebasestorage.googleapis.com/v0/b") === 0
  ) {
    var img = document.createElement("img");
    img.src = h;
    img.width = "200";
    _h.append(img);
  }
  _i.innerHTML = lableH;
  // _j.innerHTML  =   lableJ +j ;

  _space.innerHTML = "  .  ";
  _space.innerHTML = "  .  ";

  ul.appendChild(_a);
  ul.appendChild(_g).style.color = "blue";
  ul.appendChild(_b);
  ul.appendChild(_c);
  ul.appendChild(_d);
  ul.appendChild(_e);
  ul.appendChild(_f);
  ul.appendChild(_h);
  ul.appendChild(_i).style.color = "blue";
  ul.appendChild(_j);
  ul.appendChild(_space);

  //Link functionality

  if (g.indexOf("http") === 0) {
    var a = document.createElement("a");
    var link = document.createTextNode(b);
    a.appendChild(link);
    a.title = b;
    a.href = g;
    a.target = "_blank";
    document.body.appendChild(a);
    _g.append(a);
  } else {
    _g.innerHTML = g;
  }

  if (i.indexOf("http") === 0) {
    var a = document.createElement("a");
    var link = document.createTextNode(h);
    a.appendChild(link);
    a.title = h;
    a.href = i;
    a.target = "_blank";
    document.body.appendChild(a);
    _i.append(a);
  } else {
    _i.innerHTML = i;
  }
}

function FetchAllData() {
  firebase
    .database()
    .ref("DIRECTORY-1")
    .once("value", function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        let a = ChildSnapshot.val().A;
        let b = ChildSnapshot.val().B;
        let c = ChildSnapshot.val().C;
        let d = ChildSnapshot.val().D;
        let e = ChildSnapshot.val().E;
        let f = ChildSnapshot.val().F;
        let g = ChildSnapshot.val().G;
        let h = ChildSnapshot.val().H;
        let i = ChildSnapshot.val().I;
        let j = ChildSnapshot.val().J;

        addItemsToList(a, b, c, d, e, f, g, h, i, j);
      });
    });
}
