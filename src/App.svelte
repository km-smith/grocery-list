<script>
  import {firebase, auth, getAppConfig} from './utils/firebase.js';
  import {setContext, APP_INIT} from './utils/context.js';
  import Login from './components/Login.svelte';
  import MealList from './components/MealList.svelte';

  const initialization = (async function() {
    firebase.initializeApp(await getAppConfig());
    return await firebase.auth().getRedirectResult();
  }());

  setContext(APP_INIT, initialization);
</script>

{#await initialization}
	<p>Bootstrapping the app...</p>
{:then currentUser}
  {#if currentUser.user === null}
    <Login/>
  {:else}
    <MealList/>
  {/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
