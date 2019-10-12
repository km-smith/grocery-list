<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';

  const initialization = (async function() {
    const response = await fetch('/__/firebase/init.json');
    firebase.initializeApp(await response.json());
  }());

  (async function() {
    await initialization;
    const result = await firebase.auth().getRedirectResult();
    console.log(result);
  }());

  function handleSignInClick() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
</script>

{#await initialization}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<button on:click={handleSignInClick}>Sign In</button>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
