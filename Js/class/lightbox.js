export class Lightbox {

    static displayModal() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="lightbox" id="lightbox" style="display:">
                <div class="lightbox__inner">
                    <button type="button" class="lightbox__close">
                        &times;
                    </button>
                    <div class="lightbox__content">
                    </div>
                </div>
            </div>
        `);
    }

    static closeModal() {
        const lightBox = document.querySelector("#lightbox");
        const btnClose = document.querySelector(".lightbox__close");
        const content = document.querySelector(".lightbox__content");

        function closeLightBox() {
            lightBox.style.display = "none";
            content.innerHTML = "";
        }

        btnClose.addEventListener("click", () => {
            closeLightBox();
        });
    }

    static openModal() {
        const lightBox = document.querySelector(".lightbox");
        const openMedia = document.querySelectorAll(".album");

        function openLightBox() {
            lightBox.style.display = "block";
        }

        openMedia.addEventListener("click", () => {
            openLightBox();
        });
    }

}




