function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(speed){
        this.speed = speed;
        this.left += this.speed;
    }
    this.moveLeft = function(speed){
        this.speed = speed;
        this.left -= this.speed;
    }
    this.moveTop = function(speed){
        this.speed = speed;
        this.top += this.speed;
    }
    this.moveBot = function(speed){
        this.speed = speed;
        this.top -= this.speed;
    }

}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){


    let a = Math.floor((Math.random())*100)
    console.log(a);
    if((hero.left < window.innerWidth - hero.size) &&(hero.top < window.innerHeight - hero.size)){
        switch(a%4)
        {
            case 0:
                hero.moveRight(20);
                break;

            case 1:
                hero.moveLeft(20);
                break;
            case 2:
                hero.moveTop(20);
                break;

            case 3:
                hero.moveBot(20);
                break;

            default:
                break;
        }
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start,10 )

}

start();