function addItemsToList(a,b,c,d,e,f,g,h,i,j){
    var ul = document.getElementById('list');
    //var header = document.createElement('h2')

    var _a = document.createElement('li');
    var _b= document.createElement('li');
    var _c= document.createElement('li');
    var _d= document.createElement('li');
    var _e= document.createElement('li');
    var _f= document.createElement('li');
    var _g= document.createElement('li');
    var _h= document.createElement('li');
    var _i= document.createElement('li');
    var _j= document.createElement('li');
    var _space= document.createElement('li');


    var labelA= '<b>Alphabet:</b> ';
    var labelB = 'Name: ';
    var lableC = 'War: ';
    var lableD = 'Branch: ';
    var lableE = 'Services: ';
    var lableF =  'Rank: ';
   
    var lableH = 'Test: ' ;
    // var lableI = 'test: ';
    // var lableJ = 'test';
    
    





_a.innerHTML =  labelA+ a;
_g.innerHTML  =   labelB; 
_c.innerHTML  =  lableC + c; ;
_d.innerHTML  =  lableD  + d ;
_e.innerHTML  =   lableE + e ;
_f.innerHTML  =   lableF + f ;
// _h.innerHTML  =  lableH + h ;
_i.innerHTML  =  lableH ;
// _j.innerHTML  =   lableJ +j ;
_space.innerHTML  =  "  .  " ;


ul.appendChild(_a);
ul.appendChild(_g).style.color = 'blue';
ul.appendChild(_b);
ul.appendChild(_c);
ul.appendChild(_d);
ul.appendChild(_e);
ul.appendChild(_f);
ul.appendChild(_h);
ul.appendChild(_i).style.color = 'blue';;
ul.appendChild(_j);
ul.appendChild(_space); 

if(g.indexOf("http" ) === 0){
                            var a = document.createElement('a');
                            var link = document.createTextNode(b)
                           a.appendChild(link);
                            a.title = b;
                            a.href = g;
                            a.target="_blank"
                            document.body.appendChild(a);
                            _g.append(a);}
                     
                         else {
                            _g.innerHTML =  'Name: ' + g; 
                        }
                         

    if(i.indexOf("http" ) === 0){
                            var a = document.createElement('a');
                            var link = document.createTextNode(h)
                           a.appendChild(link);
                            a.title = h;
                            a.href = i;
                            a.target="_blank"
                            document.body.appendChild(a);
                            _i.append(a);}
                     
                         else {
                            _i.innerHTML =  'Name: ' + i; 
                        }
                        }                



function FetchAllData(){
    firebase.database().ref('DIRECTORY-1').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
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

addItemsToList(a,b,c,d,e,f,g,h,i,j);

            }
        );
        
    });

}



