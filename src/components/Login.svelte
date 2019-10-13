<script>
  import {firebase} from '../utils/firebase';

  function handleSignInClick() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
</script>

<button on:click={handleSignInClick}>Sign In</button>
