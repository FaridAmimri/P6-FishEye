import { mediaList } from "../photograph.js";

export class Lightbox {
    constructor(listMedia) {
        this.listMedia = listMedia
        this.onKeyUp = this.onKeyUp.bind(this)
    }

    /* Initialisation du DOM */
    init() {
        const lightbox = document.createElement('div');
        lightbox.className ='lightbox';
        lightbox.style.display = 'none';
        const close = document.createElement('i');
        close.className = 'fas fa-times lightbox__close';
        lightbox.append(close)
        const next = document.createElement('i');
        next.className = 'fas fa-angle-right lightbox__next';
        lightbox.append(next)
        const prev = document.createElement('i');
        prev.className = 'fas fa-angle-left lightbox__prev';
        lightbox.append(prev)
        const title = document.createElement('p');
        title.className = 'lightbox__title';
        lightbox.append(title)
        const container = document.createElement('div');
        container.className = 'lightbox__container';
        lightbox.append(container)

        document.querySelector('main').append(lightbox)
        document.addEventListener('keyup', this.onKeyUp.bind(this))

        close.addEventListener('click', () => {
            this.close();
        })

        next.addEventListener('click', () => {
            this.next();
        })

        prev.addEventListener('click', () => {
            this.prev();
        })
    }

    /* Ouvre la lightbox */  
    open(media) {
        this.visibleMedia = media;
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';
        media.load();
    }
    
    /* Navigation des slides vers la droite */
    next() {
        const mediaDom = document.querySelectorAll('.media');
        let etape = mediaList.indexOf(this.visibleMedia);
        etape++;
        if (etape >= mediaDom.length) {
            etape = 0;
        }
        const container = document.querySelector('.lightbox__container');
        container.textContent = "";
        this.visibleMedia = mediaList[etape];
        mediaList[etape].load();
    }

    /* Navigation des slides vers la gauche */
    prev() {
        const mediaDom = document.querySelectorAll('.media');
        let etape = mediaList.indexOf(this.visibleMedia);
        etape--;
        if (etape <= -1) {
            etape = mediaDom.length-1;
        }
        const container = document.querySelector('.lightbox__container');
        container.textContent = "";
        this.visibleMedia = mediaList[etape];
        mediaList[etape].load();
    }

    /* Ferme la lightbox */  
    close() {
        const lightbox = document.querySelector(".lightbox");
        lightbox.style.display = 'none';
        document.querySelector(".lightbox__container").innerHTML = "";
        document.removeEventListener('keyup', this.onKeyUp)
    }

    /* Navigation au clavier */ 
    onKeyUp(e) { 
        if (e.key === 'Escape') { /* Fermeture */ 
            this.close(e)
        } else if (e.key === 'ArrowRight') { /* Navigation vers la droite */ 
            this.next(e)
        } else if (e.key === 'ArrowLeft') { /* Navigation vers la gauche*/ 
            this.prev(e)
        }
    }
}