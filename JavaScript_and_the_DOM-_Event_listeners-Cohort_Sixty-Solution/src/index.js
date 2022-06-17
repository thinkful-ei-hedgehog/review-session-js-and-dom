import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
In this function, first select all the buttons with the class .expand_button. 
On each button, add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button that was clicked is a V, then set the display property of the article's body to none. Also set the text on the button to >.
If the text on the button that was clicked is not a V, then set the display property of the article's body to block. Also set the text on the button to V.
*/
function expandArticleBody() {
  let buttons = document.querySelectorAll('.expand_button');
  for(let button of buttons.values()){
    button.addEventListener('click',(event)=>{
      let article = event.target.closest('article');
      if(button.innerText==='V'){
        //then set the display property of the article's body to none. 
        //Also set the text on the button to >.
        article.querySelector('.article_body').style.display = 'none';
        button.innerText='>';
      }else{
      //then set the display property of the article's body to block. 
      //Also set the text on the button to V.
      article.querySelector('.article_body').style.display = 'block';
      button.innerText='V';
      }
      console.log(article);
    })
  }

  // your code here
  
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  let highlightButtons = document.querySelectorAll('.highlightBtn');
  for(let hiButton of highlightButtons.values()){
    hiButton.addEventListener('click',(event)=>{
      let article = event.target.closest('article');
      if(hiButton.innerText==='+'){
        article.classList.add('highlight')
        hiButton.innerText="-";
      }else{
        article.classList.remove('highlight')
        hiButton.innerText="+";
      }
    })
    
  }
  // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
