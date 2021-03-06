import {SVG_NS, KEYS} from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'
import Message from './Message'
import { start } from 'repl'
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants'

// Defining game board elements
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element)
    //Create a new instance of board. height and width passed through from
    //game object
    this.board = new Board(this.width, this.height)
    
    // Defining the paddle dimension
    this.paddleWidth = 15
    this.paddleHeight = 80
    this.boardGap = 10
  
    // Ball creation

    this.ball = new Ball(8, this.width, this.height)
    //Setting up for player 1 paddle
    this.player1 = new Paddle(
        this.height, 
        this.paddleWidth, 
        this.paddleHeight, 
        this.boardGap,
        ((this.height - this.paddleHeight)/2),
        KEYS.a,
        KEYS.z,
    )

    //Setting up for player 2 paddle
    this.player2 = new Paddle(
        this.height,
        this.paddleWidth,
        this.paddleHeight,
        (this.width-this.boardGap-this.paddleWidth),
        ((this.height - this.paddleHeight)/2),
        KEYS.up,
        KEYS.down
    )
    
    // Score board position
    this.score1 = new Score(this.width/2 -50, 30, 30)
    this.score2 = new Score(this.width / 2 +25, 30, 30)
    this.winner = new Message (this.width / 2 -256, 256, 60)

    // Game pause event
    document.addEventListener('keydown', event => {
      switch(event.key) {
        case KEYS.spaceBar:
            this.gameOn = !this.gameOn
            this.player1.speed = 10
            this.player2.speed = 10
          break
      }
    })
    // Game restart key
    document.addEventListener ('keydown', event=>{
      switch(event.key) {
        case KEYS.n:
          setTimeout (refresh => {
            location.reload()
          })
      }
    } )
  }

  // rendering pause, game board, player, ball and paddle
  render() {

    if(this.gameOn) {
      this.player1.speed = 0
      this.player2.speed = 0
      return
    }
    let svg = document.createElementNS(SVG_NS, 'svg')

    this.gameElement.innerHTML = ''
    
    svg.setAttributeNS(null, 'width', this.width)
    svg.setAttributeNS(null, 'height', this.height)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)
    
    this.ball.render(svg, this.player1, this.player2)
    this.score1.render(svg, this.player1.score)
    this.score2.render(svg, this.player2.score)

    //Wining condition and function
    const player1Msg = 'Player 1 win!!!!!'
        const player2Msg = 'Player 2 win!!!!!'
        const winningScore = 6
        console.log(this.player1.score)
      console.log(player1Msg)
        if (this.player1.score>= winningScore) {
            this.winner.render(svg, player1Msg)
            document.getElementById("sound_winner").play()
            pause()
            
        } else if (this.player2.score >= winningScore) {
          this.winner.render(svg, player2Msg)
          document.getElementById("sound_winner").play()
          pause()
        }
  
  }
}
