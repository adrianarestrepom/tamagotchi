


function Init(pet){
    const petName = pet;
    let energy = 100;
    let activity ="";
    petEnergy.textContent = `Energy:${energy}`;

    return{
        slepp: function () {
            if (energy <= 90){
                petImage.src = 'assets/joven.png';
                petMessage.textContent = `${petName} is sleeping`;
                activity = "slepping";
                energy += 10;
                petEnergy.textContent = `Energy:${energy}`;

                return {
                    energy,
                    activity
                }

            }
            
        }

    }
}