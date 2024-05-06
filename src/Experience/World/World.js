import * as THREE from 'three'
import Experience from '../Experience.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Environment from './Environment.js'
import BasicMeshes from './BasicMeshes.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        console.log("world3")


        this.resources.on('ready', () =>
        {
            // this.floor = new Floor()
            // this.fox = new Fox()
            this.basicMeshes = new BasicMeshes()
            this.environment = new Environment()
        })


    }

    update()
    {
        if(this.basicMeshes)
            this.basicMeshes.setPositions()
            
    }
}