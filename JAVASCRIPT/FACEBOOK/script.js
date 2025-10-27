
        let date=document.getElementById("date");
        for(let i=1; i<=31; i++){
            date.innerHTML+=`<option value=${i}>${i}</option>`;
        }

        let year=document.getElementById("year");
        for(let i=2025; i>=1905; i--){
            year.innerHTML+=`<option value=${i}>${i}</option>`;
        }
        let array =["jan","feb","mar","apr","may","june","jule","aug","sep","oct","nov","dec"]
        let month=document.getElementById("month");
        for (let i=0; i<array.length;i++){
            month.innerHTML=month.innerHTML+`<option value=${array[i]}>${array[i]}</option>`
        }
      
