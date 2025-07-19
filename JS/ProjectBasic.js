class Calculator{
    constructor(displayelement){
    this.displayelement = displayelement;
    
    this.clear();
    }
};

clear(){
    this.currentValue = '';
}