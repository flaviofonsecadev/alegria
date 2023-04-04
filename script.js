var frases = [
    {frase: "A alegria está no coração de quem já conhece a Jesus!", autor: "Autor desconhecido"},
    {frase: "A felicidade está nas pequenas coisas da vida!", autor: "Autor desconhecido"},
    {frase: "Sorria, é contagioso!", autor: "Autor desconhecido"},
    {frase: "A alegria de viver é o melhor remédio para a tristeza!", autor: "Autor desconhecido"},
    {frase: "A vida é curta demais para não ser feliz!", autor: "Autor desconhecido"},
    {frase: "A felicidade não é algo pronto. Ela vem das suas próprias ações.", autor: "Dalai Lama"},
    {frase: "A alegria é uma rede de amor pelo qual você pode capturar almas.", autor: "Madre Teresa de Calcutá"},
    {frase: "A alegria não está nas coisas, está em nós.", autor: "Richard Wagner"},
    {frase: "A alegria é a coisa mais séria da vida.", autor: "Jacques Prévert"},
    {frase: "A felicidade é um perfume que não se pode derramar sobre outros sem conseguir umas gotas em si mesmo.", autor: "Ralph Waldo Emerson"}
  ];
  
  function mudarFrase() {
    var fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase-diaria").innerHTML = fraseAleatoria.frase;
    document.getElementById("autor").innerHTML = "- " + fraseAleatoria.autor;
  }
  
  mudarFrase();
  setInterval(mudarFrase, 1200000); // muda a cada 20 minutos (em milissegundos)
  