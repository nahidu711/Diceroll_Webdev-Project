function dicerole(){
    const numdice=document.getElementById("numdice").value;
    const dicere=document.getElementById("dicere");
    const diceim=document.getElementById("diceim");

    let valuee=[];
    let imag=[];

    for(let i=1;i<=numdice;i++){

      let value= Math.floor(Math.random()*6) +1;
      valuee.push(value);
      imag.push(`<img src="dice_images/${value}.png">`);



    }
    dicere.innerHTML=`dice:${valuee.join(" ,")}`;
    diceim.innerHTML=imag.join(" ");

}