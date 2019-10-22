import {SVG_NS} from '../settings'
import { rejects } from 'assert'
    // Board dimension
export default class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
        
    }
    // Rendering board
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect')
        // rect.setAttributeNS(null, 'fill', '#353535')
        rect.setAttributeNS(null, 'fill', 'transparent')
        rect.setAttributeNS(null, 'width', this.width)
        rect.setAttributeNS(null, 'height', this.height)
        
        svg.appendChild(rect)

        // create line
        let line = document.createElementNS(SVG_NS, 'line')
        line.setAttributeNS(null, 'x1', this.width/2)
        line.setAttributeNS(null, 'x2', this.width/2)
        line.setAttributeNS(null, 'y1', 0)
        line.setAttributeNS(null, 'y2', this.height)
        line.setAttributeNS(null, 'stroke', 'white')
        line.setAttributeNS(null, 'stroke-width',4)
        line.setAttributeNS(null, 'stroke-dasharray', 5)

        svg.appendChild(line)

    }
}