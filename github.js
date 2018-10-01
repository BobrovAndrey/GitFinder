class Github{
constructor (){
  this.client_id = '37180df27d93f5337c19';
  this.client_secret = '860855676c8da5a0fcef9a084ca0477122f1483b';
}

async getUser(user){
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();

    return{
      profile
    }
  }
  
}