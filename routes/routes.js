module.exports = function(app){
	app.get('/teste', function(req, res){

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
		res.send(data);
	})
}
var data = [
  {
    "id": 1,
    "name": "Mouse",
    "price": 15.00,
    "uri":"https://www.google.com.br/search?biw=1405&bih=736&tbm=isch&sa=1&ei=8RrzWbTVE8f4wgSViLSYCw&q=mouse&oq=mouse&gs_l=psy-ab.3..0i67k1l3j0l7.19792.20351.0.20428.5.5.0.0.0.0.172.341.0j2.2.0....0...1.1.64.psy-ab..3.2.341....0.Dng1P_nR1m0#imgrc=Ma94cvUVPuWDLM:"

  },
  {
    
    "id": 2,
    "name": "Teclado",
    "price" : 49.90  ,
    "uri": "https://www.google.com.br/search?q=teclado&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-obOr25DXAhUDg5AKHa4xCKQQ_AUICygC&biw=1405&bih=736#imgrc=TzY2Hr45c0G1UM:"
  },
  {
    
    "id": 3,
    "name": "Monitor",
    "price": 2199.90,
    "uri": "https://www.google.com.br/search?biw=1405&bih=736&tbm=isch&sa=1&ei=aRrzWYDBAoi7wATq9a3QCQ&q=monitor&oq=monitor&gs_l=psy-ab.3..0i67k1l2j0l2j0i67k1j0l3j0i67k1j0.21949.22688.0.22814.7.6.0.0.0.0.172.338.0j2.2.0....0...1.1.64.psy-ab..5.2.337....0.fc17jVEc__8#imgrc=rk-K2ZlBt5ILRM:"
  },
  {
    
    "id": 4,
    "name": "HeadSet",
    "price": 300.00,  
    "uri": "https://www.google.com.br/search?biw=1405&bih=736&tbm=isch&sa=1&ei=gBrzWb3kK8emwgTB5bjYAg&q=headset&oq=headset&gs_l=psy-ab.3..0i67k1l2j0l7j0i67k1.25842.26680.0.26778.7.6.0.0.0.0.269.647.0j1j2.3.0....0...1.1.64.psy-ab..4.3.645....0.teb763zSQYA#imgdii=WPFr9yFau2moNM:&imgrc=yUuwBN9vcMLX4M:"
  },
  {
    "id": 5,
    "name": "Processador",
    "price": 699.98,
    "uri": "https://www.google.com.br/search?biw=1405&bih=736&tbm=isch&sa=1&ei=nBrzWYHUEIOpwASSuZPoAg&q=processador&oq=processador&gs_l=psy-ab.3..0l10.81015.84227.0.84315.23.17.3.0.0.0.334.2300.0j6j4j1.11.0....0...1.1.64.psy-ab..10.12.1825...0i10k1j0i67k1j0i10i24k1.0.9r0f5nHNyyc#imgrc=pnI5zcq_ziOaIM:"
  }
]


  


