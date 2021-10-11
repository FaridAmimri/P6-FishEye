export class Form {
    constructor(photograph) {
        this.photograph = photograph
        this.onKeyUp = this.onKeyUp.bind(this)
    }

    /* open the form */
    open(fullname) {
        const modal = document.querySelector('.modal')
        modal.style.display = 'block'
        const contact = document.querySelector('#photographer')
        contact.textContent = fullname
    }

    /* close the form */
    close() {
        const form = document.querySelector('form')
        const modal = document.querySelector('.modal')
        modal.style.display = 'none'
        form.style.display = "block"
    }
    /* closing modal form by escape touch*/
    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        }
    }

    /* firstname validator */
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

    /* lastname validator */
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

    /* email validator */
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

    /* message validator */
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

    /* submission form */
    submit() {
        document.addEventListener('keyup', this.onKeyUp.bind(this))
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

                const firstName = document.querySelector('#first')
                console.log(firstName.value)
                const lastName = document.querySelector('#last')
                console.log(lastName.value)
                const email = document.querySelector('#email')
                console.log(email.value)
                const message = document.querySelector('#message')
                console.log(message.value)

                form.reset();

                const closeModal = document.querySelector('.close')
                closeModal.addEventListener('click', () => {
                    this.close()
                    paragraph.remove();
                })
            }
        })
    }
}