const cards= document.querySelectorAll(".memory-card");

let hasFlippedCard=false;
let firstCard, secondCard;
let lockBoard=false;


function flipCard(){
    
    if(lockBoard) return;

     if(this===firstCard)return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;
    }

    else{
        hasFlippedCard=false;
        secondCard=this;

        


            
      
       
        if(firstCard.dataset.framework===secondCard.dataset.framework)
        {

            setTimeout(()=>{
            firstCard.removeEventListener('click', flipCard);



            



            
            secondCard.removeEventListener('click', flipCard);

            
                

            firstCard.classList.add('makebg')


            secondCard.classList.add('makebg');
             
  resetBoard(); 
        

            
},460)
           

        }

        else{
            lockBoard=true;
            setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();

            }, 1000);

        }

    }

   
    
}

function resetBoard(){
    [hasFlippedCard, lockBoard]=[false, false];

    [firstCard, secondCard]=[null, null]
}

(function shuffle(){
    cards.forEach(card=>{
        let randomPos= Math.floor(Math.random()*12);

        card.style.order=randomPos;
        
    })


})();

cards.forEach(card=> card.addEventListener('click', flipCard))