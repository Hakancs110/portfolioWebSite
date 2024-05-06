import * as THREE from 'three'
import Experience from '../Experience.js'

export default class BasicMeshes
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources        
        this.debug = this.experience.debug
        this.time = this.experience.time
       if(this.debug.active)
       {
           this.debugFolder = this.debug.ui.addFolder('foax')



       }
       this.resource = this.resources.items.meModel
    //    this.setGeometry()
    //    this.setTextures()
    this.setMaterial()
       this.setModel()

    //    this.setMesh()
    //    this.setPositions()
    }

    setModel()
    {
        console.log("haydiii")
        this.model = this.resource.scene
        this.model.scale.set(3,3,3)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                console.log(child)
                console.log("haydiii")
                child.castShadow = true
                child.material = this.toonMaterial
            }
        })
    
    }
    // setGeometry()
    // {
    //     this.geometry = new THREE.CircleGeometry(5, 64)
    // }

    // setTextures(){
    //     this.textures = {}

    //     this.textures.color = this.resources.items.grassColorTexture
    //     this.textures.color.colorSpace = THREE.SRGBColorSpace
    //     this.textures.color.repeat.set(1.5, 1.5)
    //     this.textures.color.wrapS = THREE.RepeatWrapping
    //     this.textures.color.wrapT = THREE.RepeatWrapping

    //     this.textures.normal = this.resources.items.grassNormalTexture
    //     this.textures.normal.repeat.set(1.5,1.5)
    //     this.textures.normal.wrapS = THREE.RepeatWrapping
    //     this.textures.normal.wrapT = THREE.RepeatWrapping
    // }

    setMaterial()
    {
        console.log("kladjs")

        this.toonMaterial = new THREE.MeshToonMaterial({ 
            color: 0x2194ce, // Malzeme rengi
            emissive: 0x0,   // Işık yayan renk (isteğe bağlı)

          });
    }
    setMesh()
    {
        console.log("haydiii")

        this.mesh1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 60),
        )
        this.scene.add(this.mesh1, this.mesh2, this.mesh3)
    }

    setPositions()
    {
        const objectsDistance = -4
        this.model.position.x = -2;
        if(this.experience.sizes.width >0 && this.experience.sizes.width<800)
        this.model.position.x = 0;
        else if(this.experience.sizes.width >760 && this.experience.sizes.width<900)
        this.model.position.x = -1;



        this.sectionMeshes =[this.model]
        
        for(const mesh of this.sectionMeshes){

            mesh.rotation.y = this.time.elapsed*0.00012
      

        }

        
    }

}