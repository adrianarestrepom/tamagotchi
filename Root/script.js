const tamago = document.getElementsByClassName('tamagochi');
const petImage = document.getElementById('eating');
const petEnergy = document.querySelector('.energy-number');
const buttonSinging = document.getElementById("buttonSinging");
let petType = "";
let energy = 100;
let hunger = 0;
let status;
let petName = "";



function Init(pet){
    const petName = pet;
    
    return{
        singing: function () {
            if (energy <= 90){
                petImage.src = 'assets/joven.png';
                petMessage.textContent = `${petName} is sleeping`;
                activity = "slepping";
                energy += 10;
                petImage.src = "https://tenor.com/view/pokemon-jigglypuff-happy-smile-gif-4707068";
                petEnergy.textContent = `Energy:${energy}`;
                petMessage.textContent = `${petName} is sleeping`;
                status = "singing";
       
        
        

                return {
                    energy,
                    activity
                }

            }
            
        }

    }
}

const myPet = Init();

buttonSinging.addEventListener('click', () => myPet.singing());