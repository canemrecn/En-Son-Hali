import React, { useState } from 'react';
import { useFilm } from './FilmContext';

function PosterContainer() {
  const { moviePosters } = useFilm();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const showPoster = () => {
    const filteredPosters = moviePosters.filter(poster => poster.category === selectedCategory); // Sadece seçilen kategoriye ait filmleri filtrele
    const randomIndex = Math.floor(Math.random() * filteredPosters.length);
    const randomPoster = filteredPosters[randomIndex].path;
    
    const moviePoster = document.getElementById('moviePoster');
    moviePoster.src = randomPoster;
    
    const posterContainer = document.getElementById('posterContainer');
    posterContainer.style.display = 'block';
    
    const showPosterButton = document.getElementById('showPosterButton');
    showPosterButton.style.display = 'none';
  };

  return (
    <div className="container text-center">
      <button id="showPosterButton" className="btn btn-outline-warning" onClick={showPoster}><h2>Önce Kategori Seçin ve Sonra Bu Butona Basın</h2></button>
      <div id="posterContainer" style={{ display: 'none' }}>
        <img id="moviePoster" src="" alt="Movie Poster" />
      </div>
      <div>
        <h3>Kategoriler</h3>
        <button onClick={() => setSelectedCategory('imdb')}>İmdb En İyi 100 Film</button>
        <button onClick={() => setSelectedCategory('aile')}>Aile Filmleri</button>
        <button onClick={() => setSelectedCategory('aksiyon')}>Aksiyon Filmleri</button>
        <button onClick={() => setSelectedCategory('animasyon')}>Animasyon Filmleri</button>
        <button onClick={() => setSelectedCategory('bilimkurgu')}>Bilim Kurgu Filmleri</button>
        <button onClick={() => setSelectedCategory('blueray')}>BlueRay Filmleri</button>
        <button onClick={() => setSelectedCategory('cizgifilm')}>Çizgi Filmler</button>
        <button onClick={() => setSelectedCategory('dramfilm')}>Dram Filmleri</button>
        <button onClick={() => setSelectedCategory('fantastikfilm')}>Fantastik Filmleri</button>
        <button onClick={() => setSelectedCategory('gizemfilm')}>Gizem Filmleri</button>
        <button onClick={() => setSelectedCategory('komedifilm')}>Komedi Filmleri</button>
        <button onClick={() => setSelectedCategory('korkufilm')}>Korku Filmleri</button>
        <button onClick={() => setSelectedCategory('müzikalfilm')}>Müzikal Filmleri</button>
        <button onClick={() => setSelectedCategory('psikolojikfilm')}>Psikolojik Filmleri</button>
        <button onClick={() => setSelectedCategory('romantikfilm')}>Romantik Filmleri</button>
        <button onClick={() => setSelectedCategory('savasfilm')}>Savaş Filmleri</button>
        <button onClick={() => setSelectedCategory('sucfilm')}>Suç Filmleri</button>
        <button onClick={() => setSelectedCategory('tarihfilm')}>Tarih Filmleri</button>
        <button onClick={() => setSelectedCategory('yerlifilm')}>Yerli Filmleri</button>
        {/* Diğer kategori butonları buraya eklenebilir */}
      </div>
    </div>
  );
}

export default PosterContainer;


