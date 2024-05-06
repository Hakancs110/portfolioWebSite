const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import { resolveObjectURL } from 'buffer'
import {resolve} from'path'
import { defineConfig, resolvePackageData } from 'vite'
export default defineConfig ({
    devDependencies:{
        autoprefixer: "^10",
        daisyui: "^3",
        postcss: "^8",
        tailwindcss: "^3",
    },
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox, // Open if it's not a CodeSandbox

    },
    build:
    {
        // cssCodeSplit:true,
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions:{
            input:{
                main: resolve(__dirname, './src/index.html'),
                CozyGoldenHourOfficeArticle: resolve(__dirname,'./src/CozyGoldenHourOffice/CozyGoldenHourOfficeArticle.html'),
                CozyGoldenHourOffice: resolve(__dirname,'./src/CozyGoldenHourOffice/CozyGoldenHourOffice.html'),
                avrupaYakasia: resolve(__dirname,'./src/AvrupaYakasiDergiOfisi/avrupaYakasi.html'),
                avrupaYakasiProcess: resolve(__dirname,'./src/AvrupaYakasiDergiOfisi/avrupaYakasiProcess.html'),
                metro: resolve(__dirname,'./src/metro/mainProjectPage/metroProjectPage.html'),
                metroFolder: resolve(__dirname,'./src/metro/mainProjectPage/metroProcessFolder.html'),
                metroCharacterArticle: resolve(__dirname,'./src/metro/Characters/Saxophonist/saxophonist.html'),
                metroCharactersFolder: resolve(__dirname,'./src/metro/Characters/charactersFolder.html')
                //METRO
                // metro: resolve(__dirname,'./src/metro/metro.html'),
                // characters:resolve(__dirname,'./src/metro/Character/character.html'),
                // mainCharacter:resolve(__dirname,'./src/metro/Character/MainCharacter/mainCharacter.html'),
                // sideCharacter:resolve(__dirname,'./src/metro/Character/SideCharacter/sideCharacter.html'),
                // faceretopology:resolve(__dirname,'./src/metro/Character/MainCharacter/Process/FaceRetopology.html'),
                //Environment
                //     tubeModeling :resolve(__dirname,'./src/metro/Environment/Process/tubeModeling.html'),
                //     environmentProcess:resolve(__dirname,'./src/metro/Environment/envrionmentProcess.html'),
                // //Project Design
                //     projectDesign:resolve(__dirname,'./src/metro/ProjectDesign/projectDesign.html')
            
                }
        }
    }

})
