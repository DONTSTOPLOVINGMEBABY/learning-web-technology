const dialog = document.querySelector("dialog")
// dialog.show() // Opens a non-modal dialog
dialog.showModal() // Opens a modal


setTimeout( () => dialog.close(), 3000 )