export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'green');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly CPLUSPLUS = new Tag('C++', 'orange');
    static readonly UNREAL = new Tag('UnrealEngine', 'black');
    static readonly THYMELEAF = new Tag('Thymeleaf', 'blue');

    

    private constructor(private readonly key:string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}