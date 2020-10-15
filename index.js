import tmi from 'tmi.js';

const opts = {
    identity: {
      username: 'Gpablosl',
      password: 'oauth:gyakij8dqwc7uy1il7uuasp65fuaek'
    },
    channels: [
      'Gpablosl'
    ]
  };

  const client = new tmi.client(opts);

  client.on('connected', (address, port)=>{
    client.say(opts.channels[0],'hola');
    console.log(`Bot listening at: ${address}:${port}`)
  });


  client.on('message', (target, ctx, msg, self)=>{
	if (msg === 'ping'){
		client.say(target, 'pong');	
	}	
});

  client.connect();