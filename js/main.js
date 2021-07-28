let lgpdApi = "https://jsonplaceholder.typicode.com/posts";
let lgpdHtml = `
  <div class="lgpd">
    <div class="lgpd--left">
      Nós Utilizamos cookie para melhorar a experiência do usuário.<br/>
      Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="">Politica de privacidade</a>.
    </div>
    <div class="lgpd--right">
      <button>Aceitar</button>
    </div>
  </div>
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
  document.body.innerHTML += lgpdHtml;

  let lgpdArea = document.querySelector('.lgpd')
  let lgpdButton = lgpdArea.querySelector('button')

  lgpdButton.addEventListener('click', async () => {
      lgpdArea.remove();
      let result = await fetch(lgpdApi);
      let json = await result.json();
      if(json.error != "") {
        localStorage.setItem('lgpd', "131546dsad4648")
      }
  })
}
