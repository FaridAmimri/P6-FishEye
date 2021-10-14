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

        /* registration form */
        const myForm = new Form()
        myForm.submit()


        for (let i = 0; i < result.photographers.length; i++) {

            if (result.photographers[i].id === photographerId) {

                /* display photographers details */
                activePhotographerData = result.photographers[i];
                viewPhotograph(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tagline, result.photographers[i].tags, result.photographers[i].portrait);

                /* launch modal form onclick */
                const openModal = document.querySelector('.contact_me')
                openModal.addEventListener('click', () => {
                    myForm.open(result.photographers[i].name)
                })
                /* close modal form onclick */
                const closeModal = document.querySelector('.close')
                closeModal.addEventListener('click', () => {
                    myForm.close()
                })
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
        totalLikes
        for (let i = 0; i < result.photographers.length; i++) {
            if (result.photographers[i].id === photographerId) {
                displayLikes();
                displayPrice(result.photographers[i].price);
            }
        }

        /* lightbox */
        const myLightbox = new Lightbox(mediaList);
        myLightbox.init();

        function initMediaListener() {
            const mediaDom = document.querySelectorAll('.media');
            for (let i = 0; i < mediaDom.length; i++) {
                mediaDom[i].addEventListener('click', () => {
                    myLightbox.open(mediaList[i]);
                });
            }
        }
        initMediaListener()

        /* sorting medias by selected option */
        const select = document.querySelector('#option-select')

        select.addEventListener('change', (e) => {
            /* select media by popularity */
            if (e.target.value === 'popularity') {
                mediaList.sort((a, b) => {
                    if (a.likes < b.likes) return -1
                    if (a.likes > b.likes) return 1
                    return 0
                })
                document.querySelector('article').innerHTML = "";

                for (let i = 0; i < mediaList.length; i++) {
                    mediaList[i].render();
                }
                initMediaListener();
                
            }
            /* select media by date */
            if (e.target.value === 'date') {
                mediaList.sort((a, b) => {
                    if (a.date < b.date) return -1
                    if (a.date > b.date) return 1
                    return 0
                })
                document.querySelector('article').innerHTML = "";

                for (let i = 0; i < mediaList.length; i++) {
                    mediaList[i].render();
                }
                initMediaListener();
            }
            /* select media by title */
            if (e.target.value === 'title') {
                mediaList.sort((a, b) => {
                    if (a.title < b.title) return -1
                    if (a.title > b.title) return 1
                    return 0
                })
                document.querySelector('article').innerHTML = "";

                for (let i = 0; i < mediaList.length; i++) {
                    mediaList[i].render();
                }
                initMediaListener();
            }
        })
    })

