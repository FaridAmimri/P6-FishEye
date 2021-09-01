import { Image } from "./class/image.js";
import { Video } from "./class/video.js";
import { viewPhotograph } from "./function/view.js";
import { selectionPhotograph } from "./function/selection.js";


const mediaList = [];

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
        console.log(mediaList);

        function getTotalLikes() {
            let total = 0;

            for (let i = 0; i < result.media.length; i++) {
                
                if (result.media[i].photographerId === photographerId) {
                total += result.media[i].likes;
                }
            }
            return total;
        }

        getTotalLikes();
        let totalLikes = getTotalLikes(mediaList);
        console.log(totalLikes);
    })


