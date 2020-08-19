import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/Index';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Overview from './components/Overview';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/index',
			name: 'index',
			component: Index,
        },
        {
			path: '/benefits',
			name: 'benefits',
			component: Benefits,
		},
		{
			path: '/overview',
			name: 'overview',
			component: Overview,
        },
        {
			path: '/contact',
			name: 'contact',
			component: Contact,
		}]
});

export default router;