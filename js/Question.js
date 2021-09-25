class Question {

  constructor() {
this.option2=createElement('h1')
    this.option=createElement('h1')
    this.title = createElement('h1')
    this.input1 = createInput("Enter answer.....");
   //Create a input box to enter the number
   this.input=createInput("").attribute("placeholder","enter your name ")
   this.playButton=createButton("play")
   this.greeting=createElement("h2")




this.input.position(40,30)
this.playButton.position(40,50)
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz:-who is elon musk???");
    this.title.position(350, 0);
    this.option.html("1.owner of microsoft")
    this.option.position(350,40)
this.option2.html("2.owner of tesla")
this.option2.position(350,80)
    //Create html() and position() for each question, input and answers.



    this.input1.position(190, 230);
    this.button.position(190, 260);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>checking answer...`;
      this.greeting.html(message);
    
      player.index = 1;
      //player.addPlayer();
    
    })


  }
}
