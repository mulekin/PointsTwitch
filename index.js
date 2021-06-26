var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "mulekindalan",
		password: "oauth:e57cnpbmayu6pziuvptnd7l06pkksu",  
	},
	channels: ['#gaules', '#waveigl', '#cachorro1337c', '#murilo_rt', '#jeffaocs', '#pescocofino', '#csrfps', '#mibrtv' , '#brnwowzk1', '#Vovo', '#furiatv','#stereonline', '#skipnho', '#skipnholive', '#saullo', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
