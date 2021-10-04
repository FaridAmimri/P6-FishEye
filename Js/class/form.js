export class Form {
    constructor(photograph) {
        this.photograph = photograph
    }

    /* Ouvre le formulaire */
    open(media) {
        const modal = document.querySelector('.modal')
        modal.style.display = 'block'

        const form = document.querySelector('form')
        const profil = document.querySelector('form h1')
        const contact = document.querySelector('#photographer')
        const photographer = media

        contact.append(photographer)
        profil.append(contact)
        form.append(profil)
    }

    /* Ferme le formulaire */
    close() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'none'
    }

    /* Validation du prénom */
    firstNameCheck() {
        const firstName = document.querySelector('#first')
        const divParent = firstName.parentNode
        if (firstName.value.length < 2) {
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Vous devez entrer votre nom')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    /* Validation du nom */
    lastNameCheck() {
        const lastName = document.querySelector('#last')
        const divParent = lastName.parentNode
        if (lastName.value.length < 2) {
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Vous devez entrer votre prénom')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    /* Validation de l'email */
    emailCheck() {
        const email = document.querySelector('#email')
        const divParent = email.parentNode
        const emailReg = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g') // Expression régulière à respecter
        if (!emailReg.test(email.value)) { // test email sur la base de la RegExp
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Vous devez entrer votre email')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    /* Validation du message */
    messageCheck() {
        const message = document.querySelector('#message')
        const divParent = message.parentNode
        if (message.value.length < 20) {
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Message de minimum 20 caractères')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    /* Soumission du formulaire */
    submit() {
        const form = document.querySelector('form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const firstNameValid = this.firstNameCheck()
            const lastNameValid = this.lastNameCheck()
            const emailValid = this.emailCheck()
            const messageValid = this.messageCheck()
            const isValid = firstNameValid && lastNameValid && emailValid && messageValid

            if (isValid) {
                const modal = document.querySelector('.modal')
                const modalBody = document.querySelector('.modal-body')
                const paragraph = document.createElement('p')

                modal.style.display = 'block'
                form.style.display = "none"
                paragraph.textContent = "Votre message a bien été envoyé"
                modalBody.append(paragraph)
                form.reset();

                const closeModal = document.querySelector('.close')
                closeModal.addEventListener('click', () => {
                    this.close()
                    paragraph.remove();
                    form.reset();

                })
            }
        })
    }





    /* 
    firstNameCheck() {
        const firstName = document.querySelector('#first')
        const divParent = firstName.parentNode
        console.log(divParent)
        if (firstName.value.length < 2) {
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Veuillez entrer votre prénom')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    
    lastNameCheck() {
        const lastName = document.querySelector('#last')
        const divParent = lastName.parentNode
        if (lastName.value.length < 2) {
            divParent.setAttribute('data-error-visible', 'true')
            divParent.setAttribute('data-error', 'Veuillez entrer votre nom')
            return false
        } else {
            divParent.setAttribute('data-error-visible', 'false')
            return true
        }
    }

    submit(e) {
        e.preventDefault()
        const isFirstNameValid = this.firstNameCheck()
        const isValid = isFirstNameValid

        if (isValid) {
            const modal = document.querySelector('.modal')
            modal.style.display = 'block'
            const modalForm = document.querySelector('form')
            modalForm.style.display = "none";
            const validMessage = document.createElement('p')
            validMessage.textContent = 'Votre message a été envoyé'
            const modalBody = document.querySelector('.modal-body')
            modalBody.append(validMessage)

            const closeModal = document.querySelector('.close')
            closeModal.addEventListener('click', () => {
                this.closeForm()
            })
        }
    } */
}
