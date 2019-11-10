<script>
  import { firebase } from '../utils/firebase';
  const db = firebase.firestore();

  let meals = [];

  (async function() {
    const querySnapshot = await db.collection('meals').get();
    meals = querySnapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
  }());
</script>

<h1>Meal List</h1>
<ul>
  {#each meals as meal}
		<li>{meal.id}: {meal.name}</li>
	{/each}
</ul>