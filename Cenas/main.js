const larguraJogo = 1120; //Altura da página
const alturaJogo = 840; //Largura da página

window.onload = function()
{
    let gameConfig = 
    {   
        // Definições principais do jogo
        
        type: Phaser.AUTO, 
        scale:{
            width:larguraJogo,
            height:alturaJogo,
            autoCenter:Phaser.Scale.CENTER,
        },

        // Adição da física no jogo
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300},
                debug: false 
            }
        },
        
        backgroudColor: '#FFFFFF',
        scene:[inicio, raposa],//fases e menus
        parent: 'game',
        dom:{
            createContainer: true
        },
    };
    game = new Phaser.Game(gameConfig);

    window.focus();
}





