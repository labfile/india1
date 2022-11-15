class Hero{
        title = "default title";
        firstname = "default firstname";
        lastname = "default lastname";
        #mission = "my private mission";
        static version = 1001
        constructor(htitle, hfname, hlname){
            this.title = htitle;
            this.firstname = hfname;
            this.lastname = hlname;
        }
        fullname(){
            return this.firstname+" "+this.lastname;
        }
        get mission(){
            return this.#mission
        }
        set mission(nmission){
            this.#mission = nmission;
        }
    };

//    export { Hero as H }

export default Hero;