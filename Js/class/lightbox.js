export class Lightbox {

    /* Construction du DOM */  
    static init() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="lightbox" style="display:none">
               <i class="fas fa-times lightbox__close"></i>
               <i class="fas fa-angle-right lightbox__next"></i>
               <i class="fas fa-angle-left lightbox__prev"></i>
               <div class="lightbox__container">
               </div>
           </div>
        `);
    }

    /* Ouvre la lightbox */    
    static open(media) {
        const lightBox = document.querySelector(".lightbox");
        lightBox.style.display = "block";
        media.load();
    }

    /* Change de slide */    
    static switch(media) {
        const arrowRight = document.querySelector(".lightbox__next");
        arrowRight.addEventListener("click", () => {
            media.next();
        })
    }

    /* Ferme la lightbox */  
    static close() {
        const lightBox = document.querySelector(".lightbox");
        const content = document.querySelector(".lightbox__container");
        const btnClose = document.querySelector(".lightbox__close");
        btnClose.addEventListener("click", () => {
            lightBox.style.display = "none";
            content.textContent = "";
        });
    }


}
















/**
  static init() {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<i class="fas fa-times lightbox__close"></i>
        <i class="fas fa-angle-right lightbox__next"></i>
        <i class="fas fa-angle-left lightbox__prev"></i>
            <div class="lightbox__container">
                <img src="" alt="">
            </div>`
        return dom
    }

    static consTructor(url) {
        this.element = this.init(url)
        this.loadImage(url)
        document.body.appendChild(this.element)
    }

    static loadImage(url) {
        const image = new Image()
        const container = this.element.querySelector(".lightbox__container")
        image.src = url
        image.onload = function () {
            container.appendChild(image)
        }
    }

    static closeModal() {
        const lightBox = document.querySelector(".lightbox");
        const content = document.querySelector(".lightbox__container");
        const btnClose = document.querySelector(".lightbox__close");
        btnClose.addEventListener("click", () => {
            lightBox.style.display = "none";
            content.textContent = "";
        });
    }

    static changeSlide(media) {
        const content = document.querySelector(".lightbox__container");
        const arrowRight = document.querySelector(".lightbox__next");
        arrowRight.addEventListener("click", () => {
            content.textContent = "";
            media.renderPopup();
        })
    }
 */
   


/**
static init() {
    const links = document.querySelectorAll(".album")
        .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('album'))
        }))
}

constructor(url) {
    this.element = this.buildDOM(url)
    this.loadImage(url)
    document.body.appendChild(this.element)
}

 loadImage(url) {
    const image = new Image()
    image.src = url
    const container =  this.element.querySelector('lightbox__container')
    container.appendChild(image)
}

 buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<i class="fas fa-times lightbox__close"></i>
    <i class="fas fa-angle-right lightbox__next"></i>
    <i class="fas fa-angle-left lightbox__prev"></i>
        <div class="lightbox__container">
            <img src="${url}" alt="">
        </div>`
    return dom
}


    <div class="lightbox">
    <i class="fas fa-times lightbox__close"></i>
    <i class="fas fa-angle-right lightbox__next"></i>
    <i class="fas fa-angle-left lightbox__prev"></i>
    <div class="lightbox__container">
        <img src="" alt="">
    </div>
    </div>


*/
