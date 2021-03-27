export default class Alert {
    constructor(id){
        this.alert = document.getElementById(id);
    } 

    show(){
        this.alert.classList.remove('d-none');
        this.alert.innerText = 'Title and Description are requiered';
    }

    hide(){
        this.alert.classList.add('d-none');
    }
}