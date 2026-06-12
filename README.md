# projeto-agrinho
agrinho
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agrinho 2026 - Kauã Bevilacqua</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#f4f9f4;
color:#333;
}

header{
background:linear-gradient(135deg,#2e8b57,#66bb6a);
color:white;
text-align:center;
padding:60px 20px;
}

header h1{
font-size:3em;
}

header p{
font-size:1.2em;
margin-top:15px;
}

nav{
background:#1b5e20;
padding:15px;
text-align:center;
}

nav a{
color:white;
text-decoration:none;
margin:0 20px;
font-weight:bold;
}

.banner{
height:500px;
background:url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854') center/cover;
display:flex;
justify-content:center;
align-items:center;
color:white;
text-shadow:2px 2px 10px black;
font-size:2em;
font-weight:bold;
}

section{
padding:60px 10%;
}

h2{
color:#2e7d32;
margin-bottom:20px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
border-radius:15px;
overflow:hidden;
box-shadow:0 4px 12px rgba(0,0,0,0.1);
transition:0.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card img{
width:100%;
height:220px;
object-fit:cover;
}

.card h3{
padding:15px;
color:#2e7d32;
}

.card p{
padding:0 15px 20px;
}

.galeria{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
}

.galeria img{
width:100%;
height:250px;
object-fit:cover;
border-radius:15px;
}

footer{
background:#1b5e20;
color:white;
text-align:center;
padding:25px;
}
</style>
</head>
<body>

<header>
<h1>AGRINHO 2026</h1>
<p>Projeto desenvolvido por <strong>Kauã Bevilacqua</strong></p>
</header>

<nav>
<a href="#sobre">Sobre</a>
<a href="#sustentabilidade">Sustentabilidade</a>
<a href="#galeria">Galeria</a>
</nav>

<div class="banner">
Agro Forte, Futuro Sustentável
</div>

<section id="sobre">
<h2>Sobre o Projeto</h2>
<p>
O Agrinho 2026 incentiva a conscientização ambiental,
a inovação no campo e a construção de um futuro sustentável.
O projeto destaca a importância da preservação dos recursos naturais,
do uso responsável da tecnologia e da produção agrícola sustentável.
</p>
</section>

<section id="sustentabilidade">
<h2>Sustentabilidade no Campo</h2>

<div class="cards">

<div class="card">
<img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399">
<h3>Agricultura Sustentável</h3>
<p>Produzir alimentos respeitando a natureza e preservando os recursos naturais.</p>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6">
<h3>Preservação Ambiental</h3>
<p>Cuidar das florestas, rios e da biodiversidade para as futuras gerações.</p>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1472396961693-142e6e269027">
<h3>Fauna e Flora</h3>
<p>Proteger os animais e as plantas que fazem parte do equilíbrio ambiental.</p>
</div>

</div>
</section>

<section id="galeria">
<h2>Galeria Agrinho 2026</h2>

<div class="galeria">
<img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854">
<img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399">
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6">
<img src="https://images.unsplash.com/photo-1472396961693-142e6e269027">
</div>

</section>

<footer>
<h3>Kauã Bevilacqua - Agrinho 2026</h3>
<p>Construindo um futuro sustentável para o campo e a cidade.</p>
</footer>

</body>
</html>
