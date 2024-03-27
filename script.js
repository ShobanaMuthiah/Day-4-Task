//Day 4 Task
//Task 1 

//Using annonymous function

//a. print odd number in an array
console.log('\nPrinting outputs using annonymous function\n')
var arr=[11,4,7,5,3,8,2,12,56,23]
var result=[];
var a=function() {

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
           result.push(arr[i]);
        }
        
    }
    return result;
}
console.log(a());

//b. Convert all the strings to title caps in a string array

var str="welcome to javascript";
var b= function()
{
    var str1=str.toLowerCase();
    var str2=str1.split(' ');
    
    var str3=[];
    for(var i=0;i<str2.length;i++)
    {
        str3.push(str2[i].charAt(0).toUpperCase()+str2[i].slice(1));
    }
    return str3.join(' ');
}
console.log(b());

//c. Sum of all numbers in an array

var a1=[3,5,7,2,4,6,7,9];
var fun= function(){
var sum=0;
    for(var i=0;i<a1.length;i++)
    {
        
       sum=sum+a1[i];
    }
    return sum;
}
console.log(fun());

//d. Return all the prime numbers in an array

var ar=[5,2,3,4,8,19,34,74,23];
var pri=[];
var prime=function()
{
    var factor=ar;
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i]%2!==0 && ar[i]!==factor*factor || ar[i]===2 || ar[i]===0) 
        {
            pri.push(ar[i]);
        }
    }
    return pri;
}
console.log(prime());

//e. Return all the palindromes in an array

const array = ['ada','mall','apple','dad','malayalam']
const pal=[];
const ispali=function(){

    for(var i=0;i<array.length;i++)
   {
    var a10=array[i];
    let rev=[];
    for(var j=a10.length-1;j>=0;j--)
    {
        rev+=a10[j];
    }
    if(rev===a10)
    {
        pal.push(a10);
    }

   }
   return pal
}
console.log(ispali());


//f. Return median of two sorted array of same size

var ar1=[3,22,66,12,33];
var ar2=[46,9,14,61,70];
var merg=ar1.concat(ar2);
var st=merg.sort(function(a,b){return a-b});
console.log(st);
var med=function()
{
    var len=st.length;
    var mid=len/2;
    if(len%2===0)
    {
      var n=st[mid-1]+st[mid];  
        var m=Math.abs(n/2);
    }  
    else
    {
        m=st[mid]
    }  
    return m;
}
console.log(med());

//g. Removing duplicate values in an array

var ar3=['mango','mango','apple','pineapple','lemon','orange','mango','lemon']
var d=[];
// let ind=0;
var dup=function()
{
    for(let i of ar3 )
    {
            if(d.indexOf(i)===-1)
            {
                d.push(i);            
            }
     
    }
    return d;
}
console.log(dup());

//h. Rotate an array by k times

var a0=[2,5,7,9,1];
var r=a0;
var rot=function(){
    
  r.push(a0.shift());
   return r;
}
for(var i=0;i<a0.length;i++)
{
    console.log(rot())
}



//Using IIFE function
console.log('\nPrinting outputs using IIFE function\n')

// a. odd numbers
var arr=[11,4,7,5,3,8,2,9,56,23]
var result=[];
(function() {

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
           result.push(arr[i]);
        }
        
    }
    console.log(result);
})(arr);

//b.Convert all the strings to title caps in a string array

var str="welcome to javascript";
(function()
{
    var str1=str.toLowerCase();
    var str2=str1.split(' ');
    
    var str3=[];
    for(var i=0;i<str2.length;i++)
    {
        str3.push(str2[i].charAt(0).toUpperCase()+str2[i].slice(1));
    }
    console.log( str3.join(' '));
})(str);

//c.Sum of all numbers in an array

var a1=[3,5,7,2,4,6,7,9];
(function(){
var sum=0;
    for(var i=0;i<a1.length;i++)
    {
        
       sum=sum+a1[i];
    }
    console.log( sum);
})(a1);

//d. Return all the prime numbers in an array

var ar=[5,2,3,4,8,19,34,74,23];
var pri=[];
(function()
{
    var factor=ar;
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i]%2!==0 && ar[i]!==factor*factor || ar[i]===2 || ar[i]===0) 
        {
            pri.push(ar[i]);
        }
    }
    console.log( pri);
})(ar);

//e.Return all the palindromes in an array

const array1 = ['ada','mall','apple','dad','malayalam']
const pal1=[];
(function(){

    for(var i=0;i<array1.length;i++)
   {
    var a10=array1[i];
    let rev=[];
    for(var j=a10.length-1;j>=0;j--)
    {
        rev+=a10[j];
    }
    if(rev===a10)
    {
        pal1.push(a10);
    }

   }
   console.log(pal1);
})(array1);

//f. Return median of two sorted array of same size

var ar1=[3,22,66,12,33];
var ar2=[46,9,14,61,70];
var merg=ar1.concat(ar2);
var st=merg.sort(function(a,b){return a-b});
console.log(st);
(function()
{
    var len=st.length;
    var mid=len/2;
    if(len%2===0)
    {
      var n=st[mid-1]+st[mid];  
        var m=Math.abs(n/2);
    }  
    else
    {
        m=st[mid]
    }  
    console.log(m) ;
})(st);

//g. Removing duplicate values in an array

var ar3=['mango','mango','apple','pineapple','lemon','orange','mango','lemon']
var d=[];
(function()
{
    for(let i of ar3 )
    {
            if(d.indexOf(i)===-1)
            {
                d.push(i);            
            }
     
    }
    console.log( d);
})(ar3);

//h. Rotate an array by k times

var a0=[2,5,7,9,1];
var r=a0;
for(var i=0;i<a0.length;i++)
{
    (function(){
    
        r.push(a0.shift());
        console.log(r);
      })(a0);
}

//Task 1 

//Using arrow function

//a. print odd number in an array
console.log('\nPrinting outputs using arrow function\n')
var arr=[11,4,7,5,3,8,2,12,56,23]
var result=[];
var a=(arr)=> {

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
           result.push(arr[i]);
        }
        
    }
    return result;
}
console.log(a(arr));

//b. Convert all the strings to title caps in a string array

var str="welcome to javascript";
var b=(str)=>
{
    var str1=str.toLowerCase();
    var str2=str1.split(' ');
    
    var str3=[];
    for(var i=0;i<str2.length;i++)
    {
        str3.push(str2[i].charAt(0).toUpperCase()+str2[i].slice(1));
    }
    return str3.join(' ');
}
console.log(b(str));

// //c. Sum of all numbers in an array

var a1=[3,5,7,2,4,6,7,9];
var fun= (a1)=>{
var sum=0;
    for(var i=0;i<a1.length;i++)
    {
        
       sum=sum+a1[i];
    }
    return sum;
}
console.log(fun(a1));

// //d. Return all the prime numbers in an array

var ar=[5,2,3,4,8,19,34,74,23];
var pri=[];
var prime=(ar)=>
{
    var factor=ar;
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i]%2!==0 && ar[i]!==factor*factor || ar[i]===2 || ar[i]===0) 
        {
            pri.push(ar[i]);
        }
    }
    return pri;
}
console.log(prime(ar));

// //e. Return all the palindromes in an array

const array2 = ['ada','mall','apple','dad','malayalam']
const pal2=[];
const ispali2=(array)=>{

    for(var i=0;i<array2.length;i++)
   {
    var a10=array2[i];
    let rev=[];
    for(var j=a10.length-1;j>=0;j--)
    {
        rev+=a10[j];
    }
    if(rev===a10)
    {
        pal2.push(a10);
    }

   }
   return pal2
}
console.log(ispali(array2));