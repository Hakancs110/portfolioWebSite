import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './Experience.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()

        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.scrollY = window.scrollY
        window.addEventListener('scroll', ()=>
        {
            this.scrollY = window.scrollY
            // console.log(scrollY)
        })
        this.setInstance()
        // this.setControls()
    }

    setPosition(){
        this.instance.position.y = -this.scrollY/this.sizes.height*4
    }
    setInstance(){
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.z = 9
        this.scene.add(this.instance)
    }

    setControls(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true;
    }

    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.setPosition()
    }
}