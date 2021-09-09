import { Image } from "./class/image.js";
import { Video } from "./class/video.js";
import { viewPhotograph } from "./function/view.js";
import { selectionPhotograph } from "./function/selection.js";
import { displayLikes } from "./function/display.js";


export const mediaList = [];
export function getTotalLikes(medias) {
    let total = 0;
    for (let i = 0; i < medias.length; i++) {
        total += medias[i].likes;
    }
    return total;
}

fetch("./FishEyeData.json")
    .then(data => data.json())
    .then(result => {

        const param = new URLSearchParams(document.location.search);
        const photographerId = Number(param.get("id"));
        let activePhotographerData = {};
         
        for (let i = 0; i < result.photographers.length; i++) {

            if (result.photographers[i].id === photographerId) {
 
                activePhotographerData = result.photographers[i];
                viewPhotograph(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tagline, result.photographers[i].tags, result.photographers[i].portrait);
            }
        }

        selectionPhotograph();

        for (let i = 0; i < result.media.length; i++) {
            let newMedia;
            if (result.media[i].photographerId === photographerId) {
               
                if (result.media[i].image) {
 
                    const firstName = activePhotographerData.name.split(" ")[0];
                    const src = `../Photos/${firstName}/${result.media[i].image}`;
                    newMedia = new Image(result.media[i].id, result.media[i].photographerId, result.media[i].title, src, result.media[i].tags, result.media[i].likes, result.media[i].date, result.media[i].price); 
                }
                else {
                    const firstName = activePhotographerData.name.split(" ")[0];
                    const src = `../Photos/${firstName}/${result.media[i].video}`;
                    newMedia = new Video(result.media[i].id, result.media[i].photographerId, result.media[i].title, src, result.media[i].tags, result.media[i].likes, result.media[i].date, result.media[i].price);
                }
                newMedia.render();
                mediaList.push(newMedia);
            }
        }

        let totalLikes = getTotalLikes(mediaList);
        console.log(totalLikes);

        for (let i = 0; i < result.photographers.length; i++) {

            if (result.photographers[i].id === photographerId) {  
                displayLikes(result.photographers[i].price);
            }
        }
    })


