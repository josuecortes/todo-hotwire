import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"
window.Modal = Modal

export default class extends Controller {
  static values = {
    task: String

  }

  connect(){
    console.log("estou vivo")
    super.connect()
    
  }

  abrirModal(event){
    let contentModal = document.getElementById('form-'+ this.taskValue)
    $(contentModal).removeClass('d-none')
    
    let modalBody = document.getElementById('content-body')
    $(modalBody).html(contentModal)
    let modalTask = new Modal(document.getElementById('modal'), {
      keyboard: false,
      backdrop: true 
    })
    modalTask.show()
  }
}