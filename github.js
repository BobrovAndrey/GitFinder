class Github{
constructor (){
  this.client_id = '37180df27d93f5337c19';
  this.client_secret = '709910f9fe324ad1b8941ccffec61d61056282d7';
}

async getUser(user){
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();

    return{
      profile
    }
  }
  
}