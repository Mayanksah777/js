class Animal//blueprint of the object
{
    constructor(name,legcount,speaks)
    {
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;


    }
      static my()//static method are associated with class 
      {

        console.log("Animal");
      }            
    speak()
    {
        console.log("hi there "+this.speaks);
    }
}
console.log(Animal.my());//call something directly from the class by static
console.log(Animal.speak());//it's only called when there is object of a class
let dog=new Animal("dog",4,"Barks");
let cat=new Animal("cat",4,"meow");
dog.speak();
cat.speak();