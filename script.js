n=73
a=Number(prompt("Choose the Level :\n1] Easy : 15 Attempts.\n2] Medium : 10 Attempts.\n3] Hard : 5 Attempts"))
function startGame(level){
switch(level) {
    case 1:
        b = 15;
        break;
    case 2:
        b = 10;
        break;
    case 3:
        b = 5;
        break;
    default:
        b = 0;
}
if(a=1)
{
    console.log("Easy Level.\nYou Have 15 attempts.")
    for(i=0;i<=15;i++)
{
    m=Number(prompt("Guess the Number(0 to 100) : "))
    if((m>=0) & (m<=100))
    {
        if(m>n)
    {
        console.log(`Jackpot is Smaller than ${m}`)
    }
    else if(m<n)
    {
        console.log(`Jackpot is Greater than ${m}`)
    }
    else if(m=n)
    {
        console.log("YOU WON THE JACKPOT!!!")
        break;
    }
    }
    else
    {
        console.log("Invalid Input")
    }
}
}
else if(a=2)
{
    console.log("Medium Level.\nYou Have 10 attempts.")
    for(i=0;i<=10;i++)
{
    m=Number(prompt("Guess the Number(0 to 100) : "))
    if((m<=100)&(m>=0))
    {
        if(m>n)
    {
        console.log(`Jackpot is Smaller than ${m}`)
    }
    else if(m<n)
    {
        console.log(`Jackpot is Greater than ${m}`)
    }
    else if(m=n)
    {
        console.log("YOU WON THE JACKPOT!!!")
        break;
    }
    }
    else
    {
        console.log("Invalid Input")
    }
}
}
else if(a=3)
{
    console.log("Hard Level.\nYou Have 5 attempts.")
    for(i=0;i<=5;i++)
        {
            m=Number(prompt("Guess the Number(0 to 100) : "))
            if((m<=100) & m>=0)
                {
                    if(m>n)
                        {
                        console.log(`Jackpot is Smaller than ${m}`)
                        }
            else if(m<n)
                        {
                        console.log(`Jackpot is Greater than ${m}`)
                        }
            else if(m=n)
                        {
                        console.log("YOU WON THE JACKPOT!!!")
                        break;
                        }
                }
    else
    {
        console.log("Invalid Input.")
    }
}
}
else
{
    console.log("Invalid Input.")
}
}

