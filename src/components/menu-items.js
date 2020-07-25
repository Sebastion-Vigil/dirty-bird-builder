// MenuItems -> items -> import imgs in each -> static js data -> MongoDB later

import pickle from '../assets/sandwich-toppings/Pickles.png'
import onion from '../assets/sandwich-toppings/Onions.png'
import tomato from '../assets/sandwich-toppings/Tomatos.png'
import iceburg from '../assets/sandwich-toppings/Iceburg.png'
import avocado from '../assets/sandwich-toppings/Avocado.png'
import candiedbacon from '../assets/sandwich-toppings/CandiedBacon.png'
import cheesecrisp from '../assets/sandwich-toppings/CheeseCrisp.png'
import romaine from '../assets/sandwich-toppings/Romaine.png'

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
        answer: 'briochetrickedrelishbeefswissprovolonecheesecrispcandiedbaconavocadocitrussaladromaine',
        nextScreen: cheeseburger.nextScreen,
        correctTiles: 6,
        tiles: cheeseburger.tiles,
        tileYs: [...cheeseburger.tileYs, 285]
      }
}