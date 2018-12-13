// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/cupones/',
    	url: 'cupones.html',
    	name: 'cupones',
  		},
		{
		path: '/info-cupon/',
    	url: 'info-cupon.html',
    	name: 'info-cupon',
  		},
		{
		path: '/comidas/',
    	url: 'comidas.html',
    	name: 'comidas',
  		},
		{
		path: '/info-cake/',
    	url: 'info-cake.html',
    	name: 'info-cake',
  		},
		{
		path: '/cookies/',
    	url: 'cookies.html',
    	name: 'cookies',
  		},
		{
		path: '/info-cakes/',
    	url: 'info-cakes.html',
    	name: 'info-cakes',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

