class raposa extends Phaser.Scene {
    constructor() {
        super({ 
            key: 'raposa',
       });

       // Definição da classe e seu nome
    }


    preload() {
        this.load.image ('fundo2', 'assets/fundo.png');
        this.load.image ('plataforma1', 'assets/tijolos.png');
        this.load.image ('moeda', 'assets/moeda.png');
        this.load.spritesheet ('raposa', 'assets/spritesheet/fox.png', { frameWidth: 64, frameHeight: 64 });
       
    }

    create() {
        
        this.add.image ( larguraJogo/2, alturaJogo/2, 'fundo2').setScale(2.55);
        plataformas = this.physics.add.staticGroup();
        plataformas.create ( 950, 280, 'plataforma1').setScale(1.1);
        plataformas.create ( 700, 520, 'plataforma1').setScale(1.1);
        plataformas.create ( 400, 400, 'plataforma1').setScale(1.1);
        plataformas.create ( 150, 640, 'plataforma1').setScale(1.1);
        plataformas.create ( 0, 830, 'plataforma1').setScale(7.5,1).setOrigin(0,0);
        
        // Criando a sprite do personagem
        player = this.physics.add.sprite(100, 450, 'raposa').setScale(2).setFlip(true,false);

        player.setBounce(0.2);

        // Criação a coli
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'esquerda',
            frames: this.anims.generateFrameNumbers('raposa', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'parado',
            frames: [ { key: 'raposa', frame: 49 } ],
            frameRate: 20
        }); 

        this.anims.create({
            key: 'direita',
            frames: this.anims.generateFrameNumbers('raposa', { start: 9, end: 14 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'pular',
            frames: this.anims.generateFrameNumbers('raposa', { start: 6, end: 8 }),
            frameRate: 20,
            repeat: -1
        });

        teclado = this.input.keyboard.createCursorKeys();

        player.body.setSize(20, 40, true);

        moeda = this.physics.add.sprite(larguraJogo/2, 0, 'moeda');
        moeda.setCollideWorldBounds(true);
        moeda.setBounce(0.7)

        this.physics.add.collider(player, plataformas);
        this.physics.add.collider(moeda, plataformas);

        placar = this.add.text(50, 50, 'moeda:' + pontuacao, {fontSize: '45px', fill: '#FFFFFF'});


        this.physics.add.overlap(player, moeda, function (){

            moeda.setVisible(false); // Falso para que a moeda fique "invisivel"

            var posicaoMoeda_Y = Phaser.Math.RND.between(50, 650); // Sorteia número para proxima posição da moeda
            moeda.setPosition(posicaoMoeda_Y, 100); // Ajusta a posição da moeda

            pontuacao +=1; // Soma pontuação
            placar.setText('moeda:' + pontuacao); // Atualiza texto do placar

            moeda.setVisible(true); // Ativa a visão da "nova moeda"

          });
        

       

    }

    update() {

        if (teclado.left.isDown)
        {
            player.setFlipX(false)

            player.setVelocityX(-160);

            player.anims.play('esquerda', true);
        }

        else if (teclado.right.isDown)
        {
            player.setFlipX(true);

            player.setVelocityX(160);

            player.anims.play('direita', true);
        }

        else 
        {
            player.setVelocityX(0);
            player.anims.play('parado');
        }  

        if (teclado.up.isDown && player.body.blocked.down) 
        {
            player.setVelocityY(-400);
            player.anims.play('pular', true);
        }
    }
}

var plataformas;
var player;
var teclado;
var moeda;
var placar;
var pontuacao = 0;


