import { Image } from "./class/image.js";
import { Video } from "./class/video.js";
import { viewPhotograph } from "./function/view.js";
import { selectionSort } from "./function/selection.js";
import { displayLikes, displayPrice } from "./function/display.js";
import { Lightbox } from "./class/lightbox.js";
import { Form } from "./class/form.js";

export const mediaList = [];
export const mediaDom = document.querySelectorAll('.media');
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

        selectionSort();

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
        console.log(totalLikes)
        for (let i = 0; i < result.photographers.length; i++) {
            if (result.photographers[i].id === photographerId) {
                displayLikes();
                displayPrice(result.photographers[i].price);
            }
        }

        /* lightbox */
        const myLightbox = new Lightbox(mediaList);
        myLightbox.init();

        const mediaDom = document.querySelectorAll('.media');
        for (let i = 0; i < mediaDom.length; i++) {
            mediaDom[i].addEventListener('click', () => {
                myLightbox.open(mediaList[i]);
            });
        }

        /* select media by popularity  */
        const popularity = document.querySelector('.popularity')
        // console.log(popularity)

        popularity.addEventListener('click', () => {
            mediaList.sort((a, b) => {
                if (a.likes < b.likes) return -1
                if (a.likes > b.likes) return 1
                return 0
            })

            document.querySelector('article').innerHTML = "";

            for (let i = 0; i < mediaList.length; i++) {
                mediaList[i].render();
            }
        })

        /* select media by date */
        const date = document.querySelector('.date')
        // console.log(date)

        date.addEventListener('click', () => {
            mediaList.sort((a, b) => {
                if (a.date < b.date) return -1
                if (a.date > b.date) return 1
                return 0
            })

            document.querySelector('article').innerHTML = "";

            for (let i = 0; i < mediaList.length; i++) {
                mediaList[i].render();
            }
        })

        /* select media by title */
        const title = document.querySelector('.title')
        // console.log(title)

        title.addEventListener('click', () => {
            mediaList.sort((a, b) => {
                if (a.title < b.title) return -1
                if (a.title > b.title) return 1
                return 0
            })

            document.querySelector('article').innerHTML = "";

            for (let i = 0; i < mediaList.length; i++) {
                mediaList[i].render();
            }
        })

        /* registration form */
        const myForm = new Form()
        myForm.submit()
        
        const openModal = document.querySelector('.contact_me')
        const closeModal = document.querySelector('.close')
       
        for (let i = 0; i < result.photographers.length; i++) {
            if (result.photographers[i].id === photographerId) {
                /* launch modal form onclick */
                openModal.addEventListener('click', () => {
                    myForm.open(result.photographers[i].name)
                })
                /* close modal form onclick */
                closeModal.addEventListener('click', () => {
                    myForm.close()
                }) 
            }   
        }
    })

