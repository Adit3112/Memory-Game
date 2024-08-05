

let game = document.querySelector('.game')
// logic for the game
const emojis = ["❤️", "❤️", "🩷", "🩷", "🧡", "🧡", "💛", "💛", "💙", "💙", "🤍", "🤍", "🖤", "🖤", "🤎", "🤎"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuf_emojis[i]
    box.onclick = function(){
        this.classList.add('openBox');
        console.log('box clicked');
        setTimeout(function(){
            if(document.querySelectorAll('.openBox').length>1){
                if(document.querySelectorAll('.openBox')[0].innerHTML == document.querySelectorAll('.openBox')[1].innerHTML){
                    console.log('matched');
                    document.querySelectorAll('.openBox')[0].classList.add('match');
                    document.querySelectorAll('.openBox')[1].classList.add('match');
                    document.querySelectorAll('.openBox')[1].classList.remove('openBox');
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox');
                    if (document.querySelectorAll('.match').length ==emojis.length){
                        alert('Congratulations! You have won the game!');
                    }
                    
                }
                
                else
                {
                    document.querySelectorAll('.openBox')[1].classList.remove('openBox');
                    console.log('closing box');
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox');
                    console.log('closing box');
                }
            }
        },500);
    };
    game.appendChild(box);
};