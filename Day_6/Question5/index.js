var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count=0;
let countMax=0;
let item;

for(var i=0; i<arr1.length;i++)
{
        for(var j=i;arr1.length;j++)
        {
            if(arr1[i]==arr1[j])
            {
                count++;
                if(count>countMax)
                {
                    countMax=count;
                    item=arr1[j];
                }
            }
        }
        count=0;
}

console.log(item+" ( " +countMax +" times ) ") ;