const { ModelBuildInstance } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");

class Games{
    jokenpo(user){
        const options = ['pedra','papel','tesoura'];
        const loser = {
            'pedra': 'papel',
            'papel': 'tesoura',
            'tesoura': 'pedra'
        }
        switch (user){
            case 'pedra':
            case "papel":
            case "tesoura":
            const computer = options[Math.floor(Math.random() * options.length)];
            if(user === computer){
                return `Ops, eu também escolhi ${computer}, Deu empate`;
            }else{
                if(loser[user] === computer){
                    return `Ahh Você ganhou, Parabéns, eu escolhi ${computer}`;
                }else{
                    return `Eba, eu escolhi ${computer}, Você perdeu`;
                }
            }
            break;
        default:
            return 'Escolha Pedra, Papel ou Tesoura!';
        }
    }
}

module.exports = new Games();