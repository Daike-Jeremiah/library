
const search = () => {
    const searchBar= document.getElementById("search-input").value.toUpperCase();
    const listBar= document.getElementById("book-shelf")
    const datacollection= document.querySelectorAll(".image")
    const bname= listBar.querySelectorAll(".preview")

    for(var i=0; i < bname.length; i++){
        let match= datacollection[i].querySelectorAll(".preview")[0];

        if(match){
            let textvalue= match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchBar) > -1){
                datacollection[i].style.display = "";
            }else{
                datacollection[i].style.display = "none";
                
            }
        }
    }
}