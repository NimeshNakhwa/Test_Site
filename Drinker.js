
    arr=[
        {'name' : 'Nimesh' , 'age':23 },
        {'name' : 'Harsh' , 'age': 24 },
        {'name' : 'Shlok' , 'age':18 },
        {'name' : 'Baibhav' , 'age': 23 },
        {'name' : 'Aman' , 'age': 19}
    ]

    function checkAge()
    {
        for(i=0;i<arr.length;i++)
        {
            if(arr[i]['age']>=21)
            {
                console.log(`${arr[i]['name']} is Eligible for Drinking.`)
            }
            else if (arr[i]['age']<21)
            {
                console.log(`${arr[i]['name']} is not Eligible for Drinking.`)
            }
        }
    }

    checkAge(arr)
