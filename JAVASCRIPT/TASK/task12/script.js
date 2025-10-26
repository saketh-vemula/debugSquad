// Ask for the total cart amount, membership type (silver, gold, platinum), and
// coupon availability:
// * Silver members get five percent off.
// * Gold members get ten percent off.
// * Platinum members get fifteen percent off.
// If a coupon is also applied, stack an extra five percent off. Students must
// print the final payable amount after combining all conditions logically.
 
let total=parseInt(prompt("enter yoyr amount"));
let type=prompt("enter membership type (silver/gold/platinum)");
let coupon=parseInt(prompt("enter coupon"));
 let disc=0;
if(type=="silver"){
    total=total-(total*0.05);
    console.log("with silver membership="+total)
}
else if(type=="gold"){
     total=total-(total*0.10);
    console.log("with gold membership="+total)
}
else if (type=="platinum"){
     total=total-(total*0.15);
    console.log("with platinum membership="+total)
}
 if(coupon=="123"){
    disc=0.05;
    total=total-(total*disc)
    
console.log("coupon applie extra five percent off ="+total)
 }


