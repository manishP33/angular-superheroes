let saviorData = [
  {  name: 'SuperMan', phone: '9812345678', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_superman_52ab9ab32a25e2.57621569.jpg?itok=Y-ED_ba9'},
  {  name: 'BatMan', phone: '9817263546', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_batman_52ab7a8c79da39.68474144.jpg?itok=iHwyI5Vh'},
  {  name: 'WonderWomen', phone: '9825423342', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_wonderwoman_02_5806c464ac66d0.05666805.jpg?itok=6bFmFBYI'},
  {  name: 'Green Lantern', phone: '9867112235', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_greenlantern_52ab8925eb4700.01944682.jpg?itok=Z2jtIWLs'},
  {  name: 'The Flash', phone: '9826478972', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_flash_52ab9cddbe41e4.12336956.jpg?itok=MC7QDpJO'},
  {  name: 'Aqua Man', phone: '9825535467', home: 'DC-Comics', img_url: 'http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_aquaman_52ab62f3b52dd7.18364704.jpg?itok=CriJOjho'},
  { name: 'Hulk', phone: '9467112235', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg'},
  { name: 'Daredevil', phone: '9426478972', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg'},
  { name: 'SpiderMan', phone: '9425535467', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg'},
  { name: 'Deadpool', phone: '9432312235', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg'},
  { name: 'Doctor Strange', phone: '9444448972', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/6/e0/537ba82e8e465/standard_xlarge.jpg'},
  { name: 'Thor', phone: '9422325467', home: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg'}

]

angular
.module("saviorApp",[])
.controller("saviorsCtrl", [saviorController])

function saviorController(){
  this.saviors = saviorData
  this.addSavior = function(){
    let savior = {name: this.newSavior.name, phone: this.newSavior.phone, home: this.newSavior.home, photo: this.newSavior.img_url }
    this.saviors.push(savior)
    this.newSavior = {}
  }
  this.showPhoto = function(hero){
    this.img_url = hero.photo
  }
}
