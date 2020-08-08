// MenuItems -> items -> import imgs in each -> static js data -> MongoDB later

import pickle from '../assets/imgs/sandwich-toppings/Pickles.png'
import onion from '../assets/imgs/sandwich-toppings/Onions.png'
import tomato from '../assets/imgs/sandwich-toppings/Tomatos.png'
import iceburg from '../assets/imgs/sandwich-toppings/Iceburg.png'
import avocado from '../assets/imgs/sandwich-toppings/Avocado.png'
import candiedbacon from '../assets/imgs/sandwich-toppings/CandiedBacon.png'
import cheesecrisp from '../assets/imgs/sandwich-toppings/CheeseCrisp.png'
import romaine from '../assets/imgs/sandwich-toppings/Romaine.png'
import citrussalad from '../assets/imgs/sandwich-toppings/CitrusSalad.png'

export default {
    // further modularize -> universal state -> specific state
    // glory to the Lamb
    cheeseburger: {
        question: 'What comes on a Cheeseburger?',
        answer: 'sesamerelishmayopickleonionbeefamericantomatoiceburg',
        correctTiles: 5,
        nextScreen: 1, // get rid of this soon 
        tiles: [
          [pickle, 'visible', 'pickle'],
          [onion, 'visible', 'onion'],
          [tomato, 'visible', 'tomato'],
          [iceburg, 'visible', 'iceburg'],
          [avocado, 'visible', 'avocado'],
          [candiedbacon, 'visible', 'candiedbacon'],
          [cheesecrisp, 'visible', 'cheesecrisp'],
          [romaine, 'visible', 'romaine']
        ], // dynamically generate <Tile/> addresses
        tileYs: [5, 40, 75, 110, 145, 180, 215, 250]
      }, 
      madlove: {
        question: 'What comes on a Madlove burger?',
        answer: 'briochetrickedrelishtrickedrelishbeefswissprovolonecheesecrispcandiedbaconavocadocitrussaladromaine',
        correctTiles: 6,
        nextScreen: 1, // get rid of this soon 
        tiles: [
          [pickle, 'visible', 'pickle'],
          [citrussalad, 'visible', 'citrussalad'],
          [tomato, 'visible', 'tomato'],
          [iceburg, 'visible', 'iceburg'],
          [avocado, 'visible', 'avocado'],
          [candiedbacon, 'visible', 'candiedbacon'],
          [cheesecrisp, 'visible', 'cheesecrisp'],
          [romaine, 'visible', 'romaine']
        ], // dynamically generate <Tile/> addresses
        tileYs: [5, 40, 75, 110, 145, 180, 215, 250, 285]
      }
}