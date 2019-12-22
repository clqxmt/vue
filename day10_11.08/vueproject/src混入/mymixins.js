const mymixins={
    data(){
        return{
            username:"Alley"
        }
    },
    methods:{
        hello(){
            alert(this.username);
        }
    }
}

export default mymixins