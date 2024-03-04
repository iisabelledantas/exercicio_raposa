class inicio extends Phaser.Scene {
    constructor() {
        super({ 
            key: 'inicio',
       });
       // Definição da classe, seu nome e a utilização do Phaser
    }

    preload() {
        this.load.image('fundo', 'assets/fundo.inicio.png');
        this.load.image('botao', 'assets/botao.start.png');
    }

    create() {
        this.add.image(larguraJogo/2, alturaJogo/2, 'fundo').setScale(1.5);
        this.botaoInicar = this.add.image (larguraJogo/2, alturaJogo/2, 'botao').setScale(0.75);

        // Adição do botão de iniciar e a troca de cenas
        this.botaoInicar.setInteractive ();
        this.botaoInicar.on ('pointerdown', () => {
            this.scene.stop('inicio');
            this.scene.start('raposa');
        })
    }

    update() 
    {}
}

