import React, { Component }from 'react';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Header";
import AnimeCard from "./components/AnimeCard/AnimeCard";
import anime from './anime.json';
import Footer from './components/Footer/footer';


//sets state to 0 or empty
class App extends Component {
  state = {
    anime,
    clickedAnime: [],
    score: 0
  };

  //when you click on a card ... the Anime is taken out of the array
  imageClick = event => {
    const currentAnime = event.target.alt;
    const AnimeAlreadyClicked =
      this.state.clickedAnime.indexOf(currentAnime) > -1;
  
      //if clicked on a anime that has already been selected, the game is reset and cards reordered
    if (AnimeAlreadyClicked) {
      this.setState({
        anime: this.state.anime.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAnime: [],
        score: 0
      });
        alert("You lose. Play again?");

        //if you click on an available anime, your score is increased and cards reordered
    } else {
      this.setState(
        {
          anime: this.state.anime.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAnime: this.state.clickedAnime.concat(
            currentAnime
          ),
          score: this.state.score + 1
        },

        //if you get all 12 Anime corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 10) {
            alert("Yay! You Won!");
            this.setState({
              anime: this.state.anime.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedAnime: [],
              score: 0
            });
          }
        }
      );
    }
  };

render() {
  return (
    <div>
      <Navbar 
      score={this.state.score}/>
      <Title />
        <div className="wrapper">
          {this.state.anime.map(anime => (
            <AnimeCard 
            imageClick={this.imageClick}
            id={anime.id}
            key={anime.id}
            image={anime.image}/>
          ))}
        </div>
      <Footer/>
    </div>
  );
}
}
export default App;
